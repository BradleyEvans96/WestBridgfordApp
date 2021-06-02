import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export type Props = {
    Title: string;
    MainBody: string;
};

// type CardSize = {
//     small: Size;
//     medium: Size;
//     large: Size;
// };

// type Size = {
//     width: number;
//     height: number;
// };

export default function Card({ Title, MainBody }: Props) {
    return (
        <View style={styles.mainCard}>
            <View style={styles.header}>
                <Text style={styles.headText}>{Title}</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyText}>{MainBody}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainCard: {
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#e6e6e6',
        flexDirection: 'column',
        margin: 5
    },
    header: {
        marginBottom: 5,
        alignItems: 'center'
    },
    headText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    body: {
        justifyContent: 'flex-start'
    },
    bodyText: {
        fontSize: 14,
        fontWeight: 'normal'
    }
});
