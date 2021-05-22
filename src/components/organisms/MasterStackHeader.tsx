import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Stripes from '../atoms/Stripes';
import colors from '../../themes/colors';
import { Navigation } from '../../types/types';
import { ClubLogo } from '../atoms/images';

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
    const windowWidth = Dimensions.get('window').width;
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: { color: 'white' },
                headerTitleAlign: 'left',
                headerBackground: () => (
                    <Stripes
                        width={windowWidth}
                        numberOfStripes={3}
                        backgroundColour={colors.WEST_BRIDGFORD_BLUE}
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
                        <ClubLogo size={50} />
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
        padding: 20
    }
});
