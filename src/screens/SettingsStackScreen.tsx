import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TouchableRipple, Switch } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerItemViewModel } from '../components/molecules/DrawerItemGroup';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { useTheme, Theme } from '../context/ThemeContext';
import { Navigation } from '../types/types';
import AppScreen from './AppScreen';
import ScreenContainer from './ScreenContainer';

export const DrawerItem: DrawerItemViewModel = {
    label: AppScreen.SETTINGS,
    navigationTarget: AppScreen.SETTINGS,
    hasPermission: (_) => true,
    icon: (color, size) => (
        <Ionicons name="settings-outline" color={color} size={size} />
    )
};

const SettingsScreen: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const isDarkTheme = theme === Theme.Dark;

    const toggleTheme = (isDark: boolean) => {
        if (isDark) {
            setTheme(Theme.Light);
        } else {
            setTheme(Theme.Dark);
        }
    };

    return (
        <ScreenContainer>
            <View style={styles.settings}>
                <View style={styles.eachSetting}>
                    <Text> Dark Theme</Text>
                    <TouchableRipple
                        onPress={() => {
                            toggleTheme(isDarkTheme);
                        }}
                    >
                        <Switch pointerEvents="none" value={isDarkTheme} />
                    </TouchableRipple>
                </View>
                <View style={styles.eachSetting}>
                    <Text> Setting Two</Text>
                </View>
            </View>
        </ScreenContainer>
    );
};

const SettingsStackScreen: React.FC<{
    navigation: Navigation;
}> = ({ navigation }) => (
    <MasterStackHeader
        name="Settings"
        screenComponent={SettingsScreen}
        navigation={navigation}
    />
);

export default SettingsStackScreen;

const styles = StyleSheet.create({
    settings: {
        width: '100%',
        height: '100%'
    },
    eachSetting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 1,
        paddingTop: 20,
        paddingBottom: 20,
        width: '100%'
    }
});
