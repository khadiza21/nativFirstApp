import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const DeleteApi = () => {
    const [id, setId] = useState();
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://10.0.2.2:3000/users/${id}`)
            Alert.alert('Success!', 'Data Deleted Successfully!');
            console.log(response.data);
            setId();

        } catch (error) {
         Alert.alert('Error','Failed to delete data');
        }
    }
    return (
        <View>
            <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>Delete Api </Text>
            <TextInput
                placeholder='Enter Id'
                value={id}
                onChangeText={value => setId(value)}
            />
            <Button title='Delete' onPress={handleDelete} />
        </View>
    )
}

export default DeleteApi;