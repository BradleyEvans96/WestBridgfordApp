import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MasterStackHeader from '../components/MasterStackHeader';

const SquadScreen : React.FC = () => {
    return (
        <View style = {styles.SquadScreen}>
            <Text> Squad Screen </Text>
        </View>
    );
};

const SquadStackScreen : React.FC = ({navigation}:any) => {
    return (
        <MasterStackHeader name = "Tester" screenComponent = {SquadScreen} navigation = {navigation} />
    )
};

export default SquadStackScreen;

const styles = StyleSheet.create({
    SquadScreen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  