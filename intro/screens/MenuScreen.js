import { Text, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './contadorScreen'
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
                    </View>
                )
    }


  }


const styles = StyleSheet.create({})