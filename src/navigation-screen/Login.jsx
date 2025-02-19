import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Login = ({navigation}) => {
  const [username, setUserName] = useState('');
  return (
    <View>
     <TextInput placeholder='Enter username' onChangeText={setUserName} />
     <Button title='Login' 
    //  onPress={() => navigation.navigate('About', {username:'Khadiza', age:25}) }
    onPress={() => navigation.navigate('About', {username, age:25}) }
      />
    </View>
  )
}

export default Login