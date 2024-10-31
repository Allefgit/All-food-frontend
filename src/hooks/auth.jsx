import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({})

export function AuthProvider({ children }){
    const [data, setData] = useState({})

    async function signIn({email, password}){
        
        try{
            const response = await api.post('/sessions', {email, password})
            const {user, token} = response.data

            localStorage.setItem("@allfood:user", JSON.stringify(user))
            localStorage.setItem("@allfood:token", token)

            api.defaults.headers.common["Authorization"] = `Bearer ${token}` 
            setData({user, token})
        } catch(error) {

            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Não foi possível logar!")
            }
        }
    }

    function singOut(){
        localStorage.removeItem("@allfood:token")
        localStorage.removeItem("@allfood:user")

        setData({})
    }

    async function findDish( id ){
        return await api.get(`/dishes/${id}`)
    }

    useEffect(()=>{
        const token = localStorage.getItem("@allfood:token")
        const user = localStorage.getItem("@allfood:user")

        if(token && user){
            api.defaults.headers.common["Authorization"] = `Bearer ${token}` 
            setData({
                user: JSON.parse(user), 
                token
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ 
                signIn, 
                singOut,
                user: data.user, 
                findDish 
            }}>

            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext)
    return context
}