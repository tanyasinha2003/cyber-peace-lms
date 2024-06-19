import React from 'react'
import './LoginUI.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'

import bg from '../assets/images/bg.png'
import googleLogo from '../assets/images/google-logo.jpg'

import { useNavigate } from 'react-router-dom'

const Login =() =>{

	const navigate = useNavigate();

	const handleLogin = () => {
	  
	  navigate('/dashboard'); 
	};
  

	return (<>
		<img src={bg} alt="Login" className='bg'/>
		<div className="login-container">
		
		<div className="login-form">
		  <h1>Login</h1>
		  <div className="user-type">
			<label>
			  <input type="radio" name="userType" value="admin" defaultChecked />
			  Admin
			</label>
			<label>
			  <input type="radio" name="userType" value="user" />
			  User
			</label>
		  </div>
		  <div className="input-group">
			<input type="text" placeholder="USERNAME" className='input-field'/>
		  </div>
		  <div className="input-group">
			<input type="password" placeholder="PASSWORD"  className='input-field' />
		  </div>
		  <div className="forgot-password">
			Forgot Password?
		  </div>
		  <button className="login-button" onClick={handleLogin}>Login</button>
		  <div className="or">OR</div>
		  <div className="google-login">
		  
			<img src={googleLogo} alt="Google logo" className='google-logo' />
			Log in with Google
		  </div>
		</div>
	  </div>
	  </>
	)
}


export default Login;