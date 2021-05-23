import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerItemViewModel } from '../components/molecules/DrawerItemGroup';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';
import AppScreen from './AppScreen';

export const DrawerItem: DrawerItemViewModel = {
    label: AppScreen.LEAGUE,
    navigationTarget: AppScreen.LEAGUE,
    hasPermission: (_) => true,
    icon: (color, size) => (
        <MaterialCommunityIcon name="soccer" color={color} size={size} />
    )
};

const LeagueScreen: React.FC = () => (
    <View style={styles.LeagueScreen}>
        <Text> League Screen </Text>
    </View>
);

const LeagueStackScreen: React.FC<{
    navigation: Navigation;
}> = ({ navigation }) => (
    <MasterStackHeader
        name="League"
        screenComponent={LeagueScreen}
        navigation={navigation}
    />
);

export default LeagueStackScreen;

const styles = StyleSheet.create({
    LeagueScreen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
