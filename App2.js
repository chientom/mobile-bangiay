import 'react-native-gesture-handler';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AntDesign } from '@expo/vector-icons';
import Feed from './myscreen/Feed';
import Profile from './myscreen/Profile';
import Cart from './myscreen/Cart';
import Seach from './myscreen/Seach';
import { Ionicons } from '@expo/vector-icons';
import New from './myscreen/Home';
import Home from './myscreen/Home';
import { touchProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
  
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#157cdb',
          inactiveTintColor: '#262626',
        }}>
        <Tab.Screen

          name="Home"
          component={Home}
          options={{
            title:'SELECTOR THIS MONTH',
            headerTintColor:'#ABAFB8',
            headerTitleStyle:"CarmenSans-Thin",
            headerTitleAlign:'center',
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="home" size={26} color={color} />
            ),
            headerLeft: ({onPress}) => (
              <TouchableOpacity style={{marginLeft:24}}
              onPress={onPress}>
                <Ionicons name="md-menu" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerRight:({onPress}) =>(
              <TouchableOpacity style={{marginRight:24}}
              onPress={onPress}>
                <Ionicons name="search" size={24} color="black" />
              </TouchableOpacity>
            )
          }}
        />
        {/* <Tab.Screen
          name="Seach"
          component={Seach}
          options={{
            headerShown:false,
            tabBarLabel: 'Seach',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="search" size={26} color={color} />
            ),
          }}
        /> */}
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            headerShown:false,
            tabBarLabel: 'Feed',
            tabBarIcon: ({color}) => (
              <Ionicons name="newspaper-outline" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            title:'Giỏ Hàng của bạn đây',
            headerTintColor:'#ABAFB8',
            headerTitleStyle:"CarmenSans-Thin",
            headerTitleAlign:'center',
            tabBarLabel: 'Giỏ Hàng',
            tabBarIcon: ({color}) => (
              <Ionicons name="cart-outline" size={26} color={color} />
            ),
            headerLeft: ({onPress}) => (
              <TouchableOpacity style={{marginLeft:24}}
              onPress={onPress}>
                <Ionicons name="md-menu" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerRight:({onPress}) =>(
              <TouchableOpacity style={{marginRight:24}}
              onPress={onPress}>
                <Ionicons name="search" size={24} color="black" />
              </TouchableOpacity>
            )
          }}
        />
        
        
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown:false,
            tabBarLabel: 'Cá nhân',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="person" size={26} color={color} />
            ),
          }}
        />
        
      </Tab.Navigator>
  
  );
};

export default App;