import {useEffect, useState} from "react"
import api from "../api"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const [emailAddress, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [error, setError] = useState([])
    const navigate = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault()
        setError("")
        try {

            const response = await api.post("/api/v1/auth/register", {emailAddress, firstName, lastName, password, confirmPassword})
            localStorage.setItem("token",response.data.token)
            
            navigate("/login")
        } catch (error) {
           
            setError([error.response.data.error])
        }   
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>First name<input type="text" required placeholder="FIrst name"onChange={(e) =>{setFirstName(e.target.value)}}/></label>
                <label>Last name<input type="text" placeholder="Last name" required onChange={(e) =>{setLastName(e.target.value)}}/></label>
                <label>Email <input type="text" placeholder="Email Address" required onChange={(e) =>{setEmail(e.target.value)}}/></label>
                <label> password <input type="text" placeholder="Password" required onChange={(e) =>{setPassword(e.target.value)}}/></label>
                <label>Confirm password <input type="text" placeholder="Confirm password"required onChange={(e) =>{setConfirmPassword(e.target.value)}}/></label>
                <input type="submit" value="Create account" />
                <ul>{error && error.map((error) =>{
                    return <li key={error.message}>{error.message}</li>
                })}</ul> 
            </form>
        </div>
    )
}

export default Register