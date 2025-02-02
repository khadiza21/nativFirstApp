/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React, { Component } from 'react';
import SecondClass from './SecondClass';


class ClassComponents extends Component {

    render() {

        const age = 22;
        return (
            <View>
                <Text style={{fontSize:30}}>Class Component</Text>
                <SecondClass data={age} />
            </View>
        );
    }
}

export default ClassComponents;