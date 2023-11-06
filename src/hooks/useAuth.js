import { useState, useEffect, useContext } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/AuthProvider";
const useAuth = () => {
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    if (context.persist && location.pathname === "/") {
      navigate("/Home");
    }

    if (context.persist === false && location.pathname === "/") {
      navigate("/Login");
    }
    console.log("useAuth");
    const authenticateUser = async () => {
      try {
        const token = await axios.get(
          `${process.env.REACT_APP_API_URL}/token/refresh`,
          {
            withCredentials: true,
          }
        );

        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/getUser`,
          {
            headers: { Authorization: `Bearer ${token.data.token}` },
          }
        );

        setAuth((prev) => {
          return {
            ...prev,
            roles: response.data.roleNames,
            accessToken: response.data.credentials,
            idUser: response.data.user.id,
          };
        });
      } catch (error) {
        setAuth(null);
      }
    };

    authenticateUser();
  }, []);

  return { auth, setAuth };
};

export default useAuth;
