import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerItemViewModel } from '../components/molecules/DrawerItemGroup';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';
import AppScreen from './AppScreen';

export const DrawerItem: DrawerItemViewModel = {
    label: AppScreen.MANAGER,
    navigationTarget: AppScreen.MANAGER,
    hasPermission: (user) => user.isManager(),
    icon: (color, size) => (
        <MaterialCommunityIcon
            name="clipboard-account-outline"
            color={color}
            size={size}
        />
    )
};

const ManagerScreen: React.FC = () => (
    <View style={styles.HomeScreen}>
        <Text> I am a manager </Text>
    </View>
);

const ManagerStackScreen: React.FC<{
    navigation: Navigation;
}> = ({ navigation }) => (
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
