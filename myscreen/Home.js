
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Modal
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import images from '../constans/images';
import {Svg,Polygon} from'react-native-svg';
import { BlurView } from "expo-blur";



const Home = () => {
  const [showAddToBagModal, setShowAddToBagModal] = React.useState(false);
  const[selectedItem,setSelectedItem]= React.useState(null);
  const [selectedSize, setSelectedSize]= React.useState("");

  const [trending, setTrending] = React.useState([
    {
        id: 0,
        name: "Jordan 1 Retro High OG 'Origin Story'",
        img: images.Jordan5,
        bgColor: "#BF012C",
        type: "Jordan",
        price: "$186",
        sizes: [6, 7, 8, 9, 10]
    },
    {
        id: 1,
        name: "CONVERSE x FEAR OF GOD ESSENTIALS",
        img: images.Converse2,
        bgColor: "#D3D3D3",
        type: "Converse",
        price: "$135",
        sizes: [6, 7, 8, 9, 10, 11, 12]
    },
    {
        id: 2,
        name: "Nike Air Force One",
        img: images.Nike,
        bgColor: "#000000",
        type: "Nike",
        price: "$199",
        sizes: [6, 7, 8, 9]
    },
]);

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

  function renderTrendingShoes(item,index) {
    var trendingStyle={};
      if(index==0){
        trendingStyle ={ marginLeft:24,}
      }

  
    return(
      <TouchableOpacity style={{height:240, width:180,justifyContent:'center',marginHorizontal:8,...trendingStyle}}
      onPress={()=>{
        setSelectedItem(item)
        setShowAddToBagModal(true)
      }}
      >

        <Text style={{color:'#BEC1D2', fontSize:15,}}>{item.type}</Text>
        <View 
        style={[{
          flex:1,
          justifyContent:'flex-end',
          marginTop:8,
          borderRadius:10,
          marginRight:24,
          paddingLeft:12,
          paddingRight:24,
          paddingBottom:12,
          backgroundColor:item.bgColor,
          

        }
        //, styles.trendingShadow
        ]}>
          <View style={{ height:'35%',justifyContent:'space-between'}}>
            <Text style={{color:"white", fontSize:14}}>{item.name}</Text>
            <Text style={{color:"white", fontSize:16}}>{item.price}</Text>
          </View>
        </View>

        <View style={{position:'absolute', top:27, right:0, width:"95%",height:"100%"}}>
          <Svg height="100%" width="100%">
              <Polygon points="0,0 160,0 160,80"
                       fill="white" >

                      </Polygon>
          </Svg>
        </View>

        <Image 
        resizeMode="cover"
        source={item.img}
        style={{
          position:'absolute',
          top:50,
          right:0,
          width:"98%",
          height:80,
          transform:[{
            rotate:'-15deg'
          }]
        }}>

        </Image>

      </TouchableOpacity>
    )
  }
  function renderRecentlyViewed(item,index) {
    return(
      <TouchableOpacity style={{flex:1,
      flexDirection:'row',}}
      onPress={()=>{
        console.log("renderRecentlyViewed")
      }}>
        <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
        }}>
          <Image source={item.img}
          resizeMode='contain'
          style={{
            width:130,
            height:100,
          }}
          >

          </Image>
        </View>
        <View style={{flex:1,
        marginLeft:12,
        justifyContent:'center',
        }}>
          <Text style={{color:"#BEC1D2", fontSize:16,}}>{item.name}</Text>
          <Text style={{fontSize:16,}}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    )
    
  }

  function renderShoeSizes() {
    return(
      selectedItem.sizes.map((item, index)=>{
        
      })
    )
  }

  return (
    <View style={styles.container}>
      <View >  
        <Text style={styles.title}>TRENDING</Text>
      </View>
      <View style={{height:260, marginTop:24,}}>
        <FlatList horizontal
        showsHorizontalScrollIndicator={false}
        data={trending}
        keyExtractor={item => item.id.toString()}
        renderItem={({item,index})=> renderTrendingShoes(item,index)}>

        </FlatList> 
      </View>
      <View style={[{
        flex:1,
        flexDirection:'row',
                marginTop:23,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:"white",

      },styles.recentContainerShadow]}>
          <View style={{width:70, marginLeft:8,}}>
              <Image source={images.recentlyViewedLabel}
                      resizeMode='contain'
                      style={{
                        width:"100%",
                        height:"100%",

                      }}>

              </Image>
          </View>
          <View style={{
            flex:1,
            paddingBottom:24,
            backgroundColor:"white"
          }}>
                  <FlatList showsVerticalScrollIndicator={false}
                  data={recentlyViewed}
                  renderItem={({ item, index }) => renderRecentlyViewed(item, index)}>
                    </FlatList>    
          </View>
      </View>


          {/* Modal */}
          {selectedItem &&
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showAddToBagModal}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <BlurView
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        blurType="light"
                        blurAmount={20}
                        reducedTransparencyFallbackColor="white"
                    >
                        {/* Button to close modal */}
                        <TouchableOpacity 
                        style={styles.absolute}
                        onPress={()=>{
                            setSelectedItem(null)
                            setSelectedSize("")
                            setShowAddToBagModal(false)
                        }}>

                        </TouchableOpacity>

                        {/* Modal content */}
                        <View style={{ justifyContent: 'center', width: "85%", backgroundColor: selectedItem.bgColor }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: -24 * 2 }}>
                                <Image
                                    source={selectedItem.img}
                                    resizeMode="contain"
                                    style={{
                                        width: "90%",
                                        height: 170,
                                        transform: [
                                            { rotate: '-15deg' }
                                        ]
                                    }}
                                />
                            </View>
                            <Text style={{ marginTop: 24, marginHorizontal: 24, color: "white",fontFamily: "CarmenSans-Regular", fontSize: 20, lineHeight: 30  }}>{selectedItem.name}</Text>
                            <Text style={{ marginTop: 8 / 2, marginHorizontal: 24, color: "white", fontFamily: "CarmenSans-Regular", fontSize: 16, lineHeight: 22 }}>{selectedItem.type}</Text>
                            <Text style={{ marginTop: 12, marginHorizontal: 24, color: "white", fontFamily: "CarmenSans-Regular", fontSize: 30, lineHeight: 36 }}>{selectedItem.price}</Text>
                            <View style={{ flexDirection: 'row', marginTop: 12, marginHorizontal: 24 }}>
                                <View>
                                    <Text style={{ color: "white",  fontFamily: "CarmenSans-Regular", fontSize: 16, lineHeight: 22 }}>Select size</Text>
                                </View>
                                <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', marginLeft: 12 }}>
                                    {renderShoeSizes()}
                                </View>
                            </View>

                            <TouchableOpacity
                                style={{ width: '100%', height: 70, marginTop: 8, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}
                                onPress={() => {
                                    setSelectedItem(null)
                                    setSelectedSize("")
                                    setShowAddToBagModal(false)
                                }}
                            >
                                <Text style={{ color: "white", fontFamily: "CarmenSans-SemiBold", fontSize: 22 }}>Add to Bag</Text>
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                </Modal>
            }
    </View>

  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    flex:1,
    fontFamily:'CarmenSans-Thin',
    padding:5,
    backgroundColor:"white"
    
  },
  title:{
    color:'#000000',
    fontWeight:"bold",
    paddingLeft:15,
    fontSize:20,
    
  },
  trendingShadow:{
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:5,

    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    
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
  absolute:{
    position:'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0
  }
});