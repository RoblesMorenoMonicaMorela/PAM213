import { Text, StyleSheet, View, Button, Alert, Platform, TextInput } from 'react-native'
import React,{useState} from 'react'
//realizamos las importaciones necesarias

export default function InputScreen() {
    const [nombre, setNombre]= useState('');
    const[contrasena, setContrasena]= useState('');
    const[multexto, setMultitexto]= useState('');
    const mostrarAlerta=()=>{
        if (nombre.trim()===''){
            if(Platform.OS==='web'){
                alert('Por favor escribe tu nombre antes de continuar.');
    }else{
        Alert.alert(
            'Atención',
            'Por favor, escribe tu nombre antes de continuar.',
            [
                {text: 'cancelar'},
                {text: 'aceptar'}
            ]
        );
    }

  }else{
    if(Platform.OS==='web'){
        alert(`Bienvenido, ${nombre}!`);
    }else{
        Alert.alert('Hola',`Bienvenido, ${nombre}!`,
            [
                {text:'cancelar'},{text:'aceptar'}
            ]
        );
      }
    }
  };
return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Práctica: TextInput y Alert</Text>
        <TextInput
            style={styles.input}
            placeholder='Escribe tu nombre'
            value={nombre}
            onChangeText={setNombre}
        />
        <TextInput
            style={styles.input}
            placeholder='Escribe tu contraseña'
            secureTextEntry={true}
            keyboardType='numeric'
            value={contrasena}
            onChangeText={setContrasena}
        />
        <TextInput
            style={styles.input}
            placeholder='Escribe tu texto'
            multiline={true}
            value={multexto}
            onChangeText={setMultitexto}
        />
        <Button title="Mostrar Alerta" onPress={mostrarAlerta}/>
    </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    padding: 20,
  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
    input:{
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 5,
        width: '80%',
        padding: 10,
        marginBottom: 15,
    },
  });
