import {View, Text, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const Api_Patch = () => {
  const [formData, setFormData] = useState({id: '', name: '', email: ''});

  const handleInput = (field, value) => {
   //setFormData({...formData, [field]:value})
   setFormData(prevState => ({ ...prevState, [field]: value }));

  };

  const handleSubmit = async () => {
    if (!formData.id) {
        Alert.alert('Error', 'Please enter a valid ID');
        return;
      }
    try {
        const response = await axios.patch(`http://10.0.2.2:3000/users/${formData.id}`, {
            ...formData.name && {name: formData.name},
            ...formData.email && {email: formData.email}

        });
        Alert.alert('Success!', 'Data Submitted Successfully');
        setFormData({ id: '', name: '', email: '' })
        console.log(response.data);

    } catch (error) {
        Alert.alert('Error', 'Failed to submit data')
    }
}

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 30, marginBottom: 10}}>
        POST_API
      </Text>
      <TextInput
        placeholder="Enter ID"
        onChangeText={value => handleInput('id', value)}
        value={formData.id}
      />
      <TextInput
        placeholder="Enter Name"
        onChangeText={value => handleInput('name', value)}
        value={formData.name}
      />
      <TextInput
        placeholder="Enter Email"
        onChangeText={value => handleInput('email', value)}
        value={formData.email}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Api_Patch;
