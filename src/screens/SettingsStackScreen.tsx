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
        <View style = {styles.SettingsScreen}>
            <Text> Congrats you made it to the Tester Screen </Text>
            <TouchableRipple onPress={()=> {toggleTheme()}}>
                            <View>
                                <View pointerEvents="none">
                                    <Switch value = {isDarkTheme}/>
                                </View>
                                <Text> Dark Theme</Text>
                            </View>
            </TouchableRipple>
        </View>
    );
};

const SettingsStackScreen : React.FC = ({navigation}:any) => {
    return (
        <MasterStackHeader name = "Tester" screenComponent = {SettingsScreen} navigation = {navigation} />
    )
};

export default SettingsStackScreen;

const styles = StyleSheet.create({
    SettingsScreen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  