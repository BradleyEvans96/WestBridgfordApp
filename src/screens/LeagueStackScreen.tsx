import React from 'react';
import { Text } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerItemViewModel } from '@components/molecules/DrawerItemGroup';
import MasterStackHeader from '@components/organisms/MasterStackHeader';
import AppScreen from '@screens/AppScreen';
import ScreenContainer from '@screens/ScreenContainer';
import { Navigation } from '../types/types';

export const DrawerItem: DrawerItemViewModel = {
    label: AppScreen.LEAGUE,
    navigationTarget: AppScreen.LEAGUE,
    hasPermission: (_) => true,
    icon: (color, size) => (
        <MaterialCommunityIcon name="soccer" color={color} size={size} />
    )
};

const LeagueScreen: React.FC = () => (
    <ScreenContainer>
        <Text>Fixture Screen</Text>
    </ScreenContainer>
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
