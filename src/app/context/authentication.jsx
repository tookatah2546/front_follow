"use client"

import { createContext,useContext,useState,useEffect } from "react"
import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const AuthContext = createContext();

const client = axios.create({
    baseURL: "http://localhost:8000"
  });

export const AuthProvider = ({ children }) => {
  //const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitlogin = (e) => {
    e.preventDefault();
    client.post(
      "/api/login",
      {
        username: 'username',
        password: 'password',
      }
    ).then(function(res) {
      setCurrentUser(true);
    }).catch(function(error) {
        console.error('Login failed:', error);
      });
  };

  const submitlogout = (e) => {
    e.preventDefault();
    client.post(
      "/api/logout",
      {withCredentials: true}
    ).then(function(res) {
      setCurrentUser(false);
    }).catch(function(error) {
        console.error('Logout failed:', error);
      });
  };


  useEffect(() => {
    client.get("/api/user")
    .then(function(res) {
      setCurrentUser(true);
    })
    .catch(function(error) {
      setCurrentUser(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, submitlogin, submitlogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);