import * as React from 'react';
import { Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { DrawerItemViewModel } from '../components/molecules/DrawerItemGroup';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';
import AppScreen from './AppScreen';
import ScreenContainer from './ScreenContainer';

export const DrawerItem: DrawerItemViewModel = {
    label: AppScreen.FIXTURES,
    navigationTarget: AppScreen.FIXTURES,
    hasPermission: (_) => true,
    icon: (color, size) => (
        <MaterialIcon name="sports" color={color} size={size} />
    )
};

const FixtureScreen: React.FC = () => (
    <ScreenContainer>
        <Text>Fixture Screen</Text>
    </ScreenContainer>
);

const FixtureStackScreen: React.FC<{
    navigation: Navigation;
}> = ({ navigation }) => (
    <MasterStackHeader
        name="Fixtures"
        screenComponent={FixtureScreen}
        navigation={navigation}
    />
);

export default FixtureStackScreen;
