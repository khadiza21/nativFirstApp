/* eslint-disable jsx-quotes */
/* eslint-disable semi */
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import style from '../style/style';

const InputText = () => {
    // eslint-disable-next-line no-unused-vars
    const [userName, setUserName] = useState('');
    const getText = () => {
        console.log('bk')
    }

    return (
        // inline css
        <View style={{margin:(10, 5)}}> 
            <Text style={styles.textTitle}>InputText</Text>
            <Button title='Press 1' onPress={() => getText()} />

            <Text style={style.text}>Input Text</Text>
            <Text style={style.text}>Username : {userName}</Text>
            <TextInput style={style.textInput} value={userName} placeholder='Enter you Name' onChangeText={(text) => {
                setUserName(text)
            }} />
            <Button  title='Clear' onPress={() => { setUserName('') }} />

        </View>
    )
}
// internal css
const styles = StyleSheet.create({
    textTitle: {
        fontSize: 30, fontWeight: 'bold', color: 'crimson', padding: (10, 5),
    }
})
export default InputText
