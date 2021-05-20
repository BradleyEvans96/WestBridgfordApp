import * as React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import MasterStackHeader from '../components/MasterStackHeader';
import WBCFCLogo from '../components/WBLogo';

const ManagerScreen: React.FC = () => (
    <View style={styles.HomeScreen}>
        <Text> I am a manager </Text>
    </View>
);

const ManagerStackScreen: React.FC = ({ navigation }: any) => (
    <MasterStackHeader
        name="Manager"
        screenComponent={ManagerScreen}
        navigation={navigation}
    />
);
export default ManagerStackScreen;

const styles = StyleSheet.create({
    HomeScreen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
