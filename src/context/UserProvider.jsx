import { useState } from "react"
import { UserContext } from "./AuthContext";
import { useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";


const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const fetchUser = async() => {
            try {
                const response = await axiosInstance.get('/user/check');
                setUser(response.data)
            } catch (error) {
                console.error(error);                
            } finally {
                setIsLoading(false);
            }
        }

        fetchUser()
    },[])

    return (
        <UserContext.Provider value={{user, isLoading, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;