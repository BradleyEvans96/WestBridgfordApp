import * as React from 'react';
import { Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Constants from 'expo-constants';
import { useFetch } from 'react-async';
import { Fixture } from '@joshpav/westbridgfordappapi';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import AppScreen from './AppScreen';
import { Navigation } from '../types/types';
import { DrawerItemViewModel } from '../components/molecules/DrawerItemGroup';
import ScreenContainer from './ScreenContainer';
import FixtureCard from '../components/molecules/FixtureCard';

export const DrawerItem: DrawerItemViewModel = {
    label: AppScreen.FIXTURES,
    navigationTarget: AppScreen.FIXTURES,
    hasPermission: (_) => true,
    icon: (color, size) => (
        <MaterialIcon name="sports" color={color} size={size} />
    )
};

const FixtureScreen: React.FC = () => {
    const teamId = '1';

    let fixtures: Fixture[] = [];

    const { data } = useFetch<Fixture[]>(
        `${Constants.manifest?.extra?.apiEndpoint}/"${teamId}"/fixtures`,
        { headers: { accept: 'application/json' } }
    );

    if (data) {
        fixtures = data;
    }

    return (
        <ScreenContainer>
            <Text>Fixture Screen</Text>
            {fixtures.map((fixture) => (
                <FixtureCard fixtureDetails={fixture} key={fixture.fixtureId} />
            ))}
        </ScreenContainer>
    );
};

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
