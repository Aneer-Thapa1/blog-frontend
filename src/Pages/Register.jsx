import {Link} from "react-router-dom"
import "./register.css"
import { useState } from "react"
import axios from "axios"

const Register = () => {
const [inputs, setInputs] = useState({
  username: "",
  email: "",
  password: "",
})

const handleSubmit = (e) =>{
  e.preventDefault()
  try{
    const res = axios.post("/auth/register", inputs)
    console.log(res)
  }
  catch(err){
    console.log(err)

  }
}

const handleChange = e => {
 setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
}

  return (
    <div className="register">
      <form action="" className="register-form">
        <h1>Register</h1>
        <input type="text" placeholder='Username'  name="username" onChange={handleChange}/>
        <input type="email" placeholder='Email'  name="email" onChange={handleChange}/>
        <input type="password" placeholder='Password' name="password" onChange={handleChange}/>
        <button type='submit' onClick={handleSubmit} className="register-btn" name="">Register</button>
        <p className="register-p"> Do you have an account? <span><Link to="/login" className="switch">Login</Link></span></p>
      </form>
    </div>
  )
}

export default Register