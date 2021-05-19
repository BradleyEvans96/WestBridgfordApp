import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MasterStackHeader from '../components/MasterStackHeader';

const ProfileScreen : React.FC = () => {
    return (
        <View style = {styles.ProfileScreen}>
            <Text> Profile Screen </Text>
        </View>
    );
};

const ProfileStackScreen : React.FC = ({navigation}:any) => {
    return (
        <MasterStackHeader name = "Profile" screenComponent = {ProfileScreen} navigation = {navigation} />
    )
};

export default ProfileStackScreen;

const styles = StyleSheet.create({
    ProfileScreen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  