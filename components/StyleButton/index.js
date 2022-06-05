import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View, Pressable } from "react-native";
import styles from "./styles";

const StyleButton = (props) => {
    // cai nay goi o dau the:
    // còn đây có mỗi trang index thôi thầy
    

    const {type, content, onPress} = props;

    const backgroundCol = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFFA6' : '#171A20CC';

    return (
        <View style={styles.container}>
            <View style = {{borderRadius:20,
                height:40,
                ustifyContent:'center',
                alignItems:'center',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor: backgroundCol}}>
                <Pressable
                    onPress={() => console.warn('was pressed')}
                >
                <Text style={{
                    fontSize:12,
                    fontWeight: '700',
                    textTransform:'uppercase',
                    color:textColor}}>{content}</Text>
                </Pressable>
            </View>
            
        </View>
    );
};


export default StyleButton;