import React from 'react';
import './DashboardUI.css';
import ImgAsset from '../public';
import { Link } from 'react-router-dom';

export default function DashboardUI() {
  return (
    <div className='DashboardUI_DashboardUI'>
      {/* Navbar */}
      <div className='Group64'>
        <div className='Rectangle72'/>
        <div className='search-container'>
          <input type='text' className='search-input' placeholder='Search...' />
          <img className='Search' src={ImgAsset.DashboardUI_Search} alt="Search" />
        </div>
        <div className='nav-icons'>
          <Link to='/profileui'>
            <img className='MaleUser' src={ImgAsset.DashboardUI_MaleUser} alt="Profile" />
          </Link>
          <Link to='/notificationsui'>
            <img className='Doorbell' src={ImgAsset.DashboardUI_Doorbell} alt="Notifications" />
          </Link>
        </div>
      </div>

      {/* Sidebar */}
      <div className='Group66'>
        <div className='Rectangle72_2'/>
        <div className='Rectangle115_1'/>
        <span className='Dashboard_1'>Dashboard</span>
        <span className='CyberPeaceFoundation_1'>Cyber Peace Foundation</span>
        <Link to='/courses' className='sidebar-item Courses_1'>Courses</Link>
        <Link to='/discussion' className='sidebar-item Community_1'>Community</Link>
        <Link to='/calendar' className='sidebar-item Calendar_1'>Calendar</Link>
      </div>

      {/* Main Content */}
      <div className='main-content'>
        <div className='Rectangle116' />
        <div className='Rectangle121' />
        <div className='Rectangle119' />
        <div className='Rectangle120' />
        <span className='Today'>Today</span>
        <span className='EthicalHacking'>Ethical Hacking</span>
        <span className='ProfRajSharma'>Prof Raj Sharma</span>
        <div className='Rectangle117' />
        <span className='June82024'>June 8, 2024</span>
        <span className='_300400pm'>3:00-4:00pm</span>
        <span className='Join'>Join</span>
        <div className='Rectangle162' />
        <span className='ViewAll'>View All</span>
        <div className='Rectangle182' />
        <Link to='/courses'>
          <span className='ViewAll_1'>View All</span>
        </Link>
        <img className='Clock' src={ImgAsset.AdminDashboardUI_Clock} />
        {/* Add remaining main content here */}
      </div>
    </div>
  );
}
