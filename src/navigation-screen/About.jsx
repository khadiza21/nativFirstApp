import { View, Text, Button } from 'react-native'
import React from 'react'

const About = (props) => {
   // console.log(props.route.params);
    const {username,age} = props.route.params;
  return (
    <View>
      <Text>Name: {username}</Text>
      <Text>Name: {age}</Text>
      <Button  title='Go Back' onPress={()=> props.navigation.goBack()} />
    </View>
  )
}

export default About