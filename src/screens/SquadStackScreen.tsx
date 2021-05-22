import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';

const SquadScreen: React.FC = () => (
    <View style={styles.SquadScreen}>
        <Text> Squad Screen </Text>
    </View>
);

const SquadStackScreen: React.FC = ({ navigation }: Navigation) => (
    <MasterStackHeader
        name="Squad"
        screenComponent={SquadScreen}
        navigation={navigation}
    />
);

export default SquadStackScreen;

const styles = StyleSheet.create({
    SquadScreen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
