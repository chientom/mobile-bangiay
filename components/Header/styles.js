import { StyleSheet } from "react-native";
import { color } from "react-native-elements/dist/helpers";

const styles = StyleSheet.create({
    container:{
        
        position:'absolute',
        top:35, 
        zIndex:100,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        paddingHorizontal:20,
        
    },
    logo:{
        width:100,
        height:50,
       
    },
    menu:{
        
        width:35,
        height:25,

    },
});
export default styles;