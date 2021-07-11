import * as React from 'react';
import { Text } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerItemViewModel } from '../components/molecules/DrawerItemGroup';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';
import AppScreen from './AppScreen';
import ScreenContainer from './ScreenContainer';

export const DrawerItem: DrawerItemViewModel = {
    label: AppScreen.CHAT,
    navigationTarget: AppScreen.CHAT,
    hasPermission: (_) => true,
    icon: (color, size) => (
        <MaterialCommunityIcon
            name="chat-processing-outline"
            color={color}
            size={size}
        />
    )
};

const ChatScreen: React.FC = () => (
    <ScreenContainer scrollEnabled={false}>
        <Text> Chat Screen </Text>
    </ScreenContainer>
);

const ChatStackScreen: React.FC<{
    navigation: Navigation;
}> = ({ navigation }) => (
    <MasterStackHeader
        name="Chat"
        screenComponent={ChatScreen}
        navigation={navigation}
    />
);

export default ChatStackScreen;
