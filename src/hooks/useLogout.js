import axios from "axios";
import useAuth from "./useAuth";
const useLogout = () => {
  const { setAuth } = useAuth();
  const logout = async () => {
    setAuth({});
    try {
      await axios(`${process.env.REACT_APP_API_URL}/token/invalidate`, {
        withCredentials: true,
      }).then((response) => {
        console.log(response);
        // if (response.status === 200) {
        // localStorage.removeItem("isAuthenticated");
        // window.location.href = `${process.env.REACT_APP_URL_DEV}/`;
        // }
      });
    } catch (err) {
      localStorage.removeItem("isAuthenticated");
      window.location.href = `${process.env.REACT_APP_URL_DEV}/`;
    }
  };

  return logout;
};

export default useLogout;