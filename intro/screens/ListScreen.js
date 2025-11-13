import { Text, StyleSheet, View, FlatList } from 'react-native'
import {useState} from 'react'

class Producto{
  constructor(id,titulo, descripcion,precio){
    this.id=id;
    this.titulo=titulo;
    this.descripcion=descripcion;
    this.precio=precio;
  }
}

export const productos=[
  new Producto(1,'Formula Of Love','Album Twice',500.99),
  new Producto(2,'PROOF','Album bts',600.99),
  new Producto(3,'Sanctuary','Album txt',700.99),
  new Producto(4,'Perfect Velvet','Album Red Velvet',800.99),
];

const ListScreen = () => {
  const [productList, setProductList]=useState(productos);
  return (
    <View style={styles.lista}> 
      <FlatList
        data={productList}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>(
          <View style={styles.item}>
            <Text>{item.titulo}</Text>
            <Text>{item.descripcion}</Text>
            <Text>{item.precio}</Text>
            <Text>Ver detalles</Text>
           </View> 
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    lista: {
      paddingVertical: 200
  
    },

    item: {
      padding: 15, // Espacio interno del item
      marginVertical: 8, // Separación vertical entre items
      marginHorizontal: 16, // Separación horizontal desde los bordes
      backgroundColor: '#f0f0f0', 
    }
})

export default ListScreen