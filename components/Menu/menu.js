import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View,Text,ImageBackground } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



const Tab = createBottomTabNavigator()
const  Menu = ()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={}></Tab.Screen>
    </Tab.Navigator>
    
  );
};

const styles = StyleSheet.create({
  s
  
});

export default Menu;