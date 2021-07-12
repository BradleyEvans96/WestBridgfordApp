import React from 'react';
import { Text } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerItemViewModel } from '@components/molecules/DrawerItemGroup';
import MasterStackHeader from '@components/organisms/MasterStackHeader';
import AppScreen from '@screens/AppScreen';
import ScreenContainer from '@screens/ScreenContainer';
import { PlayerFixture } from '@joshpav/westbridgfordappapi';
import Api from '@helpers/api';
import { Navigation } from '../types/types';

export const DrawerItem: DrawerItemViewModel = {
    label: AppScreen.AVAILABILITY,
    navigationTarget: AppScreen.AVAILABILITY,
    hasPermission: (_) => true,
    icon: (color, size) => (
        <MaterialCommunityIcon name="spellcheck" color={color} size={size} />
    )
};

const Availability: React.FC = () => {
    const playerId = '1';
    const teamId = '1';

    const [availability, setAvailability] = React.useState(
        [] as PlayerFixture[]
    );

    React.useEffect(() => {
        new Api().getAvailability(teamId, playerId, setAvailability);
    }, [teamId]);

    return (
        <ScreenContainer>
            <Text>Availability</Text>
            {availability.map((fixture) => (
                <Text
                    key={fixture.fixtureId}
                >{`Date: ${fixture.date} Available: ${fixture.availability}`}</Text>
            ))}
        </ScreenContainer>
    );
};

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
