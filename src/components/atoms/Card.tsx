import React from 'react';
import { View, StyleSheet } from 'react-native';

export type Props = {
    header?: JSX.Element;
    body?: JSX.Element;
    footer?: JSX.Element;
};

export default function Card({ header, body, footer }: Props) {
    return (
        <View style={styles.mainCard}>
            <View>{header}</View>
            <View>{body}</View>
            <View>{footer}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainCard: {
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        opacity: 1,
        flexDirection: 'column',
        width: '100%',
        height: 'auto',
        shadowColor: '#000000',
        elevation: 15,
        shadowOffset: { width: 0, height: 20 }, // change this for more shadow
        shadowOpacity: 0.2,
        shadowRadius: 10,
        marginBottom: 10
    }
    // header: {
    //     marginBottom: 5,
    //     alignItems: 'center'
    // },
    // headText: {
    //     fontSize: 18,
    //     fontWeight: 'bold'
    // },
    // body: {
    //     justifyContent: 'flex-start'
    // },
    // bodyText: {
    //     fontSize: 14,
    //     fontWeight: 'normal'
    // }
});
