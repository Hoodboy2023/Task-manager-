import {useEffect, useState} from "react"
import api from "../api"
import { useNavigate } from "react-router-dom"
const Login = () => {
    const [emailAddress, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        setError(null)
        try {
            const response = await api.post("/api/v1/auth/login",{emailAddress,password})
            localStorage.setItem("token",response.data.token)
            localStorage.setItem("firstName", response.data.firstName)
           
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
            setError([error.response.data.error.message])
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email <input type="text" onChange={(e) =>{setEmail(e.target.value)}}/></label>
                <label> password <input type="text" onChange={(e) =>{setPassword(e.target.value)}}/></label>
                <label>Sign in<input type="submit" /></label>
                <ul>
                    {error && (<li>{error}</li>)}                
                </ul>
            </form>
        </div>
    )
}

export default Login