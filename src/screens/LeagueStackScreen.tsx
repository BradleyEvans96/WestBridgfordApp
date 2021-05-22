import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';

const LeagueScreen: React.FC = () => (
    <View style={styles.LeagueScreen}>
        <Text> League Screen </Text>
    </View>
);

const LeagueStackScreen: React.FC = ({ navigation }: Navigation) => (
    <MasterStackHeader
        name="League"
        screenComponent={LeagueScreen}
        navigation={navigation}
    />
);

export default LeagueStackScreen;

const styles = StyleSheet.create({
    LeagueScreen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
