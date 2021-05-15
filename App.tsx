import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { InteractionManagerStatic, StyleSheet, Text, View, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from './src/themes/colors';
// import pages
import HomeScreen from './src/screens/HomeScreen';
import TesterScreen from './src/screens/TesterScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Stack.Screen name = "Home" component={HomeScreen}/>
        <Stack.Screen name = "Tester" component={TesterScreen}/>
      </Drawer.Navigator>      
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    flex: 1,
    backgroundColor: '#024392',
    alignItems: 'center'
  }
});

