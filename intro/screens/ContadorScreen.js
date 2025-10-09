//1. imports: zona de importacones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React ,{useState}from 'react';

//2. Main: Zona de componentes
export default function App() {

  const [contador, setContador]=useState(0);/* desestructuración */

  return (

    <View style={styles.container}>

      <Text style={styles.txt}>Contador: </Text>
      <Text style={styles.txt2}>{contador} </Text>{/*con shift+alt+a te dice cómo son los comentarios  */}
      {/*<Button></Button>*/}
      <Button title='Agregar' onPress={()=>setContador(contador+1)}/>
      <Button title='Quitar' onPress={()=>setContador(contador-1)}/>
      <Button title='Reiniciar' onPress={()=>setContador(0)}/>

      <StatusBar style="auto" />

    </View>
  );
}

//3. Styles: Zona estética y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#162971ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt:{
    color:'#ffffff',
    fontSize:30,
    fontFamily: 'Times New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
  },
  txt2:{
    color:'#ffffff',
    fontSize:35,
    fontFamily: 'Courier New',
    fontWeight:700,
    fontStyle:'italic',
    textDecorationLine:'underline',
  },
});
