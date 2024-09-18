import {useEffect, useState} from "react"

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    return (
        <div>
            <form action="">
                <label>First name<input type="text" onChange={(e) =>{setFirstName(e.target.value)}}/></label>
                <label>Last name<input type="text" onChange={(e) =>{setLastName(e.target.value)}}/></label>
                <label>Email <input type="text" onChange={(e) =>{setEmail(e.target.value)}}/></label>
                <label> password <input type="text" onChange={(e) =>{setPassword(e.target.value)}}/></label>
                <label>Confirm password <input type="text" onChange={(e) =>{setConfirmPassword(e.target.value)}}/></label>
                <label>Create account<input type="submit" /></label>
            </form>
        </div>
    )
}

export default Register