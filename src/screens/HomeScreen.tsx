import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MasterStackHeader from '../components/MasterStackHeader';

const HomeScreen : React.FC = ({navigation}:any) => {
    return (
        <View style = {styles.HomeScreen}>
            <Text> This is the Home Screen </Text>
            <Button title= "Tester Page" onPress = {() => navigation.navigate("Tester")}/>
        </View>
    );
};

const HomeStackScreen : React.FC = ({navigation}:any) => {
    return (
        <MasterStackHeader name = "Home" screenComponent = {HomeScreen} navigation = {navigation} />
    )
};
export default HomeStackScreen;

const styles = StyleSheet.create({
    HomeScreen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  