'use client'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";


import { useRouter } from "next/navigation";
import useToken from "@/hooks/useToken";

type AuthTokens= string

//const AUTH_TOKENS_KEY = "NEXT_JS_AUTH";

 const AuthContext = createContext({
  login: (authTokens: AuthTokens) => {},
  logout: () => {},
});


export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {

const router = useRouter()
const {  saveToken, removeToken } = useToken();


  const login = useCallback(function (authTokens: AuthTokens) {
   // Cookies.set("authTokens", authTokens); //con la libreria js-cookie
   saveToken(authTokens)
   router.refresh()
  
    
  }, [saveToken,router]);

  const logout = useCallback(function () {
    removeToken()
    router.refresh()
  
  //  router.push('/auth/login')
  }, [router,removeToken]);

  const value = useMemo(
    () => ({
      login,
      logout
    }),
    [login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
