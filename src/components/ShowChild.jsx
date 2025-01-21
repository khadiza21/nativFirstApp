/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React, { useEffect } from 'react';


const ShowChild = () => {
  // use effect use for unmounting phase . use ex: kono kichu hide hower por kono pop up dekhno
useEffect(()=> {
// console.log('I am a Child component ');
return() => {
  console.log('Child Component Unmounted');
}
},[]);
  return (
    <View>
      <Text style={{fontSize:30}} >Child Component</Text>
    </View>
  );
};

export default ShowChild;
