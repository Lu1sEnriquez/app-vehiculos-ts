import { COOKIENAME } from "@/middleware";
import axios from "axios";
import { useCookies } from "react-cookie";
import Cookies from "js-cookie";
const useToken = () => {
//  const [cookies, setCookie, removeCookie] = useCookies([COOKIENAME]);

  const getToken = async () => {
    const result = await axios.get("/api/cookie");
    if (result.status == 200) {
      const data = result.data;
      console.log(data.token.value);
      
      return data.token.value
    }
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
