import React from 'react';
import { View, StyleSheet } from 'react-native';

export type Props = {
    header?: JSX.Element;
    body?: JSX.Element;
    footer?: JSX.Element;
};

export default function Card({ header, body, footer }: Props) {
    return (
        <View style={[styles.mainCard]}>
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
        margin: 5,
        backgroundColor: '#e6e6e6',
        opacity: 0.6,
        flexDirection: 'column',
        width: '100%',
        height: '20%',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 }, // change this for more shadow
        shadowOpacity: 0.4,
        shadowRadius: 10
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
