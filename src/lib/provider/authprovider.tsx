import { createContext, ReactNode, useEffect, useState } from "react";
import { VITE_GOOGLE_OAUTH_CLIENT_ID, VITE_REDIRECT_URI } from "../const/env";
import axios from "axios";

export const AuthContext = createContext<AuthContextProps | null>(null);

export interface UserDataProps {
  email: string;
  id: string;
  picture: string;
  verified_email: boolean;
}

export interface AuthContextProps {
  data: UserDataProps;
  oAuthHandler: () => void;
  authenticated: boolean;
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<UserDataProps>({
    email: "",
    id: "",
    picture: "",
    verified_email: false,
  });
  const [authenticated, setAuthenticated] = useState(false);
  const oAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${VITE_GOOGLE_OAUTH_CLIENT_ID}&
response_type=token&
redirect_uri=${VITE_REDIRECT_URI}&
scope=https://www.googleapis.com/auth/userinfo.email`;
  const oAuthHandler = () => {
    window.location.assign(oAuthURL);
  };
  const oAuthAuthorization = async () => {
    const url = new URL(window.location.href);
    const hash = url.hash;
    if (hash) {
      const accessToken = hash.split("=")[1].split("&")[0];
      await axios
        .get(
          "https://www.googleapis.com/oauth2/v2/userinfo?access_token=" +
            accessToken,
          {
            headers: {
              authorization: `token ${accessToken}`,
              accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(data);
          setData(res.data);
          setAuthenticated(true);
        })
        .catch((e) => {
          console.log("oAuth token expired");
          setAuthenticated(false);
        });
    }
  };
  useEffect(() => {
    oAuthAuthorization();
  }, []);

  return (
    <AuthContext.Provider value={{ data, oAuthHandler, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
