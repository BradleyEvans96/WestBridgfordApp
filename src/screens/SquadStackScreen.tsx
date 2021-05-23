import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';
import AppScreen from './AppScreen';
import { DrawerItemViewModel } from '../components/molecules/DrawerItemGroup';

export const DrawerItem: DrawerItemViewModel = {
    label: AppScreen.SQUAD,
    navigationTarget: AppScreen.SQUAD,
    hasPermission: (_) => true,
    icon: (color, size) => (
        <Ionicons name="people-outline" color={color} size={size} />
    )
};

const SquadScreen: React.FC = () => (
    <View style={styles.SquadScreen}>
        <Text> Squad Screen </Text>
    </View>
);

const SquadStackScreen: React.FC = ({ navigation }: Navigation) => (
    <MasterStackHeader
        name="Squad"
        screenComponent={SquadScreen}
        navigation={navigation}
    />
);

export default SquadStackScreen;

const styles = StyleSheet.create({
    SquadScreen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
