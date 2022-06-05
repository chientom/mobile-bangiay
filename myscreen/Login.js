
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Feed';
import App from '../App2';
import moUser from '../model/moUser';

const Stack = createNativeStackNavigator();
// const [txtUserName, onChangeUserName] = React.useState();
// const [txtPassWord, onChangePassWord] = React.useState();  
// function Validate(){    
//   const user = new moUser(User.FindUserbyEmail(txtUserName));
//   if(txtUserName == user.email && txtPassWord == user.password)
//     navigation.navigate('Main',{email: txtUserName})
//   else
//     Alert.alert('Tài khoản không đúng!');
// }
function Login({navigation}) {
  
    return (
      <View style={styles.container}> 
        <Image
          style={{width:130,height:80}}
          source={require('../assets/images/logo.png')}
        />
             
        <View style={{ flexDirection: "row", paddingTop: 10, width: "100%" }}> 
          <AntDesign style={{ paddingTop: 5, }} name="user" size={24} color="black" />     
          <TextInput 
            style={styles.input}
            
            placeholder="Tài Khoản"
            
          /> 
        </View>
        <View style={{ flexDirection: "row", paddingTop: 10, width: "100%" }}> 
          <AntDesign style={{ paddingTop: 5, }} name="lock" size={24} color="black" />     
          <TextInput 
          secureTextEntry
          keyboardType="default"
            style={styles.input}
            
            placeholder="Mật khẩu"
            
          /> 
        </View>
       <View style={styles.btn}>
          <Button 
            color={'#a8a8a8'}
            title="Đăng Nhập"
            onPress={()=>navigation.navigate('Main')}
            // onPress={Validate}
          />  
       </View>
       <View style={styles.btn}>
          <Button 
            color={'#a8a8a8'}
            title="Chưa có tài khoản"
            onPress={() => navigation.navigate('Signup')}
          />  
       </View>
      </View>
    )
        }
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,

  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#D3D3D3',
    
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    width: '100%',
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  tinyLogo: {
    width: 70,
    height: 70,
  },
  btn: {
    color:'#B0C4DE',
    backgroundColor:'#181818',
    padding: 10,
    margin : 20,
    width :'90%',
    borderRadius: 10,
 
  },
  
});
export default Login;
