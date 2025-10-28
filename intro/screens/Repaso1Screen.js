import React, { useEffect, useState } from 'react';
import {View,Text,StyleSheet,ImageBackground,Image,TouchableOpacity,StatusBar, Button, Alert, Platform, TextInput, Switch} from 'react-native';

// Las constantes de imágenes locales (require) ya están definidas.
// ASUME que esta ruta es correcta respecto a la ubicación de App.js.
const SPLASH_IMAGE = require('../assets/Recursos/Recurso1.png'); 
const MAIN_IMAGE = require('../assets/Recursos/widzy.jpg'); 
const LOGO_IMAGE = require('../assets/Recursos/Logo.jpg');

export default function repaso1() {
  // 1. STATE: Controla si mostramos el SplashScreen (true) o la App principal (false)
  const [isLoading, setIsLoading] = useState(true);//se inicia la pantalla de carga
  const [nombre, setNombre]= useState('');
  const[email, setEmail]= useState(''); 
    const[acepta, setAcepta]= useState(false);

  const mostrarAlerta=()=>{
const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//para validar que sea un correo valido
  return regex.test(email);
};
//hago validaciones con promesas (tema visto el parcial pasado)
const validarFormulario = () => {
  return new Promise((resolve, reject) => {
    // Validar nombre
    if (nombre.trim() === '') {
      reject('Por favor ingresa tu nombre antes de continuar.');
      return;
    }

    // Validar email vacío
    if (email.trim() === '') {
      reject('Por favor ingresa tu email antes de continuar.');
      return;
    }

    // Validar estructura del email
    if (!validarEmail(email)) {
      reject('Por favor ingresa un email válido (Ejemplo: usuario@dominio.com).');
      return;
    }

    // Validar aceptación de términos
    if (!acepta) {
      reject('Por favor acepta los términos antes de continuar.');
      return;
    }

    // Todo válido
    resolve({ nombre, email });
  });
};

// Uso
validarFormulario()
  .then((data) => {
    if (Platform.OS === 'web') {
      alert(`Registro exitoso!!!\nNombre: ${data.nombre}\nEmail: ${data.email}`);
    } else {
      Alert.alert(
        'Registro exitoso!!!',
        `Nombre: ${data.nombre}\nEmail: ${data.email}`,
        [{ text: 'Ok' }]
      );
    }
  })
  .catch((errorMsg) => {
    if (Platform.OS === 'web') {
      alert(errorMsg);
    } else {
      Alert.alert('Atención', errorMsg, [{ text: 'Aceptar' }]);
    }
  });


         /*  if (nombre.trim()===''){
              if(Platform.OS==='web'){
                  alert('Por favor ingresa tus datos antes de continuar.');
      }else{
          Alert.alert(
              'Atención',
              'Por favor, ingresa tus datos antes de continuar.',
              [
                  {text: 'cancelar'},
                  {text: 'aceptar'}
              ]
          );
      }
  
    }else{
      if(Platform.OS==='web'){
          alert('Registro exitoso!!!',`Nombre:, ${nombre}!`,`Email:, ${email}!`);
      }else{
          Alert.alert('Registro exitoso!!!',`Nombre:, ${nombre}!`,`Email:, ${email}!`,
              [
                  {text:'ok'}
              ]
          );
        }
      } */
    };

  // 2. EFECTO: Simula una tarea de inicialización de la app
  useEffect(() => { //iniciamos la acción que permanera activa hasta que el efecto termine
    //declaramos el useEffect (Hook que permite realizar una tarea con efecto secundario, en este caso un temporizador)
    const timer = setTimeout(() => {//creamos la variable timer y su función setTimeot
      setIsLoading(false); //finaliza la carga
    }, 3000);
    return () => clearTimeout(timer);//cancelara el temporizador cuando no sea necesario
    //se ejecuta 
  }, []);

  // 3. RENDERIZADO CONDICIONAL: SPLASH SCREEN
  if (isLoading) {
    return (
      <ImageBackground
        source={SPLASH_IMAGE} 
        resizeMode="cover"
        imageStyle={styles.splashImageStyle} 
        //imageStyle: es la propiedad que indica los estilos q apliquemos deben de ir en la imagen
        style={styles.splashBackground}
      >
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <View style={styles.splashOverlay}>
          <Image source={LOGO_IMAGE} style={styles.logo} resizeMode="contain" />
          <Text style={styles.splashTitle}>Mi App</Text>
          <Text style={styles.splashSubtitle}>Cargando aplicación...</Text>
        </View>
      </ImageBackground>
    );
  }
    
       

  // 4. RENDERIZADO CONDICIONAL: PANTALLA PRINCIPAL
  return (
    <ImageBackground
      
      source={MAIN_IMAGE}//Indica cual es el archivo que debe de mostar 
      resizeMode="cover" //Determina como se ajusta la imagen
      imageStyle={styles.mainImageStyle}//imageStyle: es la propiedad que indica los estilos q apliquemos deben de ir en la imagen
      
      style={styles.mainBackground}
      
    >

      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <View style={styles.mainOverlay}>
        <Text style={styles.welcome}>¡Bienvenido a la App!</Text>
        <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
        placeholderTextColor="#fff"
        />

        <TextInput
        style={styles.input}
        placeholder="Escribe tu e-mail"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#fff"
        autoCapitalize="none"
        keyboardType="email-address"
        />
        <View style={styles.switchContainer}>
        <Switch
            value={acepta}
            onValueChange={setAcepta}
        />
        <Text style={styles.switchText}>Aceptar los Términos y Condiciones</Text>
        </View>
                <Button style={styles.button} title="registrarse" onPress={mostrarAlerta}/>  
      </View>
    </ImageBackground>
  );
}

// 5. ESTILOS (Sin cambios)
const styles = StyleSheet.create({
  splashBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImageStyle: {
    opacity: 0.85,
  },

  splashOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.45)', 
    padding: 24,
    borderRadius: 12,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  splashTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
  },
  splashSubtitle: {
    color: '#dbeafe',
    marginTop: 8,
  },

  mainBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImageStyle: {
    opacity: 0.9,
  },
  mainOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(12, 0, 0, 0.5)', 
    padding: 20,
    borderRadius: 12,
  }, 
  welcome: {
    color: '#ffffffff',
    fontSize: 22,
    marginBottom: 20,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#5a7a84ff',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fefbfbff',
    fontWeight: '700',
  },
  input: {
  width: 250,
  height: 45,
  backgroundColor: "rgba(255,255,255,0.3)",
  borderRadius: 8,
  marginBottom: 15,
  paddingHorizontal: 10,
  borderWidth: 1,
  borderColor: "#7e7a7aff",
  color: "#000000ff",
},
switchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 15,
},
switchText: {
  color: '#fff',
  marginLeft: 8,
  fontSize: 14,
},
});