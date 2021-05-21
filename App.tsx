import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeContext, Theme } from './src/context/ThemeContext';
import LoginStack from './src/screens/LoginStackScreen';

import themeMapper from './src/themes/ThemeMapper';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
    const [theme, setTheme] = React.useState(Theme.Default);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <PaperProvider theme={themeMapper(theme)}>
                <NavigationContainer theme={themeMapper(theme)}>
                    <LoginStack />
                    {/* <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}/> }>
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
            </Drawer.Navigator>       */}
                </NavigationContainer>
            </PaperProvider>
        </ThemeContext.Provider>
    );
}
