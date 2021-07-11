import * as React from 'react';
import { Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerItemViewModel } from '../components/molecules/DrawerItemGroup';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';
import AppScreen from './AppScreen';
import ScreenContainer from './ScreenContainer';

export const DrawerItem: DrawerItemViewModel = {
    label: AppScreen.VIDEOS,
    navigationTarget: AppScreen.VIDEOS,
    hasPermission: (_) => true,
    icon: (color, size) => (
        <Ionicons name="videocam-outline" color={color} size={size} />
    )
};

const VideoScreen: React.FC = () => (
    <ScreenContainer>
        <Text>Video Screen</Text>
    </ScreenContainer>
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
