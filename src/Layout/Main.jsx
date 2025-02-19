import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../navigation-screen/Home';
import About from '../navigation-screen/About';

const Main = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
                <Stack.Screen name='About' component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Main