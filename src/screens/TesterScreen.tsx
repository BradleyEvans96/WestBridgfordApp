import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const TesterScreen : React.FC = () => {
    return (
        <View style = {styles.TesterScreen}>
            <Text> Congrats you made it to the Tester Screen </Text>
        </View>
    );
};

export default TesterScreen;

const styles = StyleSheet.create({
    TesterScreen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  