import React from 'react';
import { Text } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerItemViewModel } from '@components/molecules/DrawerItemGroup';
import MasterStackHeader from '@components/organisms/MasterStackHeader';
import AppScreen from '@screens/AppScreen';
import ScreenContainer from '@screens/ScreenContainer';
import { Player } from '@joshpav/westbridgfordappapi';
import Api from '@helpers/api';
import { Navigation } from '../types/types';

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

const ProfileScreen: React.FC = () => {
    const playerId = '1';

    const [player, setPlayer] = React.useState({} as Player);

    React.useEffect(() => {
        new Api().getPlayer(playerId, setPlayer);
    }, [playerId]);

    return (
        <ScreenContainer>
            <Text>Profile</Text>
            <Text>{JSON.stringify(player)}</Text>
        </ScreenContainer>
    );
};

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
