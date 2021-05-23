import AvailabilityStackScreen, {
    DrawerItem as AvailabilityDrawerItem
} from './AvailabilityStackScreen';
import ChatStackScreen, {
    DrawerItem as ChatDrawerItem
} from './ChatStackScreen';
import FixturesStackScreen, {
    DrawerItem as FixturesDrawerItem
} from './FixturesStackScreen';
import HomeStackScreen, {
    DrawerItem as HomeDrawerItem
} from './HomeStackScreen';
import LeagueStackScreen, {
    DrawerItem as LeagueDrawerItem
} from './LeagueStackScreen';
import ManagerStackScreen, {
    DrawerItem as ManagerDrawerItem
} from './ManagerStackScreen';
import ProfileStackScreen, {
    DrawerItem as ProfileDrawerItem
} from './ProfileStackScreen';
import ResultsStackScreen, {
    DrawerItem as ResultsDrawerItem
} from './ResultsStackScreen';
import SettingsStackScreen, {
    DrawerItem as SettingsDrawerItem
} from './SettingsStackScreen';
import SquadStackScreen, {
    DrawerItem as SquadDrawerItem
} from './SquadStackScreen';
import VideosStackScreen, {
    DrawerItem as VideosDrawerItem
} from './VideosStackScreen';

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
