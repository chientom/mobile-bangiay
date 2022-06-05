import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Linking,
} from "react-native";
import { FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo } from "@expo/vector-icons";
import { CheckBox, Icon } from "react-native-elements";

const Stack = createNativeStackNavigator();
export default function Signup({ navigation }) {
  const [check2, setCheck2] = useState(false);
  return (
    <View style={styles.container}>
      <Image
          style={{width:130,height:80}}
          source={require('../assets/images/logo.png')}
        />
      <View style={{ flexDirection: "row", paddingTop: 10, width: "80%" }}>
        <AntDesign
          style={{ paddingTop: 15 }}
          name="user"
          size={25}
          color="black"
        />
        <TextInput style={styles.input} placeholder="Tài khoản" />
      </View>
      <View style={{ flexDirection: "row", paddingTop: 10, width: "80%" }}>
        <AntDesign
          style={{ paddingTop: 15 }}
          name="lock"
          size={24}
          color="black"
        />
        <TextInput
          secureTextEntry
          keyboardType="default"
          style={styles.input}
          placeholder="mật khẩu"
        />
      </View>
      <View style={{ flexDirection: "row", paddingTop: 10, width: "80%" }}>
        <AntDesign
          style={{ paddingTop: 15 }}
          name="lock"
          size={24}
          color="black"
        />
        <TextInput
          secureTextEntry
          keyboardType="default"
          style={styles.input}
          placeholder="Nhập lại mật khẩu"
        />
      </View>
      <View style={{ flexDirection: "row", paddingTop: 10, width: "80%" }}>
        <Entypo
          style={{ paddingTop: 15 }}
          name="email"
          size={24}
          color="black"
        />
        <TextInput style={styles.input} placeholder="Email" />
      </View>
      <View style={{ flexDirection: "row", paddingTop: 10, width: "80%" }}>
        <AntDesign
          style={{ paddingTop: 15 }}
          name="phone"
          size={24}
          color="black"
        />
        <TextInput style={styles.input} placeholder="Số điện thoại" />
      </View>
      <View style={{ flexDirection: "row", paddingTop: 10, width: "80%" }}>
        <Entypo
          style={{ paddingTop: 15 }}
          name="address"
          size={24}
          color="black"
        />
        <TextInput style={styles.input} placeholder="Địa chỉ" />
      </View>
      <View style={styles.cbk}>
      <CheckBox
        center
        title="Đồng ý điều khoản"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={check2}
        onPress={() => setCheck2(!check2)}
      />
      </View>
      <View style={styles.btn}>
        <Button
        color={'#181818'} 
        title="Hoàn tất đăng ký" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
alignItems: "center",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  welcome: {
    marginTop: 100,
    fontSize: 30,
    textAlign: "center",
    margin: 0,
    color: "#00BFFF",
    fontFamily: "Arial",
    borderBottomWidth: StyleSheet.hairlineWidth,
    textDecorationLine: "underline",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  tinyLogo: {
    paddingTop: 5,
    width: 70,
    height: 70,
  },
  btn: {
    color: "#000000",
    backgroundColor: "#181818",
    padding: 10,
    margin: 20,
    width: "90%",
    borderRadius: 10,
  },
  cbk:{
    backgroundColor:"white",
    
  }
});