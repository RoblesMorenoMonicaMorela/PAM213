import React, { useState } from 'react'; 
import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native';//  el spinner de carga.

export default function IndicatorScreen() {
  const [cargando, setCargando] = useState(false); // cargando dice si el spinner debe mostrarse. Empieza en false

  const [mostrarContenido, setMostrarContenido] = useState(false);
// mostrarContenido decide si mostrar el mensaje final

  const [mensajePrompt, setMensajePrompt] = useState('Presiona "Acción" para comenzar');
// mensajePrompt guía o estado actual

  const manejarCarga = () => { 
    setCargando(true);
    setMostrarContenido(false);
    setMensajePrompt('Cargando... por favor espera');

    setTimeout(() => {
      setCargando(false);
      setMostrarContenido(true);
      setMensajePrompt('¡Acción completada!');
    }, 5000);
  // Después de 5 segundos, oculta el spinner, muestra el mensaje final y actualiza el prompt.
  };
  const cancelarCarga = () => {
    setCargando(false);
    setMostrarContenido(false);
    setMensajePrompt('Carga cancelada');
  };
  //Si presionas "Cancelar", se detiene todo y se muestra un mensaje de cancelación

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Practica: Activity Indicator</Text>
      <Text style={styles.prompt}>{mensajePrompt}</Text>

      <View style={styles.botones}>
        <Button color="#fb5c97ff" title="Acción" onPress={manejarCarga} />
        <View style={{ width: 10 }} />
        <Button color="#868585ff" title="Cancelar" onPress={cancelarCarga} /> 
      </View>
      {/*  Dos botones: uno para iniciar la carga, otro para cancelarla. El espacio entre ellos es un View con ancho.
 */}

      {cargando && (
        <ActivityIndicator
          size="large"
          color="#ff4805ff"
          style={styles.indicador}
        />
      )}
      {/* Si cargando es true, muestra el spinner
 */}

      {mostrarContenido && (
        <Text style={styles.contenido}> ¡¡ Acción realizada :D!!</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffffff',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#000000ff',
  }, 
  prompt: {
    fontSize: 16,
    marginBottom: 20,
    color: '#3448faff',
  },
  botones: {
    flexDirection: 'row', 
    marginBottom: 20, 
  },
  indicador: {
    marginVertical: 20,
  },
  contenido: {
    fontSize: 18,
    color: 'green',
    marginTop: 10,
    fontWeight: '600',
  },
});