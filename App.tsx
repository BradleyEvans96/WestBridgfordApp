import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { InteractionManagerStatic, StyleSheet, Text, View, Dimensions, ActivityIndicator, AsyncStorage } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { ThemeContext, Theme } from './src/context/ThemeContext';
import { Provider as PaperProvider } from 'react-native-paper';
import LoginStack from './src/screens/LoginStackScreen';
import {AuthContext, useAuth} from './src/context/AuthContext';
// import AsyncStorage from '@react-native-community/async-storage';

// import pages
import {
  HomeStackScreen, 
  ProfileStackScreen, 
  SquadStackScreen,
  AvailabilityStackScreen,
  LeagueStackScreen,
  FixturesStackScreen, 
  ResultsStackScreen, 
  VideosStackScreen, 
  ChatStackScreen, 
  ManagerStackScreen,
  SettingsStackScreen 
} from './src/screens';

import { DrawerContent } from './src/components/DrawerContent';
import { themeMapper } from './src/themes/CustomThemes';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {

    const [theme, setTheme] = React.useState(Theme.Default);

    useEffect(() => {
      setTimeout(async() => {
        // setIsLoading(false);
        let userToken;
        userToken = null;
        try {
          userToken = await AsyncStorage.getItem('userToken');
        } catch(e) {
          console.log(e);
        }
        dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
      }, 1000);
    }, []);

    const loginReducer = (prevState:any, action:any) => {
      switch( action.type ) {
        case 'RETRIEVE_TOKEN': 
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'LOGIN': 
          return {
            ...prevState,
            userName: action.userName,
            userToken: action.token,
            isLoading: false,
          };
        case 'LOGOUT': 
          return {
            ...prevState,
            userName: null,
            userToken: null,
            isLoading: false,
          };
      }
    };
  
    const initialLoginState= {
      isLoading: true,
      userName: '',
      userToken: '',
    };
    const [loginState, dispatch] = React.useReducer(loginReducer, (initialLoginState));
    
    const authContext = React.useMemo(() => ({
      isLoading: true,
      userName: '',
      userToken: '',

      signIn: async(foundUser:any) => {
        const userToken = String(foundUser[0].userToken);
        const userName = String(foundUser[0].username);
        
        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch(e) {
          console.log(e);
        }
        dispatch({ type: 'LOGIN', username: userName, token: userToken });
      },
      signOut: async() => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch(e) {
          console.log(e);
        }
        dispatch({ type: 'LOGOUT' });
      }
    }), []);


    if (loginState.isLoading){
      return(
        <View style = {{flex:1, justifyContent: 'center', alignItems:'center'}}>
          <ActivityIndicator size = 'large'/>
        </View>
      );
    }
    console.log(loginState.userToken)
    return (
      <AuthContext.Provider value = {authContext}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <PaperProvider theme = {themeMapper(theme)}>
          <NavigationContainer theme = {themeMapper(theme)}>
            {loginState.userToken !== null ? (
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
            ):
              <LoginStack />
            }      
          </NavigationContainer>
        </PaperProvider>
      </ThemeContext.Provider>
      </AuthContext.Provider>
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
