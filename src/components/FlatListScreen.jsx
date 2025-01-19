import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const FlatListScreen = () => {
    const itemList = [
        { id: 1, name: 'item 1' },
        { id: 2, name: 'item 2' },
        { id: 3, name: 'item 3' },
        { id: 4, name: 'item 4' },
        { id: 5, name: 'item 5' },
        { id: 6, name: 'item 6' },
        { id: 7, name: 'item 7' },
        { id: 8, name: 'item 8' },
        { id: 9, name: 'item 9' },
        { id: 10, name: 'item 10' },
        { id: 11, name: 'item 11' },
        { id: 12, name: 'item 12' }
    ]

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
        </View>
    )
    return (
        <View  style={styles.container}>
            <Text>FlatListScreen</Text>
            <FlatList
                contentContainerStyle={styles.list}
                data={itemList} renderItem={renderItem} keyExtractor={(key) => key.id} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d7f8u7',
        padding: 15,
        margin: 10,
        borderRadius: 10
    },
    list: {
        paddingVertical: 20,

    },
    item: {
        backgroundColor:'crimson',
        borderWidth:5 ,
        borderColor: 'purple',
        marginVertical: 8,
        borderRadius: 8,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0, height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2
   },
   title:{
    color:'#fff',
    fontSize:18
   }


})
export default FlatListScreen;
