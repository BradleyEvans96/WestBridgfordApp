import * as React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import MasterStackHeader from '../components/MasterStackHeader';
import WBCFCLogo from '../components/WBLogo';

const HomeScreen: React.FC = ({ navigation }: any) => (
    <View style={styles.HomeScreen}>
        <Text> This is the Home Screen </Text>
        <Button
            title="Tester Page"
            onPress={() => navigation.navigate('Tester')}
        />
        <Button
            title="Press to be the manager"
            onPress={() => navigation.navigate('Manager')}
        />
    </View>
);

const HomeStackScreen: React.FC = ({ navigation }: any) => (
    <MasterStackHeader
        name="Home"
        screenComponent={HomeScreen}
        navigation={navigation}
    />
);
export default HomeStackScreen;

const styles = StyleSheet.create({
    HomeScreen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
