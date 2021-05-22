import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/propTypes';

const FixtureScreen: React.FC = () => (
    <View style={styles.FixtureScreen}>
        <Text> Fixture Screen </Text>
    </View>
);

const FixtureStackScreen: React.FC = ({ navigation }: Navigation) => (
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
