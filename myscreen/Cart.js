import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Pressable
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import images from '../constans/images';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Svg,Polygon} from'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';



const Cart = () => {
  const[recentlyViewed, setRecentlyViewed]= React.useState([
    {
      id: 0,
      name: "Jordan 1 Low Gym Red",
      img: images.Jordan1,
      bgColor: "#414045",
      type: "Jordan",
      price: "$119",
      sizes: [6, 7, 8]
    },
    {
      id: 1,
      name: "Jordan 2",
      img: images.Jordan2,
      bgColor: "#414045",
      type: "Jordan",
      price: "$119",
      sizes: [6, 7, 8]
    },
    // {
    //   id: 2,
    //   name: "Jordan 3",
    //   img: images.Jordan3,
    //   bgColor: "#414045",
    //   type: "Jordan",
    //   price: "$119",
    //   sizes: [6, 7, 8]
    // },
  
    {
      id: 3,
      name: "Jordan 4",
      img: images.Jordan4,
      bgColor: "#414045",
      type: "Jordan",
      price: "$119",
      sizes: [6, 7, 8]
    },
    {
      id: 4,
      name: "Jordan 5",
      img: images.Jordan5,
      bgColor: "#414045",
      type: "Jordan",
      price: "$119",
      sizes: [6, 7, 8]
    },
    {
      id: 5,
      name: "Jordan 6",
      img: images.Jordan6,
      bgColor: "#414045",
      type: "Jordan",
      price: "$119",
      sizes: [6, 7, 8]
    },
    {
      id: 6,
      name: "Nike",
      img: images.Nike,
      bgColor: "#414045",
      type: "Jordan",
      price: "$119",
      sizes: [6, 7, 8]
    },
  
  ])
  

  return (
    <View style={styles.container}>
    
      <View style={{flexDirection:'row',
                 justifyContent:'space-between',
                 alignItems:'center',
                 backgroundColor:"#FFFFFF"}}>
      <Text style={styles.title}>Giỏ Hàng</Text>
      <Text style={{
    color:'#FFB6C1',
    fontWeight:"bold",
    paddingRight:15,
    fontSize:15,}}>Your Item</Text>
      </View>
     {/* Itemscart */}
     <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
       <Text  style={{paddingRight:120}}>Tên </Text>
       <Text style={{paddingRight:40}}> Giá</Text>
     </View>
     
      <View style={{
    width:"100%",
    height:"100%"}}>
        <View style={styles.itemscart}>
          <View style={{width:120,
          height:"100%"}}>
            <Image style={{width:120, height:"100%", margin:10}} source={require('../assets/images/converse4.png')}></Image>
          </View>
          <View style={styles.namepr}>
            <Text style={{paddingTop:20,
            paddingLeft:30}}>  CONVERSE x FEAR OF GOD ESSENTIALS  </Text>
             
          </View>
          <View style={styles.price}>
            <Text style={{paddingTop:20,
            paddingLeft:40}}>  $135  </Text>
             
          </View>
        </View>
        <View style={styles.itemscart}>
          <View style={{width:120,
          height:"100%"}}>
            <Image style={{width:120, height:"100%", margin:10}} 
            source={require('../assets/images/jordan7.png')}></Image>
          </View>
          <View style={styles.namepr}>
            <Text style={{paddingTop:20,
            paddingLeft:30}}>  Jordan 1 Retro High OG 'Origin Story  </Text>
             
          </View>
          <View style={styles.price}>
            <Text style={{paddingTop:20,
            paddingLeft:40}}>  $186  </Text>
             
          </View>
        </View>
        <View style={styles.itemscart}>
          <View style={{width:120,
          height:"100%"}}>
            <Image style={{width:120, height:"100%", margin:10}} source={require('../assets/images/jordan4.png')}></Image>
          </View>
          <View style={styles.namepr}>
            <Text style={{paddingTop:20,
            paddingLeft:30}}> Jordan x Travis Scott  </Text>
             
          </View>
          <View style={styles.price}>
            <Text style={{paddingTop:20,
            paddingLeft:40}}>  $135  </Text>
             
          </View>
        </View>
        <View style={styles.itemscart}>
          <View style={{width:120,
          height:"100%"}}>
            <Image style={{width:120, height:"100%", margin:10}} 
            source={require('../assets/images/nike2.png')}></Image>
          </View>
          <View style={styles.namepr}>
            <Text style={{paddingTop:20,
            paddingLeft:30}}>  NIKE AIR FORCE ONE  </Text>
             
          </View>
          <View style={styles.price}>
            <Text style={{paddingTop:20,
            paddingLeft:40}}>  $85 </Text>
             
          </View>
        </View>
        <View style={styles.fixToText}>
          
        <Pressable style={styles.button} onPress={() => console.warn('was pressed')}>
      <Text style={styles.text}>Xóa tất cả</Text>
           </Pressable>
        <Pressable style={styles.button} onPress={() => console.warn('an it thoi')}>
      <Text style={styles.text}>Tổng tiền</Text>
        </Pressable>
        <Button 
        title='Thanh toán'
        color={'black'}
        onPress={()=>this.props.navigation.navigate('Pay')}>
            
        </Button>
      </View>
        
      </View>
        
     
    </View>
  
  );
};

export default Cart;

const styles = StyleSheet.create({
  container:{
    height:"100%",
    width:"100%",
   
  },
  title:{
    color:'#000000',
    fontWeight:"bold",
    paddingLeft:15,
    fontSize:20,
    
  },
  recentContainerShadow:{
    shadowColor:"#000",
    shadowOffset:{
        width:0,
        height:7,

    },
    shadowOpacity:0.43,
    shadowRadius:9.51,
    elevation:15
  },
  itemscart:{
    flexDirection:'row',
    width:"100%",
    height:100,
    backgroundColor:"#D3D3D3",
    borderRadius:20,
    margin:10,
    alignItems:'center',
  },
  images:{
    width:130,
    height:100,
  },
  namepr:{
    display:'flex',
    flexDirection:'row',
    width:150,
    height:"100%",
    paddingRight:10,
  },
  price:{
    display:'flex',
    flexDirection:'row',
    width:150,
    height:"100%",
    paddingRight:10,
    fontSize:30,
    
  },
  fixToText: {
    
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});