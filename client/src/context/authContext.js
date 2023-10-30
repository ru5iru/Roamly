import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const setImageUrl = (currUrl) => {
        if (currUrl !== null && currUrl.length > 50) {
           return currUrl;
        } else if (currUrl !== null) {
           try {
              return require("../../public/upload/" + currUrl);
           } catch {
              
           }
        }
    }

    const login = async (inputs) => {
        const res = await axios.post("http://localhost:8000/server/users/login", inputs, {
          withCredentials: true,
        });
        res.data.profile_pic = setImageUrl(res.data.profile_pic);
        setCurrentUser(res.data)
      };

    const logout = async () => {
        await axios.post("http://localhost:8000/server/users/logout");
        setCurrentUser(null);
    }

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return(
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
};