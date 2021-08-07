import React from 'react';
import { Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Fixture } from '@joshpav/westbridgfordappapi';
import { DrawerItemViewModel } from '@components/molecules/DrawerItemGroup';
import MasterStackHeader from '@components/organisms/MasterStackHeader';
import FixtureCard from '@components/molecules/FixtureCard';
import ScreenContainer from '@screens/ScreenContainer';
import AppScreen from '@screens/AppScreen';
import Api from '@helpers/api';
import { Navigation } from '../types/types';

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

    const [fixtures, setFixtures] = React.useState([] as Fixture[]);

    React.useEffect(() => {
        new Api().getFixtures(teamId, setFixtures);
    }, [teamId]);
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
