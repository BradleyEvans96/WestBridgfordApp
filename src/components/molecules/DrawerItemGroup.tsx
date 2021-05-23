import React from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Navigation, User } from '../../types/types';
import AppScreen from '../../screens/AppScreen';

export type DrawerItemViewModel = {
    label: string;
    navigationTarget: AppScreen;
    icon?: (color: string, size: number) => React.ReactNode;
    style?: StyleProp<ViewStyle>;
    hasPermission: (user: User) => boolean;
};

interface IProps {
    items: DrawerItemViewModel[];
    navigation: Navigation;
    currentUser: User;
}

// This component will take in a List of the view models above, and render a drawer item
// for each one. Removes most of the boilerplate now that we are doing it all dynamically.
export default function DrawerItemGroup({
    items,
    navigation,
    currentUser
}: IProps) {
    return (
        <View>
            {items.reduce((components, item) => {
                if (item.hasPermission(currentUser)) {
                    return components.concat(
                        <DrawerItem
                            key={item.label}
                            label={item.label}
                            onPress={() =>
                                navigation.navigate(item.navigationTarget)
                            }
                            style={item.style}
                            icon={({ color, size }) =>
                                item.icon ? item.icon(color, size) : undefined
                            }
                        />
                    );
                }
                return components;
            }, [] as JSX.Element[])}
        </View>
    );
}
