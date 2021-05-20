import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasterStackHeader from '../components/MasterStackHeader';

const TesterScreen: React.FC = () => (
    <View style={styles.TesterScreen}>
        <Text> Congrats you made it to the Tester Screen </Text>
    </View>
);

const TesterStackScreen: React.FC = ({ navigation }: any) => (
    <MasterStackHeader
        name="Tester"
        screenComponent={TesterScreen}
        navigation={navigation}
    />
);

export default TesterStackScreen;

const styles = StyleSheet.create({
    TesterScreen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
