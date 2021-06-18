import { createContext, useState, useEffect } from "react";
import Router from "next/router";
import cookie from "js-cookie";

import firebase from "../lib/firebase";

const AuthContext = createContext();

const formatUser = async (user) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  token: user.za,
  provider: user.providerData[0].providerId,
  photoUrl: user.photoURL,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lenguage, setLenguage] = useState("ptBr");

  return (
    <AuthContext.Provider
      value={{
        lenguage,
        setLenguage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
