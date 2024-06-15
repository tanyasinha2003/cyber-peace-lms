import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<Link to='/LoginUI'><div>LoginUI</div></Link>
		<Link to='/AdminLoginUI'><div>AdminLoginUI</div></Link>
		<Link to='/DashboardUI'><div>DashboardUI</div></Link>
		<Link to='/NotificationsUI'><div>NotificationsUI</div></Link>
		<Link to='/ProfileUI'><div>ProfileUI</div></Link>
		<Link to='/Courses'><div>Courses</div></Link>
		<Link to='/AdminCourses'><div>AdminCourses</div></Link>
		<Link to='/Coursepage1'><div>Coursepage1</div></Link>
		<Link to='/AdminCoursepage'><div>AdminCoursepage</div></Link>
		<Link to='/Coursepreview'><div>Coursepreview</div></Link>
		<Link to='/adminCoursepreview'><div>adminCoursepreview</div></Link>
		<Link to='/Coursepage2'><div>Coursepage2</div></Link>
		<Link to='/AdminCoursepage_1'><div>AdminCoursepage_1</div></Link>
		<Link to='/Discussion'><div>Discussion</div></Link>
		<Link to='/ClassesandCalender'><div>ClassesandCalender</div></Link>
		<Link to='/AdminDashboardUI'><div>AdminDashboardUI</div></Link>
		<Link to='/AdminProfileUI'><div>AdminProfileUI</div></Link>
		<Link to='/AdminNotificationsUI'><div>AdminNotificationsUI</div></Link>
		<Link to='/adminDiscussion'><div>adminDiscussion</div></Link>
		<Link to='/adminClassesandCalender'><div>adminClassesandCalender</div></Link>
	</div>
	)
}