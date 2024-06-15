import React from 'react'
import './AdminLoginUI.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function AdminLoginUI () {
	return (
		<div className='AdminLoginUI_AdminLoginUI'>
			<img className='PurpleSimpleLoginWebsiteApplicationDesktopPrototype1' src = {ImgAsset.LoginUI_PurpleSimpleLoginWebsiteApplicationDesktopPrototype1} />
			<div className='Rectangle112'/>
			<Link to='/admindashboardui'>
				<div className='Rectangle113'/>
			</Link>
			<span className='Login'>Login</span>
			<div className='Rectangle114'/>
			<span className='LoginwithGoogle'>Log in with Google</span>
			<img className='e2cd4264ef814fa8c1db180db1b5d1de1' src = {ImgAsset.LoginUI_e2cd4264ef814fa8c1db180db1b5d1de1} />
			<span className='Login_1'>Login</span>
			<span className='Username'>Username</span>
			<img className='Line41' src = {ImgAsset.AdminLoginUI_Line41} />
			<img className='Line42' src = {ImgAsset.AdminLoginUI_Line42} />
			<span className='forgotpassword'>forgot password?</span>
			<span className='OR'>OR</span>
			<img className='Line43' src = {ImgAsset.AdminLoginUI_Line43} />
			<img className='UncheckedRadioButton' src = {ImgAsset.LoginUI_UncheckedRadioButton} />
			<div className='Group91'>
				<span className='Admin'>Admin</span>
				<div className='Group89'>
					<div className='Ellipse7'/>
					<div className='Ellipse6'/>
				</div>
				<span className='User'>User</span>
				<Link to='/loginui'>
					<div className='Group90'>
						<div className='Ellipse7_1'/>
						<div className='Ellipse6_1'/>
					</div>
				</Link>
			</div>
			<div className='Ellipse8'/>
		</div>
	)
}