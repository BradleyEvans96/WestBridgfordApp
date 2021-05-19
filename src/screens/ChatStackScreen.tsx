import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MasterStackHeader from '../components/MasterStackHeader';

const ChatScreen : React.FC = () => {
    return (
        <View style = {styles.ChatScreen}>
            <Text> Chat Screen </Text>
        </View>
    );
};

const ChatStackScreen : React.FC = ({navigation}:any) => {
    return (
        <MasterStackHeader name = "Chat" screenComponent = {ChatScreen} navigation = {navigation} />
    )
};

export default ChatStackScreen;

const styles = StyleSheet.create({
    ChatScreen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  