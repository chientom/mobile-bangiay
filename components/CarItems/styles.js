import { StyleSheet, Dimensions } from "react-native";

const styles= StyleSheet.create({
    carContainer:{
        width:'100%',
        height: Dimensions.get('window').height,
      },
      titles:{
        marginTop:'25%',
        width:'100%',
        alignItems:'center',
        color:'#FFFFFF',
        
      },
      title:{
        fontSize:40,
        fontWeight:'500',
        color:'#ecae57',
        
      },
      subtitleCTA:{
        textDecorationLine:'underline',

      },
      subtitle:{
        fontSize:14,
        color:'#5c5e62',
      },
      images:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute',
      },
      btncontainer:{
        position:'absolute',
        bottom:50,
        width:'100%'
      },
});

export default styles;