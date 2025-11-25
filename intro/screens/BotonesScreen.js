import { Text, StyleSheet, View, Button, Switch } from 'react-native'
import { StatusBar } from 'react-native'
import React, {useState} from 'react'

export default function BotonesScreen()  {
  const [modoOscruro, setModoOscuro] = useState(false);
  const [notificaciones, setNotificaciones] = useState(false);
  const [ubicacion, setUbicacion] = useState(false);
  const [aceptaTyC, setAcepta] = useState(false);

  const tema=modoOscruro ? styles.darkTheme: styles.lightTheme; //comparación terniaria o valor de comparacion u operador terniario u operador condicional
  const texto=modoOscruro ? styles.textDark : styles.textLight; 

  return (
    <View style={[styles.container, tema]}>
      <Text style={[styles.title, texto]}>Pantalla de Botones & Switches</Text>

      <View style={styles.section}>
      <Text style={[styles.subtitulo, texto]}>Botones</Text>

        <View style={styles.buttonContainer}>
          <Button title="Boton Azul" color="blue" onPress={()=>{}} />
          <Button title="Boton Verde" color="#28a745" onPress={()=>{}} />
          <Button title="Boton Amaríllo" color="#ffc107" onPress={()=>{}} />
          <Button title="Boton Rojo" color="#dc3545" onPress={()=>{}} />
          <Button title="Boton Morado" color="#6f42c1" onPress={()=>{}} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.subtitulo, texto]}>Switches</Text>

        <View style={styles.switchRow}>
          <Text style={[styles.switchText, texto]}>Modo Oscuro</Text>
          <Switch value={modoOscruro} onValueChange={() => setModoOscuro(!modoOscruro)}/>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={[styles.estadoTexto, texto]}>
          Modo Oscuro: {modoOscruro ? 'Activado' : 'Desactivado'}
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#162971ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  lightTheme:{
    backgroundColor:'#f0f8ff',
  },
  darkTheme:{
    backgroundColor:'#1a1a1a',
  },
  lightText:{
    color:'#000',
  },
  textDark:{
    color:'#fff',
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  section:{
    alignItems:'center',
    width:'30%',
    marginBottom:25,
  },
  subtitulo:{
    fontSize:20,
    fontWeight:'600',
    marginBottom:15,
    textDecorationLine:'underline'
  },
  buttonContainer:{
    width:'100%',
    marginVertical:5,
  },
  switchRow:{
    flexDirection:'row',
    justifyContent :'space-between',
    alignItems: 'center',
     backgroundColor: '#ffffff20',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
    marginVertical: 5,
  },
  switchText: {
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    marginTop: 10,
    alignItems: 'center',
  },
  estadoTexto: {
    fontSize: 15,
  },
})