import { 
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native';
import { 
  DarkTheme as PaperDarkTheme, 
  DefaultTheme as PaperDefaultTheme
} from 'react-native-paper';
import { Theme } from '../context/ThemeContext'

export const themeMapper = (theme: Theme) => {
  if (theme === Theme.Dark) return CustomDarkTheme

  return CustomDefaultTheme
}

const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,
        ...PaperDefaultTheme.colors,
        background: '#ffffff',
        text: '#333333'
    }
}

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: '#333333',
    text: '#ffffff'
  }
}