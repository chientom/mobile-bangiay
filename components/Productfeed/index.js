import React from "react";
import {View, Text, FlatList, Dimensions} from "react-native";
import styles from "../Productfeed/styles";
import Products from "./Products";
import CarItems from "../CarItems";

const CarList =() =>{
    console.log(Products)
    return(
        <View style= {styles.container}>
            <FlatList 
                data ={Products}
                renderItem={({item})=> <CarItems product={item}/> }
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};  
export default CarList;