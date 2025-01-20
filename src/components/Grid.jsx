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
  { id: 13, name: 'item 13' },
  { id: 14, name: 'item 14' },
  { id: 15, name: 'item 15' },
  { id: 16, name: 'item 16' },
  { id: 17, name: 'item 17' },
  { id: 18, name: 'item 18' },
  { id: 19, name: 'item 19' },
  { id: 20, name: 'item 20' },
  { id: 21, name: 'item 21' },
  { id: 22, name: 'item 22' },
];

const Grid = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Grid</Text>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {
          itemList.map((item) => (
            <View style={styles.gridItem} key={item.id}>
              <Text style={styles.gridItemText}>{item.name}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#000',
  },
  contentContainer: {

    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#add8e6',
    marginBottom: 10,
    padding: 20,
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  gridItemText: {
    fontSize: 16,
    color: '#000',
  },
});
export default Grid;
