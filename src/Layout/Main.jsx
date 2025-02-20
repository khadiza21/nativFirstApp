import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../navigation-screen/Home';
import About from '../navigation-screen/About';
import Login from '../navigation-screen/Login';
import {Alert, Button, StyleSheet} from 'react-native';
import MyHeader from '../navigation-screen/MyHeader';
const Stack = createNativeStackNavigator();

const sayHello = () => {
  Alert.alert('Hello', 'Hello User');
};
const HeaderTitle = () => (
  <Button title="Two" color="green" onPress={sayHello} />
); // can call here built-in component
const HeaderLeft = () => <Button title="One" color="red" onPress={sayHello} />;
const Main = () => {
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
          name="Header"
          component={MyHeader}
          options={{
            title: '',
            // headerLeft: () => <Button title="One" color="red" />,
            // headerRight: () => <Button title='Two' color='green' />
            headerTitle: HeaderTitle,
            headerLeft: HeaderLeft,
          }}
        />
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
        <Stack.Screen
          name="About"
          component={About}
          // options={{headerShown: false}}
        />
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
