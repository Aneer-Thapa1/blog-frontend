import "./login.css"
import { Link } from "react-router-dom"
import Register from './Register';

const Login = () => {
  return (
    <div className="login">
        <form >
        <h1>Login</h1>
            <input type="text" placeholder='Enter Username' />
            <input type="password" placeholder='Enter Password' />
            <button type='submit' className="login-btn">Login</button>
            <p className="login-p">Don't have an account? <span><Link to="/register" className="switch">Register</Link></span></p>
        </form>
        
    </div>
  )
}

export default Login