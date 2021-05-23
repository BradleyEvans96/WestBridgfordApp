import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerItemViewModel } from '../components/molecules/DrawerItemGroup';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';
import AppScreen from './AppScreen';

export const DrawerItem: DrawerItemViewModel = {
    label: AppScreen.AVAILABILITY,
    navigationTarget: AppScreen.AVAILABILITY,
    hasPermission: (_) => true,
    icon: (color, size) => (
        <MaterialCommunityIcon name="spellcheck" color={color} size={size} />
    )
};

const Availability: React.FC = () => (
    <View style={styles.AvailabilityScreen}>
        <Text>Availability</Text>
    </View>
);

const AvailabilityStackScreen: React.FC<{
    navigation: Navigation;
}> = ({ navigation }) => (
    <MasterStackHeader
        name="Availability"
        screenComponent={Availability}
        navigation={navigation}
    />
);

export default AvailabilityStackScreen;

const styles = StyleSheet.create({
    AvailabilityScreen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
