import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    // const login = () => {
    //     setCurrentUser({
    //         id: 69690,
    //         name: "John Doe",
    //         profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //     });
    // };

    const login = async (inputs) => {
        const res = await axios.post("http://localhost:8000/server/users/login", inputs, {
          withCredentials: true,
        });
    
        setCurrentUser(res.data)
      };

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return(
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )
};