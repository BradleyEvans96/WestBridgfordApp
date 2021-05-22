import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';

const ResultsScreen: React.FC = () => (
    <View style={styles.ResultsScreen}>
        <Text> Results </Text>
    </View>
);

const ResultsStackScreen: React.FC = ({ navigation }: Navigation) => (
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
