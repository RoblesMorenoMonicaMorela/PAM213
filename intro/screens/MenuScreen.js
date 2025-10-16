import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import InputScreen from './InputScreen'
import ListScreen from './ListScreen'
import IndicatorScreen from './IndicatorScreen'
import BottomSheetScreen from './BottomSheetScreen'
import BackgroundScreen from './BackgroundScreen'
import ScrollScreen from './ScrollScreen'
import ModalScreen from './ModalScreen'

export default function MenuScreen() {

    const [screen, setScreen] = useState('menu'); /* desestructuración */ /* declaración del estado e inicialización del menu */

    switch (screen) {
      case 'contador':
        return <ContadorScreen />;
      case 'botones':
        return <BotonesScreen />;
      case 'input':
        return <InputScreen />;
      case 'list':
        return <ListScreen />;  
      case 'indicator':
        return <IndicatorScreen />;
      case 'bottomsheet':
        return <BottomSheetScreen />;
      case 'background':
        return <BackgroundScreen />;
      case 'scroll':
        return <ScrollScreen />;
      case 'modal':
        return <ModalScreen />;
        case 'menu':
            default:
                return (
                    <View style={styles.container}>
                        <Text style={styles.txt2}>Menú de Prácticas</Text>
                        <View style={styles.buttonContainer}>
                        <Button title='Pract: Contador' onPress={()=>setScreen('contador')}/>{/* el valor que esté dentro de setScreen debe ser igual al del switch */}
                        <Button title='Pract: Buttons & switch' onPress={()=>setScreen('botones')}/>
                        <Button title='Pract: Text Input & Alert' onPress={()=>setScreen('input')}/>
                        <Button title='Pract: ImageBackgroung & SlapshScreen' onPress={()=>setScreen('background')}/>
                        <Button title='Pract: ScrollView' onPress={()=>setScreen('scroll')}/>
                        <Button title='Pract: Activity Indicator' onPress={()=>setScreen('indicator')}/>
                        <Button title='Pract: FlatList y Section List' onPress={()=>setScreen('list')}/>
                        <Button title='Pract: Modal' onPress={()=>setScreen('modal')}/>
                        <Button title='Pract: Bottom Sheet' onPress={()=>setScreen('bottomsheet')}/>
                          </View>
                    </View>
                )
    }


  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#162971ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt:{
    color:'#ffffff',
    fontSize:30,
    fontFamily: 'Times New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
  },
  txt2:{
    color:'#ffffff',
    fontSize:35,
    fontFamily: 'Courier New',
    fontWeight:700,
    fontStyle:'italic',
    textDecorationLine:'underline',
  },
  buttonContainer:{
    marginTop:15,
    alignItems: 'center',
    justifyContent: 'center',
    gap:10,
  },
});