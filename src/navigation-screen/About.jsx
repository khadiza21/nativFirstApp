import { View, Text } from 'react-native'
import React from 'react'

const About = (props) => {
   // console.log(props.route.params);
    const {username,age} = props.route.params;
  return (
    <View>
      <Text>Name: {username}</Text>
      <Text>Name: {age}</Text>
    </View>
  )
}

export default About