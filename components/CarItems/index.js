import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View,ImageBackground} from "react-native";
import styles from "./styles";
import StyleButton from "../StyleButton";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../../myscreen/Login";

const Stack = createNativeStackNavigator();
const CarItems = (props) => {
 
  const {name, tagline,taglineCTA, image} = props.product;

  return (
    
      <View style={styles.carContainer}>

            <ImageBackground 
                source = {image}
                style={styles.images}
            />
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline}{' '}</Text>
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </View>    

        <View style={styles.btncontainer}>  
         
          
            <StyleButton 
            type="secondary" 
            content={"Custom Order"} 
            onPress={() => console.warn('was pressed')}/>
            <StyleButton type="primary"
            content={"Like"}  
            onPress={() => console.warn('liked')}>
        
            </StyleButton>
    
        </View>  
      </View>
    
  );
};



export default CarItems;