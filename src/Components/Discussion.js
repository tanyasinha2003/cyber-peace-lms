import React from 'react'
import './Discussion.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Discussion () {
	return (
		<div className='Discussion_Discussion'>
			<div className='Group50'>
				<div className='Rectangle119'/>
				<span className='ByCategory'>By Category:</span>
				<img className='Vector' src = {ImgAsset.Discussion_Vector} />
				<div className='Group14'>
					<div className='riarrowdropdownfill'>
						<img className='Vector_1' src = {ImgAsset.Discussion_Vector_1} />
					</div>
					<div className='riarrowdropdownfill_1'>
						<img className='Vector_2' src = {ImgAsset.Discussion_Vector_2} />
					</div>
				</div>
			</div>
			<div className='Group51'>
				<div className='Rectangle117'/>
				<span className='Recent'>Recent</span>
				<span className='Popular'>Popular</span>
				<span className='LastReply'>Last Reply</span>
			</div>
			<div className='Rectangle45'/>
			<div className='Group53'>
				<div className='Rectangle46'/>
				<img className='Ellipse2' src = {ImgAsset.Discussion_Ellipse2} />
				<span className='_11July2024'>11 July, 2024</span>
				<div className='Rectangle47'/>
				<span className='Heresasampleentryforthediscussionplatform'>Here’s a sample entry for the discussion platform</span>
				<span className='AndrewSmith'>Andrew Smith</span>
				<span className='Reply'>Reply</span>
			</div>
			<div className='Group52'>
				<div className='Rectangle116'/>
				<img className='Ellipse3' src = {ImgAsset.Discussion_Ellipse3} />
				<span className='_11July2024_1'>11 July, 2024</span>
				<div className='Rectangle117_1'/>
				<span className='Heresasampleentryforthediscussionplatform_1'>Here’s a sample entry for the discussion platform</span>
				<span className='AndrewSmith_1'>Andrew Smith</span>
				<span className='Reply_1'>Reply</span>
			</div>
			<div className='Group54'>
				<div className='Rectangle116_1'/>
				<img className='Ellipse3_1' src = {ImgAsset.Discussion_Ellipse3_1} />
				<span className='_11July2024_2'>11 July, 2024</span>
				<div className='Rectangle117_2'/>
				<span className='Heresasampleentryforthediscussionplatform_2'>Here’s a sample entry for the discussion platform</span>
				<span className='AndrewSmith_2'>Andrew Smith</span>
				<span className='Reply_2'>Reply</span>
			</div>
			<div className='Rectangle116_2'/>
			<img className='Ellipse3_2' src = {ImgAsset.Discussion_Ellipse3_2} />
			<span className='_11July2024_3'>11 July, 2024</span>
			<span className='Heresasampleentryforthediscussionplatform_3'>Here’s a sample entry for the discussion platform</span>
			<span className='AndrewSmith_3'>Andrew Smith</span>
			<div className='Rectangle72'/>
			<Link to='/dashboardui'>
				<span className='Dashboard'>Dashboard</span>
			</Link>
			<span className='CyberPeaceFoundation'>Cyber Peace Foundation</span>
			<div className='Rectangle115'/>
			<Link to='/courses'>
				<span className='Courses'>Courses</span>
			</Link>
			<span className='Community'>Community</span>
			<Link to='/classesandcalender'>
				<span className='Calendar'>Calendar </span>
			</Link>
			<div className='Group64'>
				<div className='Rectangle72_1'/>
				<img className='Search' src = {ImgAsset.DashboardUI_Search} />
				<span className='Search_1'>Search</span>
				<Link to='/profileui'>
					<img className='MaleUser' src = {ImgAsset.DashboardUI_MaleUser} />
				</Link>
				<Link to='/notificationsui'>
					<img className='Doorbell' src = {ImgAsset.DashboardUI_Doorbell} />
				</Link>
			</div>
		</div>
	)
}