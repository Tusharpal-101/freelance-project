// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import API from "../api"; // ✅ agar backend call karna ho

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // ✅ Option 1: static user (test)
      // setUser({ name: "John Doe", email: "johndoe@gmail.com" });
      
      // ✅ Option 2: fetch real user from backend
      const fetchUser = async () => {
        try {
          const res = await API.get("/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data.user); // backend se aaya user object
        } catch (err) {
          console.error("Error fetching user:", err);
          localStorage.removeItem("token"); // invalid token remove
          setUser(null);
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  const login = (userData, token) => {
    localStorage.setItem("token", token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
