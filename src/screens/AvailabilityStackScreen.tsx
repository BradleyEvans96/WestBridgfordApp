import React from 'react';
import { Text } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerItemViewModel } from '@components/molecules/DrawerItemGroup';
import MasterStackHeader from '@components/organisms/MasterStackHeader';
import AppScreen from '@screens/AppScreen';
import ScreenContainer from '@screens/ScreenContainer';
import { Navigation } from '../types/types';

export const DrawerItem: DrawerItemViewModel = {
    label: AppScreen.AVAILABILITY,
    navigationTarget: AppScreen.AVAILABILITY,
    hasPermission: (_) => true,
    icon: (color, size) => (
        <MaterialCommunityIcon name="spellcheck" color={color} size={size} />
    )
};

const Availability: React.FC = () => (
    <ScreenContainer>
        <Text>Availability</Text>
    </ScreenContainer>
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
