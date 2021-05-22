import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Drawer } from 'react-native-paper';
import { useAuth } from '../../context/AuthContext';
import { Navigation } from '../../types/propTypes';
import UserInfoHeader from '../molecules/UserInfoHeader';
import { User, Role } from '../../types/types';

const appUser: User = new User('Bradley', 'Evans', [Role.PLAYER, Role.MANAGER]);

export default function DrawerContent({ navigation }: Navigation) {
    const { signOut } = useAuth();

    return (
        <View style={styles.drawerContent}>
            <DrawerContentScrollView {...navigation}>
                <View>
                    <UserInfoHeader user={appUser} />
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {
                                navigation.navigate('Home');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {
                                navigation.navigate('Profile');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ionicons
                                    name="people-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Squad"
                            onPress={() => {
                                navigation.navigate('Squad');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcon
                                    name="spellcheck"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Availability"
                            onPress={() => {
                                navigation.navigate('Availability');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcon
                                    name="soccer"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="League"
                            onPress={() => {
                                navigation.navigate('League');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialIcon
                                    name="sports"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Fixtures"
                            onPress={() => {
                                navigation.navigate('Fixtures');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcon
                                    name="scoreboard-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Results"
                            onPress={() => {
                                navigation.navigate('Results');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ionicons
                                    name="videocam-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Videos"
                            onPress={() => {
                                navigation.navigate('Videos');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcon
                                    name="chat-processing-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Chat"
                            onPress={() => {
                                navigation.navigate('Chat');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcon
                                    name="clipboard-account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Manager"
                            onPress={() => {
                                navigation.navigate('Manager');
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ionicons
                                    name="settings-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {
                                navigation.navigate('Settings');
                            }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <MaterialCommunityIcon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {
                        signOut();
                    }}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        justifyContent: 'space-between'
    },
    userInfoSection: {
        paddingLeft: 20
    },
    userInfoPicture: {
        flexDirection: 'row',
        marginTop: 15
    },
    userInfoHeader: {
        marginLeft: 15,
        flexDirection: 'column'
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    drawerSection: {
        marginTop: 15,
        alignContent: 'flex-start',
        paddingLeft: 10
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        paddingLeft: 10
    }
});