import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasterStackHeader from '../components/MasterStackHeader';
import { Navigation } from '../types/types';

const Availability: React.FC = () => (
    <View style={styles.AvailabilityScreen}>
        <Text> Congrats you made it to the Tester Screen </Text>
    </View>
);

const AvailabilityStackScreen: React.FC = ({ navigation }: Navigation) => (
    <MasterStackHeader
        name="Availability"
        screenComponent={Availability}
        navigation={navigation}
    />
);

export default AvailabilityStackScreen;

const styles = StyleSheet.create({
    AvailabilityScreen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
