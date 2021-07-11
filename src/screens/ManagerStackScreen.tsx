import * as React from 'react';
import { Text } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerItemViewModel } from '../components/molecules/DrawerItemGroup';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';
import AppScreen from './AppScreen';
import ScreenContainer from './ScreenContainer';

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
    <ScreenContainer>
        <Text>Manager Screen</Text>
    </ScreenContainer>
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
