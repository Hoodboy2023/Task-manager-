import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode"
import api from "../api";
import { useEffect, useState } from "react";
import Loading from "./loading";

const ProtectedRoute = ({children}) => {
    const [isAuthorized, setIsAuthorized] = useState(null)


    useEffect(()=> {
       auth()
    },[])

     
    const auth = async () => {
        const token = localStorage.getItem("token")
        if(!token){
            setIsAuthorized(false)
            return
        }

        const decoded = jwtDecode(token)
       
        const expiration = decoded.exp
        const now = Date.now()/1000

        if (expiration < now){
            setIsAuthorized(false)
            return
        }
        setIsAuthorized(true)
    }

    if (isAuthorized === null){
        return (<div><Loading/></div>)
    }

    return isAuthorized? children:<Navigate to="/home"/>
    
}

export default ProtectedRoute