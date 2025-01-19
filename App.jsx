/* eslint-disable react-native/no-inline-styles */

// rnfe 
import React from 'react';
import { View, Text, Button } from 'react-native';
import First from './src/components/First';
const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Khadiza is Nice </Text>
      <Text style={{ fontSize: 20 }}>Khadiza is  Smart</Text>
      <Button title="Press Here" />
      <First />
    </View>
  );
};

export default App;
