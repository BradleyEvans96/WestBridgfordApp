import AvailabilityStackScreen, {
    DrawerItem as AvailabilityDrawerItem
} from '@screens/AvailabilityStackScreen';
import ChatStackScreen, {
    DrawerItem as ChatDrawerItem
} from '@screens/ChatStackScreen';
import FixturesStackScreen, {
    DrawerItem as FixturesDrawerItem
} from '@screens/FixturesStackScreen';
import HomeStackScreen, {
    DrawerItem as HomeDrawerItem
} from '@screens/HomeStackScreen';
import LeagueStackScreen, {
    DrawerItem as LeagueDrawerItem
} from '@screens/LeagueStackScreen';
import ManagerStackScreen, {
    DrawerItem as ManagerDrawerItem
} from '@screens/ManagerStackScreen';
import ProfileStackScreen, {
    DrawerItem as ProfileDrawerItem
} from '@screens/ProfileStackScreen';
import ResultsStackScreen, {
    DrawerItem as ResultsDrawerItem
} from '@screens/ResultsStackScreen';
import SettingsStackScreen, {
    DrawerItem as SettingsDrawerItem
} from '@screens/SettingsStackScreen';
import SquadStackScreen, {
    DrawerItem as SquadDrawerItem
} from '@screens/SquadStackScreen';
import VideosStackScreen, {
    DrawerItem as VideosDrawerItem
} from '@screens/VideosStackScreen';

export {
    AvailabilityStackScreen,
    ChatStackScreen,
    FixturesStackScreen,
    HomeStackScreen,
    LeagueStackScreen,
    ManagerStackScreen,
    ProfileStackScreen,
    ResultsStackScreen,
    SettingsStackScreen,
    SquadStackScreen,
    VideosStackScreen
};

// All of the screens, in the order they should appear in the navigation drawer
export const APP_SCREENS = [
    HomeDrawerItem,
    ProfileDrawerItem,
    SquadDrawerItem,
    AvailabilityDrawerItem,
    LeagueDrawerItem,
    FixturesDrawerItem,
    ResultsDrawerItem,
    VideosDrawerItem,
    ChatDrawerItem,
    ManagerDrawerItem,
    SettingsDrawerItem
];
