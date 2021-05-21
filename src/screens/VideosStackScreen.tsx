import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasterStackHeader from '../components/MasterStackHeader';
import { Navigation } from '../types/types';

const VideoScreen: React.FC = () => (
    <View style={styles.VideoScreen}>
        <Text> Congrats you made it to the Tester Screen </Text>
    </View>
);

const VideoStackScreen: React.FC = ({ navigation }: Navigation) => (
    <MasterStackHeader
        name="Videos"
        screenComponent={VideoScreen}
        navigation={navigation}
    />
);

export default VideoStackScreen;

const styles = StyleSheet.create({
    VideoScreen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
