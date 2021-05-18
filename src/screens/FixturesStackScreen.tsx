import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MasterStackHeader from '../components/MasterStackHeader';

const FixtureScreen : React.FC = () => {
    return (
        <View style = {styles.FixtureScreen}>
            <Text> Fixture Screen </Text>
        </View>
    );
};

const FixtureStackScreen : React.FC = ({navigation}:any) => {
    return (
        <MasterStackHeader name = "Tester" screenComponent = {FixtureScreen} navigation = {navigation} />
    )
};

export default FixtureStackScreen;

const styles = StyleSheet.create({
    FixtureScreen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  