import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Drawer } from 'react-native-paper';
import { useAuth } from '../../context/AuthContext';
import { Navigation, User, Role } from '../../types/types';
import UserInfoHeader from '../molecules/UserInfoHeader';
import DrawerItemGroup from '../molecules/DrawerItemGroup';
import { APP_SCREENS } from '../../screens';

const appUser: User = new User('Bradley', 'Evans', [Role.PLAYER, Role.MANAGER]);

export default function DrawerContent({
    navigation
}: {
    navigation: Navigation;
}) {
    const { signOut } = useAuth();

    return (
        <View style={styles.drawerContent}>
            <DrawerContentScrollView>
                <View>
                    <UserInfoHeader user={appUser} />
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItemGroup
                            items={APP_SCREENS}
                            navigation={navigation}
                            currentUser={appUser}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={[styles.bottomDrawerSection]}>
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
        justifyContent: 'space-between',
        paddingLeft: 10
    },
    drawerSection: {
        marginTop: 15,
        alignContent: 'flex-start'
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopWidth: 1,
        borderColor: '#0000001f'
    }
});
