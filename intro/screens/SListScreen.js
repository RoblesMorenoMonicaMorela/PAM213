import { View, Text, StyleSheet,SectionList } from 'react-native'
import React from 'react'

//variable para guardar datos
const houses=[
    {
        title:'DC Comics',
        data:['Batman','Nightwing','Mujer Maravilla','Superman','Wonder Woman','Flash','Green Lantern','Aquaman','Robin','Batgirl','The Flash','Green Arrow','Cyborg','Teen Titans','Supergirl','Aquaman','Batwoman'],
    },
    {
        title:'Marvel Comics',
        data:['Spiderman','Wolverine','Hulk','Ironman','Thor','Capitán América','Black Widow','Doctor Strange','Black Panther','Deadpool','Antman','Scarlet Witch','Vision','Falcon','Winter Soldier','Daredevil'],
    },
];


const SListScreen = () => {
  return (
    <View style={styles.container}>
      <SectionList
      
        sections={houses}
        keyExtractor={(item) => item}
        renderItem={({item})=>(<Text>{item}</Text>)}
        renderSectionHeader={({section})=>(
            <Text style={styles.sectionHeader}>{section.title}</Text>

        )}
      
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  }
});

export default SListScreen