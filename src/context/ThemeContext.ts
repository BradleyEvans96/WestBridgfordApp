import { createContext, useContext } from 'react';

// The different themes our app supports
export enum Theme {
  Dark = 'Dark',
  Light = 'Light',
  Default = Light
}

export const DEFAULT_THEME = Theme.Light;

/*
 * A type that represents our Context.
 * Our Context has a currently selected theme (theme).
 * And a function that will update the theme (setTheme) 
 */
export type ThemeContextType = {
  theme: Theme;
  setTheme: (Theme: Theme) => void;
}

// Create the context that will be used
// Not sure how we set the provider?
export const ThemeContext = createContext<ThemeContextType>({ theme: Theme.Dark, setTheme: theme => console.warn('no theme provider')});

// This will return the instance of the ThemeContext that has been configured
export const useTheme = () => useContext(ThemeContext);

