
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginUI from './Components/LoginUI';
import DashboardUI from './Components/DashboardUI';

import AdminLoginUI from './Components/AdminLoginUI';

import NotificationsUI from './Components/NotificationsUI';
import ProfileUI from './Components/ProfileUI';
import Courses from './Components/Courses';
import AdminCourses from './Components/AdminCourses';
import Coursepage1 from './Components/Coursepage1';
import AdminCoursepage from './Components/AdminCoursepage';
import Coursepreview from './Components/Coursepreview';
import AdminCoursepreview from './Components/adminCoursepreview';
import Coursepage2 from './Components/Coursepage2';
import AdminCoursepage_1 from './Components/AdminCoursepage_1';
import Discussion from './Components/Discussion';
import ClassesandCalender from './Components/ClassesandCalender';
import AdminDashboardUI from './Components/AdminDashboardUI';
import AdminProfileUI from './Components/AdminProfileUI';
import AdminNotificationsUI from './Components/AdminNotificationsUI';
import AdminDiscussion from './Components/adminDiscussion';
import AdminClassesandCalender from './Components/adminClassesandCalender';



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginUI />} />
      <Route path="/dashboard" element={<DashboardUI />} />
      <Route path="/dashboardui" component={DashboardUI} />
            <Route path="/notificationsui" component={NotificationsUI} />
            <Route path="/profileui" component={ProfileUI} />
            <Route path="/courses" component={Courses} />
            <Route path="/admincourses" component={AdminCourses} />
            <Route path="/coursepage1" component={Coursepage1} />
            <Route path="/admincoursepage" component={AdminCoursepage} />
            <Route path="/coursepreview" component={Coursepreview} />
            <Route path="/admincoursepreview" component={AdminCoursepreview} />
            <Route path="/coursepage2" component={Coursepage2} />
            <Route path="/admincoursepage_1" component={AdminCoursepage_1} />
            <Route path="/discussion" component={Discussion} />
            <Route path="/classesandcalender" component={ClassesandCalender} />
            <Route path="/admindashboardui" component={AdminDashboardUI} />
            <Route path="/adminprofileui" component={AdminProfileUI} />
            <Route path="/adminnotificationsui" component={AdminNotificationsUI} />
            <Route path="/admindiscussion" component={AdminDiscussion} />
            <Route path="/adminclassesandcalender" component={AdminClassesandCalender} />
            <Route path="/adminloginui" component={AdminLoginUI} />
    </Routes>
  </Router>
  );
}

export default App;
