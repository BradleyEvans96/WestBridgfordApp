import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasterStackHeader from '../components/organisms/MasterStackHeader';
import { Navigation } from '../types/types';

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
