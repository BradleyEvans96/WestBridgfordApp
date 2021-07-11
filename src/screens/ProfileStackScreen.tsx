import * as React from 'react';
import { Text } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerItemViewModel } from '../components/molecules/DrawerItemGroup';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';
import AppScreen from './AppScreen';
import ScreenContainer from './ScreenContainer';

export const DrawerItem: DrawerItemViewModel = {
    label: AppScreen.PROFILE,
    navigationTarget: AppScreen.PROFILE,
    hasPermission: (_) => true,
    icon: (color, size) => (
        <MaterialCommunityIcon
            name="account-outline"
            color={color}
            size={size}
        />
    )
};

const ProfileScreen: React.FC = () => (
    <ScreenContainer>
        <Text>Profile</Text>
    </ScreenContainer>
);

const ProfileStackScreen: React.FC<{
    navigation: Navigation;
}> = ({ navigation }) => (
    <MasterStackHeader
        name="Profile"
        screenComponent={ProfileScreen}
        navigation={navigation}
    />
);

export default ProfileStackScreen;
