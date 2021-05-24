import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerItemViewModel } from '../components/molecules/DrawerItemGroup';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';
import AppScreen from './AppScreen';

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
    <View style={styles.ResultsScreen}>
        <Text> Results </Text>
    </View>
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

const styles = StyleSheet.create({
    ResultsScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
