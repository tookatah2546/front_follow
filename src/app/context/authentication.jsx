"use client"

import { createContext,useContext,useState,useEffect } from "react"
import axios from "axios";
import { useRouter } from "next/navigation";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const AuthContext = createContext();

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

export const AuthProvider = ({ children }) => {
  //const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loadFinished, setLoadFinished] = useState(false);
  //const [username, setUsername] = useState('');
  //const [password, setPassword] = useState('');
  const router = useRouter()

  const submitlogin = (e) => {
    //console.log(e);
    e.preventDefault;
    client.post("/api/login",e
  
    ).then(async function(res) {
      
      console.log(res)
      localStorage.setItem("token",res.data.token)
      client.defaults.headers.common['Authorization'] = "Token "+ localStorage.getItem("token")

      await loadUserData()
      router.replace("/myproject")
     
    }).catch(function(error) {
        console.error('Login failed:', error);
      });
  };

  const setUser = (user) => {
    localStorage.setItem('user',JSON.stringify(user))
    setCurrentUser(user)
  }

  const loadUserData = async () => {
    setLoadFinished(false)
    let token = localStorage.getItem("token",null)
    console.log("authentication.jsx @ loadUserData : token", token)

    let localStorageUser = localStorage.getItem("user",null)
    if(localStorageUser != null){
      let user = JSON.parse(localStorageUser)
      setUser(user)
      setLoadFinished(true)
    }else {
      setUser(null)
      setLoadFinished(false)
    }
    

    if(token == null){
      setUser(null)
      setLoadFinished(true)
      router.replace("/login_users")
    }else {
      client.defaults.headers.common['Authorization'] = "Token "+ localStorage.getItem("token")
      let result = await client.get("/api/user")
      let user = result.data?.user ?? null
      console.log("authentication.jsx @ loadUserData : user = ",user)
      setUser(user)

      if(user == null){
        setLoadFinished(true)
        router.replace("/login_users")
      }
    }
    setLoadFinished(true)  
  }


  const submitlogout = (e) => {
    e.preventDefault;
    localStorage.removeItem("token")
    localStorage.clear();
    client.defaults.headers.common["Authorization"] = null;
    console.log('aert');
  };


  useEffect(() => {
    loadUserData()
  }, []);



  return (
    <AuthContext.Provider value={{ currentUser, submitlogin, submitlogout , loadFinished }}>
      <div style={loadFinished ? {display:'none'}  : {}}>
        Loading...
      </div>
      <div style={loadFinished ? {}  : {display:'none'}}>
      {children}
      </div>
      
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);