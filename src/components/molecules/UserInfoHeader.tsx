import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Caption, Title } from 'react-native-paper';
import { User } from '../../types/types';
import { DefaultProfilePicture } from '../atoms/images';

interface IProps {
    user: User;
}

export default function UserInfoHeader({ user }: IProps): JSX.Element {
    return (
        <View style={styles.header}>
            <View style={styles.image}>
                <Avatar.Image
                    size={50}
                    source={(props) => (
                        <DefaultProfilePicture size={props.size} />
                    )}
                />
                <View style={styles.headerText}>
                    <Title style={styles.name}>{user.getFullName()}</Title>
                    <Caption style={styles.roles}>{user.getAllRoles()}</Caption>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingLeft: 10
    },
    headerText: {
        marginLeft: 15
    },
    name: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    roles: {
        fontSize: 14,
        lineHeight: 14
    },
    image: {
        flexDirection: 'row',
        marginTop: 15
    }
});
