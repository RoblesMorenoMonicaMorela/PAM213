import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'

export default function MenuScreen() {

    const [screen, setScreen] = useState('menu'); /* desestructuración */ /* declaración del estado e inicialización del menu */

    switch (screen) {
      case 'contador':
        return <ContadorScreen />;
      case 'botones':
        return <BotonesScreen />;
        case 'menu':
            default:
                return (
                    <View>
                        <Text>Menú de Prácticas</Text>
                        <Button title='Pract: Contador' onPress={()=>setScreen('contador')}/>{/* el valor que esté dentro de setScreen debe ser igual al del switch */}
                        <Button title='Pract: Buttons' onPress={()=>setScreen('botones')}/>
                    </View>
                )
    }


  }


const styles = StyleSheet.create({})