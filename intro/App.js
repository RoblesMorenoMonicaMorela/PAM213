//1. imports: zona de importacones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


//2. Main: Zona de componentes
export default function App() {
  return (

    <View style={styles.container}>

      <Text>Hola Mundo React Native!!!</Text>{/*con shift+alt+a te dice cómo son los comentarios  */}
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
