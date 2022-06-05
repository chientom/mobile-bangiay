import React from 'react';
import { View,Text, Image } from 'react-native';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';

const Header = () =>{
    
   
    return(
        
    <View style={styles.container}>
         <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
         <Entypo name="menu" size={50} color="black" />
    </View>
    );
};
export default Header;