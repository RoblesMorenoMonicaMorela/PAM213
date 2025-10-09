//1. imports: zona de importacones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


//2. Main: Zona de componentes
export default function App() {
  return (

    <View style={styles.container}>

      <Text>Contador: </Text>{/*con shift+alt+a te dice cómo son los comentarios  */}
      {/*<Button></Button>*/}
      <Button title='Agregar'/>

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
