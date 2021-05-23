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

export default function DrawerContent({ navigation }: Navigation) {
    const { signOut } = useAuth();

    return (
        <View style={styles.drawerContent}>
            <DrawerContentScrollView {...navigation}>
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
