import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MasterStackHeader from '../components/MasterStackHeader';

const VideoScreen : React.FC = () => {
    return (
        <View style = {styles.VideoScreen}>
            <Text> Congrats you made it to the Tester Screen </Text>
        </View>
    );
};

const VideoStackScreen : React.FC = ({navigation}:any) => {
    return (
        <MasterStackHeader name = "Videos" screenComponent = {VideoScreen} navigation = {navigation} />
    )
};

export default VideoStackScreen;

const styles = StyleSheet.create({
    VideoScreen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  