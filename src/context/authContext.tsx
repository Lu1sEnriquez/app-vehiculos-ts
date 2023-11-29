"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type AuthTokens = {
  token: string;
  refresh_oken: string;
};

export const AUTH_TOKENS_KEY = "AUTH_TOKENS"; //'$Perico123$'

export const AuthContext = createContext({
  login: (authTokens: AuthTokens) => {},
  logout: () => {},
  isLoggedIn: false,
  authTokens: null,
});

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
    const {getLocalStorage,setLocalStorage, deleteLocalStorage} =useLocalStorage();

    const authTokensInLocalStorage = getLocalStorage(AUTH_TOKENS_KEY);
    const [authTokens, setAuthTokens] = useState(authTokensInLocalStorage)
      
  
  const login = useCallback((authTokends: AuthTokens) => {
    deleteLocalStorage(AUTH_TOKENS_KEY)
    setAuthTokens(authTokends);
  }, [deleteLocalStorage]);

  const logout = useCallback(() => {
    window.localStorage.removeItem(AUTH_TOKENS_KEY);
    setAuthTokens(null);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      authTokens: authTokens,
      isLoggedIn: authTokens !== null,
    }),
    [authTokens, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
