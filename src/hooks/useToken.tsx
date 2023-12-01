import { COOKIENAME } from "@/middleware";
import axios from "axios";

import Cookies from "js-cookie";
const useToken = () => {
//  const [cookies, setCookie, removeCookie] = useCookies([COOKIENAME]);

  const getToken = async () => {
    
    const token = Cookies.get(COOKIENAME)
    console.log(token);
    
    if(token) return token;

    const result = await axios.get("/api/cookie");
    if (result.status == 200) {
      const data = result.data;
     // console.log(data.token.value);
      
      return data.token.value
    }
     
    return 'no encontro el token'
  };

  const saveToken = (token: string) => {
    Cookies.set(COOKIENAME, token);
  };

  const removeToken = () => {
    Cookies.remove(COOKIENAME);
  };

  return { getToken, saveToken, removeToken };
};

export default useToken;
