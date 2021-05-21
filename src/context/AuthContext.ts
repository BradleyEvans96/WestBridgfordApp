import { createContext, useContext } from 'react';


/*
 * A type that represents our Context.
 * Our Context has a setUserToken, setIsLoading variabes
 * And two functions to implement the sign in and sign out 
 */
    
export type AuthContextType = {
    userToken: string;
    userName: string;
    isLoading: boolean;
    signIn:(foundUser:{ id: number, email: string, username: string, password: string, userToken: string }[])=>void;
    signOut:()=>void;
}

/*
 * Create the context that will be used, with some default values.
 * These default values will never be used. When we use this context as a Provider we are forced
 * to provide an actual value with the 'value' prop.
*/
export const AuthContext = createContext<AuthContextType>({ 
    userToken: "" ,
    userName: "",
    isLoading: false,
    signIn: (_foundUser) => console.warn('No Sign In SetUp'),
    signOut: () => console.warn('No Sign Out Setup')
  });

// This will return the instance of the ThemeContext that has been configured
export const useAuth = () => useContext(AuthContext);
