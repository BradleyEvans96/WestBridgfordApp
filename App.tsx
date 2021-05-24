/* eslint-disable no-console */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {
    View,
    ActivityIndicator,
    AsyncStorage,
    StyleSheet,
    StatusBar
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeContext, Theme } from './src/context/ThemeContext';
import LoginStack from './src/screens/LoginStackScreen';
import { AuthContext, User } from './src/context/AuthContext';
// import AsyncStorage from '@react-native-community/async-storage';

import themeMapper from './src/themes/ThemeMapper';
import DrawerContent from './src/components/organisms/DrawerContent';
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
import AppScreen from './src/screens/AppScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
    const [theme, setTheme] = React.useState(Theme.Default);

    useEffect(() => {
        setTimeout(async () => {
            // setIsLoading(false);
            let userToken;
            userToken = 'null';
            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
                console.log(e);
            }
            dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
        }, 1000);
    }, []);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const loginReducer = (prevState: any, action: any) => {
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    userName: action.userName,
                    userToken: action.token,
                    isLoading: false
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    userName: null,
                    userToken: null,
                    isLoading: false
                };
            default:
                return prevState;
        }
    };

    const initialLoginState = {
        isLoading: true,
        userName: '',
        userToken: ''
    };
    const [loginState, dispatch] = React.useReducer(
        loginReducer,
        initialLoginState
    );
    const authContext = React.useMemo(
        () => ({
            isLoading: true,
            userName: '',
            userToken: '',
            signIn: async (foundUser: User) => {
                const userToken = String(foundUser.userToken);
                const userName = String(foundUser.username);

                try {
                    await AsyncStorage.setItem('userToken', userToken);
                } catch (e) {
                    console.log(e);
                }
                dispatch({
                    type: 'LOGIN',
                    username: userName,
                    token: userToken
                });
            },
            signOut: async () => {
                try {
                    await AsyncStorage.removeItem('userToken');
                } catch (e) {
                    console.log(e);
                }
                dispatch({ type: 'LOGOUT' });
            }
        }),
        []
    );

    if (loginState.isLoading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <AuthContext.Provider value={authContext}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <PaperProvider theme={themeMapper(theme)}>
                    <NavigationContainer theme={themeMapper(theme)}>
                        {loginState.userToken !== null ? (
                            <Drawer.Navigator
                                drawerContent={(props) => (
                                    <DrawerContent {...props} />
                                )}
                                initialRouteName={AppScreen.HOME}
                            >
                                <Stack.Screen
                                    name="Home"
                                    component={HomeStackScreen}
                                />
                                <Stack.Screen
                                    name="Profile"
                                    component={ProfileStackScreen}
                                />
                                <Stack.Screen
                                    name="Squad"
                                    component={SquadStackScreen}
                                />
                                <Stack.Screen
                                    name="Availability"
                                    component={AvailabilityStackScreen}
                                />
                                <Stack.Screen
                                    name="League"
                                    component={LeagueStackScreen}
                                />
                                <Stack.Screen
                                    name="Fixtures"
                                    component={FixturesStackScreen}
                                />
                                <Stack.Screen
                                    name="Results"
                                    component={ResultsStackScreen}
                                />
                                <Stack.Screen
                                    name="Videos"
                                    component={VideosStackScreen}
                                />
                                <Stack.Screen
                                    name="Chat"
                                    component={ChatStackScreen}
                                />
                                <Stack.Screen
                                    name="Manager"
                                    component={ManagerStackScreen}
                                />
                                <Stack.Screen
                                    name="Settings"
                                    component={SettingsStackScreen}
                                />
                            </Drawer.Navigator>
                        ) : (
                            <LoginStack />
                        )}
                    </NavigationContainer>
                </PaperProvider>
            </ThemeContext.Provider>
        </AuthContext.Provider>
    );
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
