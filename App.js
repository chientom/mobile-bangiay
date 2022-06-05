import React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./myscreen/Login";
import { NavigationContainer } from '@react-navigation/native';
import Signup from './myscreen/Signup';
import App from './App2';

const Stack = createNativeStackNavigator();
function YourApp() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen 
          options={{headerShown:false}}
        name = "Login" component={Login}></Stack.Screen>

        <Stack.Screen 
         options={{headerShown:false}}
        name = "Signup" component={Signup}></Stack.Screen>
        <Stack.Screen 
         options={{headerShown:false}}
        name = "Main" component={App}></Stack.Screen>
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default YourApp;