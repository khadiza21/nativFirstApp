import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetApiList = () => {
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        axios.get('http://10.0.2.2:3000/users').then(response => {
            setMyData(response.data);
        });
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.email}>{item.name}</Text>
            <Text style={styles.name}>{item.email}</Text>
        </View>
    );
    return (
        <View style={styles.container}>
            <Text>GetApiList</Text>
            <Text style={styles.header}>Users</Text>
            <FlatList
                data={myData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default GetApiList;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0f7fa',
        padding: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#00796b',
        marginBottom: 20,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 8,
        borderLeftColor: '#00796b',
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        color: '#004d40',
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: '#00796b',
    },
});
