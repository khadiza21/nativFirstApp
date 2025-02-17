import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
// update
const PutApi = () => {
  const [formData, setFormData] = useState({ id: '', name: '', email: '' })

  const handleInput = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://10.0.2.2:3000/users/${formData.id}`, {
        name: formData.name,
        email: formData.email
      });
      Alert.alert('Success!', 'Data Submitted Successfully');
      console.log(response.data);
      setFormData({ id: '', name: '', email: '' })
      Alert.alert('Success', 'Data updated successfully')
      console.log(response.data);
    } catch (error) {
      Alert.alert('Error', 'Failed to submit data')
    }
  }

  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 30, marginBottom: 20 }}>Put_Api</Text>
      <TextInput placeholder='Enter ID' onChangeText={(value) => handleInput('id', value)} value={formData.id} />
      <TextInput placeholder='Enter Name' onChangeText={(value) => handleInput('name', value)} value={formData.name} />
      <TextInput placeholder='Enter Email' onChangeText={(value) => handleInput('email', value)} value={formData.email} />
      <Button title='Update' onPress={handleUpdate} />

    </View>
  )
}

export default PutApi