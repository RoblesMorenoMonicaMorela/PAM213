import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GaleriaScreen from './screens/GaleriaScreen';

//2. Main: Zona de componentes  

export default function App() {
  return (
   <GaleriaScreen/>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
