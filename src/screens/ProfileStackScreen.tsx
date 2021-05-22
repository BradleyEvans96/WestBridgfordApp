import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';

const ProfileScreen: React.FC = () => (
    <View style={styles.ProfileScreen}>
        <Text> Profile Screen </Text>
    </View>
);

const ProfileStackScreen: React.FC = ({ navigation }: Navigation) => (
    <MasterStackHeader
        name="Profile"
        screenComponent={ProfileScreen}
        navigation={navigation}
    />
);

export default ProfileStackScreen;

const styles = StyleSheet.create({
    ProfileScreen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
