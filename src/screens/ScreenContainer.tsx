import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

type Props = {
    scrollEnabled?: boolean;
};

const ScreenContainer: React.FC<Props> = ({
    children,
    scrollEnabled = true
}) => (
    <View style={styles.ScreenContainer}>
        <ScrollView
            style={styles.ScrollView}
            scrollEnabled={scrollEnabled}
            contentContainerStyle={styles.ComponentsContainer}
        >
            {children}
        </ScrollView>
    </View>
);

export default ScreenContainer;

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1
    },
    ScrollView: {
        width: '100%',
        height: '100%'
    },
    ComponentsContainer: {
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        padding: 15
    }
});
