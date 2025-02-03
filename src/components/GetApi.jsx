/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GetApi = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        // fetch('http://localhost:3000/users')
        //     .then(res => { res.json() })
        //     .then(data => setUsers())
        axios.get('http://10.0.2.2:3000/users').then(res => {
            setUsers(res.data);
            console.log(res.data);
        })
    }, [])


    return (
        <View>
            <Text style={{ fontSize: 24, marginBottom: 10 }}>GetApi {users.length  }</Text>
            {
                users.map((user)=> (
                   <Text key={user.id}>{user.name}</Text>
                ))
            }
        </View>
    )
}

export default GetApi