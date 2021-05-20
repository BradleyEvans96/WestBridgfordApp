import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    InteractionManagerStatic,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeContext, Theme } from './src/context/ThemeContext';

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

import DrawerContent from './src/components/DrawerContent';
import { themeMapper } from './src/themes/CustomThemes';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
    const [theme, setTheme] = React.useState(Theme.Default);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <PaperProvider theme={themeMapper(theme)}>
                <NavigationContainer theme={themeMapper(theme)}>
                    <Drawer.Navigator
                        drawerContent={(props) => <DrawerContent {...props} />}
                    >
                        <Stack.Screen name="Home" component={HomeStackScreen} />
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
                        <Stack.Screen name="Chat" component={ChatStackScreen} />
                        <Stack.Screen
                            name="Manager"
                            component={ManagerStackScreen}
                        />
                        <Stack.Screen
                            name="Settings"
                            component={SettingsStackScreen}
                        />
                    </Drawer.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </ThemeContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    topBar: {
        flex: 1,
        backgroundColor: '#024392',
        alignItems: 'center'
    }
});
