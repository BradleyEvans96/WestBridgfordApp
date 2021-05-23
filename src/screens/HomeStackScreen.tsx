import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerItemViewModel } from '../components/molecules/DrawerItemGroup';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';
import AppScreen from './AppScreen';

export const DrawerItem: DrawerItemViewModel = {
    label: AppScreen.HOME,
    navigationTarget: AppScreen.HOME,
    hasPermission: (_) => true,
    icon: (color, size) => (
        <MaterialCommunityIcon name="home-outline" color={color} size={size} />
    )
};

const HomeScreen: React.FC<{
    navigation?: Navigation;
}> = ({ navigation }) => (
    <View style={styles.HomeScreen}>
        <Text> This is the Home Screen </Text>
        <Button
            title="Tester Page"
            onPress={() => navigation?.navigate('Tester')}
        />
        <Button
            title="Press to be the manager"
            onPress={() => navigation?.navigate('Manager')}
        />
    </View>
);

const HomeStackScreen: React.FC<{
    navigation: Navigation;
}> = ({ navigation }) => (
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
