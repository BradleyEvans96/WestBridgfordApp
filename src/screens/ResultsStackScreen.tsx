import React from 'react';
import { Text } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerItemViewModel } from '@components/molecules/DrawerItemGroup';
import MasterStackHeader from '@components/organisms/MasterStackHeader';
import AppScreen from '@screens/AppScreen';
import ScreenContainer from '@screens/ScreenContainer';
import { Navigation } from '../types/types';

export const DrawerItem: DrawerItemViewModel = {
    label: AppScreen.RESULTS,
    navigationTarget: AppScreen.RESULTS,
    hasPermission: (_) => true,
    icon: (color, size) => (
        <MaterialCommunityIcon
            name="scoreboard-outline"
            color={color}
            size={size}
        />
    )
};

const ResultsScreen: React.FC = () => (
    <ScreenContainer>
        <Text>Results</Text>
    </ScreenContainer>
);

const ResultsStackScreen: React.FC<{
    navigation: Navigation;
}> = ({ navigation }) => (
    <MasterStackHeader
        name="Results"
        screenComponent={ResultsScreen}
        navigation={navigation}
    />
);

export default ResultsStackScreen;
