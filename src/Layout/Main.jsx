import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../navigation-screen/Home';
import About from '../navigation-screen/About';
import Login from '../navigation-screen/Login';
import {StyleSheet} from 'react-native';

const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: '#fff',
          contentStyle: styles.screen,
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          //  options={{
          //     title:'My Login Form',
          //     headerTintColor:'red',
          //     headerTitleStyle:{
          //         fontSize:30,
          //         color:30,
          //         color:'red',
          //     },
          //     headerStyle:{
          //         backgroundColor:'lightpink'
          //     }
          // }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6200EE',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  screen: {
    backgroundColor: 'lightgreen',
  },
});
