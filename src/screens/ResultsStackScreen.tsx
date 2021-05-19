import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MasterStackHeader from '../components/MasterStackHeader';

const ResultsScreen : React.FC = () => {
    return (
        <View style = {styles.ResultsScreen}>
            <Text> Results </Text>
        </View>
    );
};

const ResultsStackScreen : React.FC = ({navigation}:any) => {
    return (
        <MasterStackHeader name = "Results" screenComponent = {ResultsScreen} navigation = {navigation} />
    )
};

export default ResultsStackScreen;

const styles = StyleSheet.create({
    ResultsScreen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  