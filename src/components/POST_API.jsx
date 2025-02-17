import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const POST_API = () => {
    const [formData, setFormData] = useState({ id: '', name: '', email: '' });

    const handleInput = (field, value) => {
        setFormData({ ...formData, [field]: value });
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://10.0.2.2:3000/users', formData);
            Alert.alert('Success!', 'Data Submitted Successfully');
            console.log(response.data);
            setFormData({ id: '', name: '', email: '' })
        } catch (error) {
            Alert.alert('Error', 'Failed to submit data')
        }
    }

    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 30, marginBottom: 10 }}>POST_API</Text>
            <TextInput placeholder='Enter ID' onChangeText={value => handleInput('id', value)} value={formData.id} />
            <TextInput placeholder='Enter Name' onChangeText={value => handleInput('name', value)} value={formData.name} />
            <TextInput placeholder='Enter Email' onChangeText={value => handleInput('email', value)} value={formData.email} />
            <Button title='Submit' onPress={handleSubmit} />
        </View>
    )
}

export default POST_API