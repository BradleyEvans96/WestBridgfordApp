import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

type Props = {
    scrollEnabled?: boolean;
};

const ScreenContainer: React.FC<Props> = ({
    children,
    scrollEnabled = true
}) => (
    <View style={styles.ComponentsContainer}>
        <ScrollView scrollEnabled={scrollEnabled}>{children}</ScrollView>
    </View>
);

export default ScreenContainer;

const styles = StyleSheet.create({
    ComponentsContainer: {
        width: '94%',
        alignItems: 'center',
        height: '94%',
        margin: '3%'
    }
});
