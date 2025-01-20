import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';


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
    { id: 12, name: 'item 12' },
];

const Grid = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Grid</Text>
      <ScrollView>
        {
            itemList.map((item) => (
                <View key={item.id}>
                    <Text>{item.name}</Text>
                </View>
            ))
        }
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#f8f9fa',
    },
});
export default Grid;
