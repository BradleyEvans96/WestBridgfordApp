import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasterStackHeader from '../components/MasterStackHeader';

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
