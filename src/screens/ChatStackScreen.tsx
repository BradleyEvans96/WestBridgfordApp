import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerItemViewModel } from '../components/molecules/DrawerItemGroup';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';
import AppScreen from './AppScreen';

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
    <View style={styles.ChatScreen}>
        <Text> Chat Screen </Text>
    </View>
);

const ChatStackScreen: React.FC = ({ navigation }: Navigation) => (
    <MasterStackHeader
        name="Chat"
        screenComponent={ChatScreen}
        navigation={navigation}
    />
);

export default ChatStackScreen;

const styles = StyleSheet.create({
    ChatScreen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
