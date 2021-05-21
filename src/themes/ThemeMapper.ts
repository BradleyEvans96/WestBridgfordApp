import LightTheme from './LightTheme';
import DarkTheme from './DarkTheme';
import { Theme } from '../context/ThemeContext';

const themeMapper = (theme: Theme) => {
    if (theme === Theme.Dark) return DarkTheme;

    return LightTheme;
};

export default themeMapper;
