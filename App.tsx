import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { InteractionManagerStatic, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
//import stripedBackground from './src/colors/stripe.svg';
import stripes from './src/components/stripes';
import colors from './src/themes/colors';
// import pages
import HomeScreen from './src/screens/HomeScreen';
import TesterScreen from './src/screens/TesterScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={HomeScreen} />
        <Stack.Screen name = "Tester" component={TesterScreen}/>
      </Stack.Navigator>
      <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' },
        ]}
      >
        {stripes("100","100",7,colors.westBridgfordBlue,colors.westBridgfordBlack)}
      </View>
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

