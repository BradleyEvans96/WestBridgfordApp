import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { DrawerItemViewModel } from '../components/molecules/DrawerItemGroup';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';
import AppScreen from './AppScreen';

export const DrawerItem: DrawerItemViewModel = {
    label: AppScreen.FIXTURES,
    navigationTarget: AppScreen.FIXTURES,
    hasPermission: (_) => true,
    icon: (color, size) => (
        <MaterialIcon name="sports" color={color} size={size} />
    )
};

const FixtureScreen: React.FC = () => (
    <View style={styles.FixtureScreen}>
        <Text> Fixture Screen </Text>
    </View>
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

const styles = StyleSheet.create({
    FixtureScreen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
