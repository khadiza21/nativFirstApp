/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
import React from 'react'
import { Button, Text, View } from 'react-native'

const First = () => {
    const getName = (name) => {
        console.warn('Function 1');
        console.log('khadiza')
    }
    const getAge = () => {
        console.warn('Function 2');
        console.log('age: 20')
    }
    return (

        <View>
            <Text style={{ fontSize: 20 }}>First component arrre making. </Text>

            <Button title='Press 1' onPress={() => getName('Khadiza')}  />

            <Text style={{ fontSize: 25 }}>Button two</Text>
            <Button title='Press 2' onPress={getAge} />
        </View>
    )
}

// eslint-disable-next-line no-trailing-spaces, eol-last
export default First; 