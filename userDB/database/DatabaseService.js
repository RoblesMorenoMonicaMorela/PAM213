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
      console.log('Usando SQLite para móvil');

      this.db = await SQLite.openDatabaseAsync('miapp.db');

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
      const fecha = new Date().toISOString();

      const result = await this.db.runAsync(
        'INSERT INTO usuarios (nombre, fecha_creacion) VALUES (?, ?)',
        [nombre, fecha]
      );

      return {
        id: result.lastInsertRowId,
        nombre,
        fecha_creacion: fecha
      };
    }
  }

  async delete(id) {
    if (Platform.OS === 'web') {
      const usuarios = await this.getAll();
      const filtrados = usuarios.filter(u => u.id !== id);
      localStorage.setItem(this.storageKey, JSON.stringify(filtrados));
      return true;
    } else {
      return await this.db.runAsync(
        'DELETE FROM usuarios WHERE id = ?',
        [id]
      );
    }
  }

// ACTUALIZAR 
  async update(id, nuevoNombre) {
    if (Platform.OS === 'web') {
      const usuarios = await this.getAll();
      // Buscamos el índice del usuario
      const index = usuarios.findIndex(u => u.id === id);
      if (index !== -1) {
        usuarios[index].nombre = nuevoNombre;
        localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
      }
    } else {
   
      await this.db.runAsync(
        'UPDATE usuarios SET nombre = ? WHERE id = ?',
        nuevoNombre,
        id
      );
    }
  }
}

export default new DatabaseService();
