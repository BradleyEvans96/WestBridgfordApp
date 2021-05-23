import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerItemViewModel } from '../components/molecules/DrawerItemGroup';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';
import AppScreen from './AppScreen';

export const DrawerItem: DrawerItemViewModel = {
    label: AppScreen.VIDEOS,
    navigationTarget: AppScreen.VIDEOS,
    hasPermission: (_) => true,
    icon: (color, size) => (
        <Ionicons name="videocam-outline" color={color} size={size} />
    )
};

const VideoScreen: React.FC = () => (
    <View style={styles.VideoScreen}>
        <Text>Videos</Text>
    </View>
);

const VideoStackScreen: React.FC<{
    navigation: Navigation;
}> = ({ navigation }) => (
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
        alignItems: 'center',
        justifyContent: 'center'
    }
});
