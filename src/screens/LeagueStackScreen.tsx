import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MasterStackHeader from '../components/MasterStackHeader';

const LeagueScreen : React.FC = () => {
    return (
        <View style = {styles.LeagueScreen}>
            <Text> League Screen </Text>
        </View>
    );
};

const LeagueStackScreen : React.FC = ({navigation}:any) => {
    return (
        <MasterStackHeader name = "Tester" screenComponent = {LeagueScreen} navigation = {navigation} />
    )
};

export default LeagueStackScreen;

const styles = StyleSheet.create({
    LeagueScreen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  