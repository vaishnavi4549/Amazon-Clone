import React,{useState} from 'react';
import './login.css';
import {Link , useHistory} from "react-router-dom";


function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    return (
        <div className="login">
            <Link to="/">
            <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                    <button type="submit" className="login_signin">Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
