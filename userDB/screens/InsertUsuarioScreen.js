import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, ActivityIndicator, Platform, Modal } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';

const controller = new UsuarioController();

export default function InsertUsuarioScreen() {

  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);

  // Estados para modal de edición
  const [modalVisible, setModalVisible] = useState(false);
  const [usuarioAEditar, setUsuarioAEditar] = useState(null);
  const [nuevoNombreEditar, setNuevoNombreEditar] = useState('');

  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleAgregar = async () => {
    if (guardando) return;
    try {
      setGuardando(true);
      await controller.crearUsuario(nombre);
      setNombre('');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setGuardando(false);
    }
  };

  const eliminarUsuario = async (id) => {
    if (guardando) return;
    try {
      setGuardando(true);
      await controller.eliminarUsuario(id);
      Alert.alert("Usuario eliminado");
    } catch (e) {
      Alert.alert("Error", e.message);
    } finally {
      setGuardando(false);
    }
  };

  const abrirModalEditar = (usuario) => {
    setUsuarioAEditar(usuario);
    setNuevoNombreEditar(usuario.nombre);
    setModalVisible(true);
  };

  const guardarEdicion = async () => {
    try {
      if (usuarioAEditar) {
        await controller.editarUsuario(usuarioAEditar.id, nuevoNombreEditar);
        setModalVisible(false);
        setUsuarioAEditar(null);
      }
    } catch (e) {
      Alert.alert("Error", e.message);
    }
  };

  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
    };
    init();

    controller.addListener(cargarUsuarios);

    return () => {
      controller.removeListener(cargarUsuarios);
    };
  }, [cargarUsuarios]);

  const renderUsuario = ({ item, index }) => (
    <View style={styles.userItem}>
      
      <View style={styles.userNumber}>
        <Text style={styles.userNumberText}>{index + 1}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.nombre}</Text>
        <Text style={styles.userId}>ID: {item.id}</Text>
        <Text style={styles.userDate}>
          {new Date(item.fechaCreacion).toLocaleDateString()}
        </Text>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={() => abrirModalEditar(item)}>
          <Text style={styles.refreshText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => eliminarUsuario(item.id)}>
          <Text style={styles.refreshText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>INSERT & SELECT</Text>
      <Text style={styles.subtitle}>
        {Platform.OS === 'web' ? 'WEB (LocalStorage)' : 'MÓVIL (SQLite)'}
      </Text>

      {/* INSERT */}
      <View style={styles.insertSection}>
        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre..."
          value={nombre}
          onChangeText={setNombre}
        />

        <TouchableOpacity 
          style={[styles.button, guardando && styles.buttonDisabled]} 
          onPress={handleAgregar}
          disabled={guardando}
        >
          <Text style={styles.buttonText}>{guardando ? '...' : 'Agregar Usuario'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.selectSection}>

        <View style={styles.selectHeader}>
          <Text style={styles.sectionTitle}>Lista de Usuarios</Text>

          <TouchableOpacity 
            style={styles.refreshButton}
            onPress={cargarUsuarios}
          > 
            <Text style={styles.refreshText}>Recargar</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.loadingText}>Cargando usuarios...</Text>
          </View>
        ) : (
          <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderUsuario}
          />
        )}
      </View>

      {/* modal para editar  */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Editar Nombre</Text>

            <TextInput
              style={styles.input}
              value={nuevoNombreEditar}
              onChangeText={setNuevoNombreEditar}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity 
                onPress={() => setModalVisible(false)} 
                style={styles.modalBtnCancel}
              >
                <Text style={styles.textCancel}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={guardarEdicion} 
                style={styles.modalBtnSave}
              >
                <Text style={styles.textSave}>Guardar</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f5f5f5',
    paddingTop: 50 
  },

  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#333', 
    marginBottom: 5
   },

  subtitle: { 
    fontSize: 14, 
    color: '#666', 
    textAlign: 'center', 
    marginBottom: 20 
  },

  insertSection: { 
    backgroundColor: '#fff', 
    padding: 20, 
    marginHorizontal: 15, 
    marginBottom: 15, 
    borderRadius: 12, 
    shadowOpacity: 0.1, 
    elevation: 3 
  },

  selectSection: { 
    flex: 1, 
    backgroundColor: '#fff', 
    marginHorizontal: 15, 
    marginBottom: 15, 
    borderRadius: 12, 
    padding: 15, 
    shadowOpacity: 0.1, 
    elevation: 3 
  },

  selectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  refreshButton: { 
    padding: 8 
  },

  refreshText: { 
    color: '#007AFF', 
    fontSize: 14 
  },

  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 15 
  },

  input: { 
    borderWidth: 1, 
    borderColor: '#e0e0e0', 
    borderRadius: 8, 
    padding: 15, 
    marginBottom: 12, 
    fontSize: 16, 
    backgroundColor: '#fafafa' 
  },

  button: { 
    backgroundColor: '#007AFF', 
    padding: 16,
    borderRadius: 8, 
    alignItems: 'center' 
  },

  buttonDisabled: { 
    backgroundColor: '#ccc'
   },

  buttonText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: '600' 
  },

  loadingContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingVertical: 40 
  },

  loadingText: { 
    marginTop: 10, 
    color: '#666', 
    fontSize: 14 
  },

  userItem: { 
    flexDirection: 'row', 
    backgroundColor: '#f9f9f9', 
    padding: 15, 
    borderRadius: 8, 
    marginBottom: 10, 
    borderLeftWidth: 4, 
    borderLeftColor: '#007AFF' 
  },

  userNumber: { 
    width: 35, height: 35, 
    borderRadius: 17.5, 
    backgroundColor: '#007AFF',
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 12 
  },

  userNumberText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 14 
  },

  userInfo: { 
    flex: 1 
  },

  userName: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#333' 
  },

  userId: { 
    fontSize: 12, 
    color: '#007AFF' 
  },

  userDate: { 
    fontSize: 12, 
    color: '#666' 
  },

  actionButtons: { 
    justifyContent: 'center', 
    alignItems: 'flex-end', 
    marginLeft: 10 
  },

  centeredView: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: 'rgba(0,0,0,0.4)' 
  },

  modalView: { 
    width: '80%', 
    backgroundColor: "white", 
    borderRadius: 12, 
    padding: 25, 
    shadowColor: "#000", 
    elevation: 5 
  },

  modalTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 15, 
    textAlign: 'center'
   },

  modalButtons: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 10 
  },

  modalBtnCancel: { 
    padding: 10 
  },

  modalBtnSave: { 
    backgroundColor: '#007AFF', 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 5 
  },

  textCancel: { 
    color: '#666', 
    fontWeight: 'bold' 
  },

  textSave: { 
    color: 'white', 
    fontWeight: 'bold' 
  }
});
