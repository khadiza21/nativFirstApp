import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useRef } from 'react'

const UseRefHook = () => {

    const myRef = useRef();
    const handleRef = () => {
        myRef.current.setNativeProps({
            text:'Khadiza', 
            style: {color:'white',backgroundColor:'crimson'}
        })
        myRef.current.focus();
    }
    return (
        <View style={styles.container}>
            <TextInput 
            ref={myRef}
            style={styles.input}
            placeholder="Enter Your Text"
            placeholderTextColor="#999"
            />
            <TouchableOpacity onPress={handleRef} style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UseRefHook
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
    },
    button: {
        width:'100%',
        height:50,
        backgroundColor: '#0078ff',
        borderRadius: 10,
        justifyContent:'center',
        alignItems: 'center'
    },
    buttonText:{
        color:'#fff',
        fontSize: 18,
        fontWeight:'bold',
    }

})