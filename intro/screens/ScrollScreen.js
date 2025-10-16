import { Text, StyleSheet, View } from 'react-native'

export default function ScrollScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt2}>Próximamente por Barbara Itzel & equipo</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#162971ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt2:{
    color:'#ffffff',
    fontSize:35,
    fontFamily: 'Courier New',
    fontWeight:700,
    fontStyle:'italic',
    textDecorationLine:'underline',
  },});