import { createContext, useContext } from 'react';

/*
 * A type that represents our Context.
 * Our Context has a setUserToken, setIsLoading variabes
 * And two functions to implement the sign in and sign out
 */

export type User = {
    id: number;
    email: string;
    username: string;
    password: string;
    userToken: string;
};

export type AuthContextType = {
    userToken: string;
    userName: string;
    isLoading: boolean;
    signIn: (foundUser: User) => void;
    signOut: () => void;
};

/*
 * Create the context that will be used, with some default values.
 * These default values will never be used. When we use this context as a Provider we are forced
 * to provide an actual value with the 'value' prop.
 */
export const AuthContext = createContext<AuthContextType>({
    userToken: '',
    userName: '',
    isLoading: false,
    signIn: (_foundUser) => {
        throw new Error('No Sign In Provider');
    },
    signOut: () => {
        throw new Error('No Sign Out Provider');
    }
});

// This will return the instance of the ThemeContext that has been configured
export const useAuth = () => useContext(AuthContext);
