import * as React from 'react';
import { Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';
import AppScreen from './AppScreen';
import { DrawerItemViewModel } from '../components/molecules/DrawerItemGroup';
import ScreenContainer from './ScreenContainer';

export const DrawerItem: DrawerItemViewModel = {
    label: AppScreen.SQUAD,
    navigationTarget: AppScreen.SQUAD,
    hasPermission: (_) => true,
    icon: (color, size) => (
        <Ionicons name="people-outline" color={color} size={size} />
    )
};

const SquadScreen: React.FC = () => (
    <ScreenContainer>
        <Text>Squad Screen</Text>
    </ScreenContainer>
);

const SquadStackScreen: React.FC<{
    navigation: Navigation;
}> = ({ navigation }) => (
    <MasterStackHeader
        name="Squad"
        screenComponent={SquadScreen}
        navigation={navigation}
    />
);

export default SquadStackScreen;
