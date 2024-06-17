import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginUI from "./Components/LoginUI";
import DashboardUI from "./Components/DashboardUI";

import AdminLoginUI from "./Components/AdminLoginUI";

import NotificationsUI from "./Components/NotificationsUI";
import ProfileUI from "./Components/ProfileUI";
import Courses from "./Components/Courses";
import AdminCourses from "./Components/AdminCourses";
import Coursepage1 from "./Components/Coursepage1";
import AdminCoursepage from "./Components/AdminCoursepage";
import Coursepreview from "./Components/Coursepreview";
import AdminCoursepreview from "./Components/adminCoursepreview";
import Coursepage2 from "./Components/Coursepage2";
import AdminCoursepage_1 from "./Components/AdminCoursepage_1";
import Discussion from "./Components/Discussion";
import ClassesandCalender from "./Components/ClassesandCalender";
import AdminDashboardUI from "./Components/AdminDashboardUI";
import AdminProfileUI from "./Components/AdminProfileUI";
import AdminNotificationsUI from "./Components/AdminNotificationsUI";
import AdminDiscussion from "./Components/adminDiscussion";
import AdminClassesandCalender from "./Components/adminClassesandCalender";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginUI />} />
        <Route path="/dashboard" element={<DashboardUI />} />
        <Route path="/dashboardui" element={<DashboardUI />} />
        <Route path="/notificationsui" element={<NotificationsUI />} />
        <Route path="/profileui" element={<ProfileUI />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admincourses" element={<AdminCourses />} />
        <Route path="/coursepage1" element={<Coursepage1 />} />
        <Route path="/admincoursepage" element={<AdminCoursepage />} />
        <Route path="/coursepreview" element={<Coursepreview />} />
        <Route path="/admincoursepreview" element={<AdminCoursepreview />} />
        <Route path="/coursepage2" element={<Coursepage2 />} />
        <Route path="/admincoursepage_1" element={<AdminCoursepage_1 />} />
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/classesandcalender" element={<ClassesandCalender />} />
        <Route path="/admindashboardui" element={<AdminDashboardUI />} />
        <Route path="/adminprofileui" element={<AdminProfileUI />} />
        <Route path="/adminnotificationsui" element={<AdminNotificationsUI />} />
        <Route path="/admindiscussion" element={<AdminDiscussion />} />
        <Route
          path="/adminclassesandcalender"
          element={AdminClassesandCalender}
        />
        <Route path="/adminloginui" element={AdminLoginUI} />
      </Routes>
    </Router>
  );
}

export default App;
