import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
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
        console.error("Erreur d'authentification :", error);
        setAuth(null);
      }
    };

    authenticateUser();
  }, []);

  return { auth, setAuth };
};

export default useAuth;
