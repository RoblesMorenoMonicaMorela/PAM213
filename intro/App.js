//1. imports: zona de importacones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React ,{useState}from 'react';

//2. Main: Zona de componentes
export default function App() {

  const [contador, setContador]=useState(0);/* desestructuración */

  return (

    <View style={styles.container}>

      <Text>Contador: {contador} </Text>{/*con shift+alt+a te dice cómo son los comentarios  */}
      {/*<Button></Button>*/}
      <Button title='Agregar' onPress={()=>setContador(contador+1)}/>

      <StatusBar style="auto" />

    </View>
  );
}

//3. Styles: Zona estética y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
