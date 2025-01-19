/* eslint-disable react-native/no-inline-styles */

// rnfe 
import React from 'react';
import { View, Text, Button } from 'react-native';
import First from './src/components/First';
import InputText from './src/components/InputText';
import FlatListScreen from './src/components/FlatListScreen';
import SectionListScreen from './src/components/SectionListScreen';
const App = () => {
  return (
    <View>
      <SectionListScreen />
       <FlatListScreen />
      <Text style={{ fontSize: 30 }}>Khadiza is Nice </Text>
      <Text style={{ fontSize: 20 }}>Khadiza is  Smart</Text>
      <Button title="Press Here" />
      <First />
      <InputText />
     
    </View>
  );
};

export default App;
