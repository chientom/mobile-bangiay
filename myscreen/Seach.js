import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {useTheme} from '@react-navigation/native';


const HomeScreen = ({navigation}) => {
  const theme = useTheme();

  return (
    <View>
      <Text>Seach</Text>
    </View>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  
});