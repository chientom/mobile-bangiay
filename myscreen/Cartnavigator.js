import React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./myscreen/Login";
import { NavigationContainer } from '@react-navigation/native';
import Signup from './myscreen/Signup';
import App from './App2';
import Cart from './Cart';
const Stack = createNativeStackNavigator();
function YourApp() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen 
          options={{headerShown:false}}
        name = "Cart" component={Cart}></Stack.Screen>

        <Stack.Screen 
         options={{headerShown:false}}
        name = "ThanhToan" component={ThanhToan}></Stack.Screen>
        <Stack.Screen 
         options={{headerShown:false}}
        name = "Main" component={App}></Stack.Screen>
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default YourApp;