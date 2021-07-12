import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Stripes from '@components/atoms/Stripes';
import { RedClubLogo, BlueClubLogo } from '@components/atoms/images';
import colors from '../../themes/colors';
import { Navigation } from '../../types/types';

const teamID = 2;
const blueTeamID = 1;

function isBlueTeam(activeTeamID: number): Boolean {
    return activeTeamID === blueTeamID;
}

const Stack = createStackNavigator();

export type Props = {
    name: string;
    screenComponent: React.FC;
    navigation: Navigation;
};

const StackScreen: React.FC<Props> = ({
    name,
    screenComponent,
    navigation
}) => {
    const windowWidth = Dimensions.get('window').width + 1;
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: { color: 'white' },
                headerTitleAlign: 'left',
                headerBackground: () => (
                    <Stripes
                        width={windowWidth}
                        numberOfStripes={3}
                        backgroundColour={
                            isBlueTeam(teamID)
                                ? colors.WEST_BRIDGFORD_BLUE
                                : colors.WEST_BRIDGFORD_RED
                        }
                        stripeColour={colors.WEST_BRIDGFORD_BLACK}
                    />
                ),
                headerLeft: () => (
                    <Icon.Button
                        name="ios-menu"
                        size={30}
                        backgroundColor="transparent"
                        onPress={() => navigation.openDrawer()}
                    />
                ),
                headerRight: () => (
                    <View style={styles.headerIcon}>
                        {isBlueTeam(teamID) ? (
                            <BlueClubLogo size={45} />
                        ) : (
                            <RedClubLogo size={45} />
                        )}
                    </View>
                )
            }}
        >
            <Stack.Screen name={name} component={screenComponent} />
        </Stack.Navigator>
    );
};

export default StackScreen;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 1,
        color: 'white'
    },
    headerIcon: {
        paddingRight: 2,
        paddingBottom: 5
    }
});
