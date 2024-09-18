import {useEffect, useState} from "react"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <form action="">
                <label>Email <input type="text" onChange={(e) =>{setEmail(e.target.value)}}/></label>
                <label> password <input type="text" onChange={(e) =>{setPassword(e.target.value)}}/></label>
                <label>Sign in<input type="submit" /></label>
            </form>
        </div>
    )
}

export default Login