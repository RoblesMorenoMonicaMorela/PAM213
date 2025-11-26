import { Platform } from 'react-native';
import * as SQLite from 'expo-sqlite';

class DatabaseService {
  constructor() {
    this.db = null;
    this.storageKey = 'usuarios'; 
  }

  async initialize() {
    if (Platform.OS === 'web') {
      console.log('Usando LocalStorage para web');
    } else {
      console.log('Usando SQLite para movil');
      // 1. Abrir la BD
      this.db = await SQLite.openDatabaseAsync('miapp.db');
      
      // Usar 'execAsync' en lugar de 'loadExtensionAsync'
      // execAsync es para ejecutar sentencias SQL de estructura (DDL)
      await this.db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS usuarios (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL,
          fecha_creacion TEXT
        );
      `);
      console.log('Tabla usuarios verificada');
    }
  }

  async getAll() {
    if (Platform.OS === 'web') {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } else {
      return await this.db.getAllAsync('SELECT * FROM usuarios ORDER BY id DESC');
    }
  }

  async add(nombre) {
    if (Platform.OS === 'web') {
      const usuarios = await this.getAll();
      const nuevoUsuario = {
        id: Date.now(),
        nombre,
        fecha_creacion: new Date().toISOString()
      };
      usuarios.unshift(nuevoUsuario);
      localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
      return nuevoUsuario;
    } else {
      //  Pasar el parámetro 'nombre' a la consulta
      const result = await this.db.runAsync(
        'INSERT INTO usuarios (nombre, fecha_creacion) VALUES (?, ?)', 
        nombre, 
        new Date().toISOString() // Pasamos también la fecha para que coincida con la web
      );

      return {
        id: result.lastInsertRowId,
        nombre,
        fecha_creacion: new Date().toISOString()
      };
    }
  }
}

// Exportar instancia de la clase 
export default new DatabaseService();