/* eslint-disable react-native/no-inline-styles */

// rnfe 
import React from 'react';
import { View} from 'react-native';
// import First from './src/components/First';
// import InputText from './src/components/InputText';
// import FlatListScreen from './src/components/FlatListScreen';
// import SectionListScreen from './src/components/SectionListScreen';
// import LoginForm from './src/components/LoginForm';
// import ContactListScreen from './src/screens/ContactListScreen';
import Grid from './src/components/Grid';;
const App = () => {
  return (
    <View>
      <Grid />
       {/* 
      <ContactListScreen />
     <LoginForm />
      <SectionListScreen />
       <FlatListScreen />
      <Text style={{ fontSize: 30 }}>Khadiza is Nice </Text>
      <Text style={{ fontSize: 20 }}>Khadiza is  Smart</Text>
      <Button title="Press Here" />
      <First />
      <InputText /> */}
    </View>
  );
};

export default App;
