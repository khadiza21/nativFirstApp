/* eslint-disable no-trailing-spaces */
import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

const PressableComponent = () => {
    // const handlePress = () => {
    //     console.log('on press');
    // };

    const handlePressIn = () => {
        console.log('press In');
    };

    const handlePressOut = () => {
        console.log('out press');
    };
    

    const handleOnLongPress = () => {
        console.log('On Long Press ');
    };
    return (
        <View style={styles.container}>
                 {/* by default 500ms press time. can change time with delayLongPress */}
            <Pressable style={styles.button}
              // onPress={handlePress}

              onPressIn={handlePressIn}
                onPressOut={handlePressOut}
               onLongPress={handleOnLongPress}
              delayLongPress={5000} // Long press delay set to 5 seconds
            >
                <Text style={styles.buttonText}>Press Me</Text>
            </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#007bff',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },

});

export default PressableComponent;
