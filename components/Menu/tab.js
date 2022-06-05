import React    from "react";
import{NavigationContainer} from'@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from 'react-native-vector-icons/Ionicons'
import { Ionicons } from "@expo/vector-icons";

import Login from '../../myscreen/Login'
import Signup from '../../myscreen/Signup'
import { Text,Dimensions } from "react-native";



const fullScreenWidth =Dimensions.get('window').width;

const stack =createNativeStackNavigator()
function HomeStackScreen() {
    return(
        <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    );
}
function SeachStackScreen() {
    return(
        <Stack.Navigator>
                <Stack.Screen name="Seach" component={seach}/>
        </Stack.Navigator>
    );
    }
function CartStackScreen() {
    return(
        <Stack.Navigator>
                <Stack.Screen name="Cart" component={Cart}/>
        </Stack.Navigator>
    )
function ProfileStackScreen() {
    return(
        <Stack.Navigator>
                <Stack.Screen name="Profile" component={Profile}/>
                <Stack.Screen name="MyInfo" component={MyInfo}/>
        </Stack.Navigator>
    );
    }
}

const Tab = createBottomTabNavigator();
 export default function Navigation(props) {
     return(
         <NavigationContainer>
             <Tab.Navigator
             screenOptions={({route})=>({
                 headerTitle:()=> <Text>Header</Text>,
                 tabBarIcon:({focused,color,size,padding})=>{
                     let iconName;
                     if(route.name === 'Home') {
                         iconName =focused ? 'home' : 'home-outline'
                     }
                     else if (route.name === 'Seach'){
                         iconName = focused ? 'Seach' : 'search'
                     }else if (route.name === 'Cart'){
                        iconName = focused ? 'Cart' : 'cart-outline'
                    }else if (route.name === 'Profile'){
                        iconName = focused ? 'Profile' : 'user'
                    }

                    return(
                        <Ionicons 
                        name={iconName}
                        size={size}
                        color={color}
                        style={{paddingBottom:padding}}></Ionicons>
                    );
                 }
             })}
             tabBarOptions={{
                 activeTintcolor: 'lightseagreen',
                 inactiveTintcolor: 'grey',
                 labelStyle:{fontsize:16},
                 style:{width: fullScreenWidth}

             }}
             >
                 <Tab.Screen name="Home" component={HomeStackScreen}/>
                 <Tab.Screen name="Seach" component={SeachStackScreen}/>
                 <Tab.Screen name="Cart" component={CartStackScreen}/>
                 <Tab.Screen name="Profile" component={ProfileStackScreen}/>
             </Tab.Navigator>
         </NavigationContainer>
     )
 }