import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { InteractionManagerStatic, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
//import stripedBackground from './src/colors/stripe.svg';
import colors from './src/themes/colors';
// import pages
import HomeScreen from './src/screens/HomeScreen';
import TesterScreen from './src/screens/TesterScreen';
import Header from './src/components/Header'
import Stripes from './src/components/stripes';
import { Dimensions } from 'react-native';
const Stack = createStackNavigator();
const windowWidth = Dimensions.get('window').width;
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerBackground: () => <Stripes 
          width={windowWidth} 
          numberOfStripes={3} 
          backgroundColour={colors.WEST_BRIDGFORD_BLUE} 
          stripeColour={colors.WEST_BRIDGFORD_BLACK} 
        />}}>
        <Stack.Screen name = "Home" component={HomeScreen}/>
        <Stack.Screen name = "Tester" component={TesterScreen}/>
      </Stack.Navigator>
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

