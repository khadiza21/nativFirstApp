import { View, Text, SectionList, StyleSheet } from 'react-native'
import React from 'react'


const itemList = [

{
    title: 'Fruits',
    data:[
        {id: 1,name:'Apple'},
        {id: 2,name:'Orange'},
        {id: 3,name:'Cherry'},
    ]
},
{
    title: 'Flower',
    data:[
        {id: 1,name:'Daisy'},
        {id: 2,name:'Rose'},
        {id: 3,name:'Lily'},
    ]
},
]

const SectionListScreen = () => {
    const renderItem = ({item}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
        </View>
    ) // item => {curly dile return korte hobe tai () dewa }
    const renderSectionHeader = ({section}) => (
        <View style={styles.header}>
            <Text  style={styles.headerTitle} >{section.title}</Text>
        </View>
    ) // item => {curly dile return korte hobe tai () dewa }
  return (
    <View style={styles.container}>
     <SectionList sections={itemList}
     renderItem={renderItem} 
     renderSectionHeader={renderSectionHeader}
     keyExtractor={(key)=> key.key}
     />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        paddingTop: 15,
    }, 
    item: {
        backgroundColor: '#add8e6',
     padding: 10,
     margin:5 ,
     border:5 , 

    },
    title:{
        fontSize:18,
    },
    header:{
        backgroundColor: '#90ee90',
        padding:10,
        borderRadius:5,
        marginVertical:5
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    }

})
export default SectionListScreen