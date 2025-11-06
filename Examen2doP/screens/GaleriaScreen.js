import React, { useEffect, useState } from 'react';
import {View,Text,StyleSheet,ImageBackground,Image,TouchableOpacity,StatusBar, Button, Alert, Platform, TextInput, Switch} from 'react-native';
import { ScrollView } from 'react-native-web';
//Robles Moreno Mónica Morela TIID213

// Las constantes de imágenes locales (require) ya están definidas.
// ASUME que esta ruta es correcta respecto a la ubicación de App.js.
const SPLASH_IMAGE = require('../assets/Recursos/Recurso1.png'); 
const MAIN_IMAGE = require('../assets/Recursos/widzy.jpg'); 
const LOGO_IMAGE = require('../assets/Recursos/Logo.jpg');

export default function repaso1() {
  // 1. STATE: Controla si mostramos el SplashScreen (true) o la App principal (false)
  //se ponen imagenes para el ScrollView 
  const images=  [
    require('../assets/Recursos/Logo.jpg'),
    require('../assets/Recursos/Logo.jpg'),
    require('../assets/Recursos/Logo.jpg'),
    require('../assets/Recursos/Logo.jpg'),
    require('../assets/Recursos/Logo.jpg'),
    require('../assets/Recursos/Logo.jpg'),
  ];
 /*  const index = 0; */
  const [isLoading, setIsLoading] = useState(true);//se inicia la pantalla de carga
  const [nombre, setNombre]= useState('');
  const[email, setEmail]= useState(''); 
    const[acepta, setAcepta]= useState(false);

  
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
          <Text style={styles.splashTitle}>Mi Galería</Text>
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
        <Text style={styles.welcome}>¡Mi Galería!</Text>
        {/* Implementar un ScrollView vertical que contenga mínimo 6 tarjetas de fotos */}
        {/* cada tarjeta con un ImageBackground con la fotografia */}
    {/*     4. Cada tarjeta debe contener:
- Un ImageBackground con la fotografia
- El título de la foto
- Una breve descripción
- Un Button con el texto “Ver detalles” */}
{/* <ScrollView styles = {styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={true}  persistentScrollbar={true} scrollEnabled={true}>
  */}  
  {/* las imágenes se ponen en el scrollview */}



  

  {/*  {images.map((img, index) => (
      <View key={index} style={styles.card}>
        <ImageBackground source={img} style={styles.cardImage} resizeMode="cover">
          <Text style={styles.cardText}>Foto {index + 1}</Text>
          <Text style={styles.cardText}>Descripción de la foto {index + 1}</Text>
          <Button
            title="Ver detalles"
            onPress={() => {
              if (Platform.OS === 'web') {
                alert(`Detalles de la foto ${index + 1}`);
              } else {
                Alert.alert('Detalles', `Detalles de la foto ${index + 1}`, [
                  { text: 'Cancelar' }, { text: 'Cerrar' }
                ]);
              } 
            }}
          />
        </ImageBackground>
      </View>
    ))} */}
       
              
      </View>

          <ScrollView styles={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={true} persistentScrollbar={true} scrollEnabled={true}>
    {images.map((img, index) => (
      <View key={index} style={styles.card}>
        <ImageBackground source={img} style={styles.cardImage} resizeMode="cover">
          <Text style={styles.cardText}>Foto {index + 1}</Text>
          <Text style={styles.cardText}>Descripción de la foto {index + 1}</Text>

          <Button
            title="Ver detalles"
            onPress={() => {
              if (Platform.OS === 'web') {  
                alert(`Detalles de la foto ${index + 1}`);
              } else {
                Alert.alert('Detalles',`Nombre: Foto ${index + 1}`  ,`Detalles de la foto ${index + 1}`, [
                   { text: 'Cerrar' }
                ]);
              }
            }}
          />
        </ImageBackground>
      </View>
    ))}
  </ScrollView>

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
   box: {
    backgroundColor: '#82b6ed',
    width:'90%',
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
   Text: {
    fontSize: 18,
    color: '#1f2937',
    textAlign: 'center',
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
    //se pone hasta arriba esta sección
    alignItems: 'top-center',
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
  card: {
    backgroundColor: '#ffffffaa',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    width: 300,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 200,

  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
   scroll: {
    flex:1,
    marginRadius:10,
    backgroundColor:'#f9fafb',
  },
   content: {
    alignItems: 'center',
    paddingVertical: 15,
  },

});