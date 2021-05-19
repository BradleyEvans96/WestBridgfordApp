import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import MasterStackHeader from '../components/MasterStackHeader';
import {Text, TouchableRipple, Switch} from 'react-native-paper';
const SettingsScreen : React.FC = () => {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    return (
        <View style = {styles.screen}>
            <View style = {styles.SettingsScreen}>
            <View style = {styles.eachSetting}>
            <Text> Dark Theme</Text>
            <TouchableRipple onPress={()=> {toggleTheme()}}>
                    <View pointerEvents="none">
                        <Switch value = {isDarkTheme}/>
                    </View>
            </TouchableRipple>
            </View>
            <View style = {styles.eachSetting}>
            <Text> Setting Two</Text>
            </View>
            </View>
        </View>
    );
};

const SettingsStackScreen : React.FC = ({navigation}:any) => {
    return (
        <MasterStackHeader name = "Settings" screenComponent = {SettingsScreen} navigation = {navigation} />
    )
};

export default SettingsStackScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
    SettingsScreen: {
      justifyContent: 'flex-start',
      flexDirection: 'column',
      marginLeft: 20,
      marginRight: 20,
    },
    eachSetting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 1,
        paddingTop: 20,
        paddingBottom: 20,
    }
});
