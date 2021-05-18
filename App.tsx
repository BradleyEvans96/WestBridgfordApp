import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { InteractionManagerStatic, StyleSheet, Text, View, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, StackActions } from '@react-navigation/native';

// import pages
import HomeStackScreen from './src/screens/HomeStackScreen';
import ProfileStackScreen from './src/screens/ProfileStackScreen';
import SquadStackScreen from './src/screens/SquadStackScreen';
import AvailabilityStackScreen from './src/screens/AvailabilityStackScreen';
import LeagueStackScreen from './src/screens/LeagueStackScreen';
import FixturesStackScreen from './src/screens/FixturesStackScreen';
import ResultsStackScreen from './src/screens/ResultsStackScreen';
import VideosStackScreen from './src/screens/VideosStackScreen';
import ChatStackScreen from './src/screens/ChatStackScreen';
import ManagerStackScreen from './src/screens/ManagerStackScreen';
import SettingsStackScreen from './src/screens/SettingsStackScreen';

import { DrawerContent } from './src/components/DrawerContent';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}/> }>
          <Stack.Screen name = "Home" component={HomeStackScreen}/>
          <Stack.Screen name = "Profile" component={ProfileStackScreen}/>
          <Stack.Screen name = "Squad" component={SquadStackScreen}/>
          <Stack.Screen name = "Availability" component={AvailabilityStackScreen}/>
          <Stack.Screen name = "League" component={LeagueStackScreen}/>
          <Stack.Screen name = "Fixtures" component={FixturesStackScreen}/>
          <Stack.Screen name = "Results" component={ResultsStackScreen}/>
          <Stack.Screen name = "Videos" component={VideosStackScreen}/>
          <Stack.Screen name = "Chat" component={ChatStackScreen}/>
          <Stack.Screen name = "Manager" component={ManagerStackScreen}/>
          <Stack.Screen name = "Settings" component={SettingsStackScreen}/>
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
