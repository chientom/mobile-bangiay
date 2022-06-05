import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View,Text,ImageBackground } from "react-native";
import { AntDesign } from '@expo/vector-icons';
// import CarItems from '../components/CarItems';
import CarList from '../components/Productfeed';
import Header from '../components/Header';


function Feed() {
  return (
    <View style={styles.container}>
        <Header />
        <CarList/>
        
      {/* <Navigation {...props}/> */}

      <StatusBar styles="auto" content></StatusBar>
    </View>

    
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  
});

export default Feed;