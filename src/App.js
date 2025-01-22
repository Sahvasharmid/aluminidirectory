import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import MembershipPage from './Pages/MembershipPage';
import LoginForm from './components/Form/LoginForm';

import PrivateRouter from './components/Routes/PrivateRoute';
import Profile from './Pages/User/Profile';
import MemberList from './Pages/User/MemberList';
import DashboardUser from './Pages/User/DashboardUser';
import EventList from './Pages/User/Events/EventList';
import CourseList from './Pages/User/Events/CourseList';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import AdminMemberList from './Pages/Admin/AdminMemberList';
import ContactUs from './Pages/ContactUs';
import ProfileUpdateForm from './Pages/User/Profile';

const App = () => {
  return (
    <Routes>
    <Route exact path="/aluminidirectory" element={<HomePage />} />
    <Route path="/aluminidirectory/about" element={<AboutPage />} />
    <Route path="/aluminidirectory/contact" element={<ContactUs />} />
    <Route path="/aluminidirectory/membership" element={<MembershipPage />} />
    <Route path="/aluminidirectory/login" element={<LoginForm />} />
    <Route path="/aluminidirectory/dashboard" element={<PrivateRouter />}>
      <Route path="user" element={<DashboardUser />} />
      <Route path="user/events" element={<EventList />} />
      <Route path="user/course" element={<CourseList />} />
      <Route path="user/profile" element={<Profile />} />
      <Route path="user/members" element={<MemberList />} />
    </Route>
    <Route path="/aluminidirectory/admindashboard" element={<AdminRoute />}>
      <Route path="admin" element={<AdminDashboard />} />
      <Route path="admin/members" element={<AdminMemberList />} />
      <Route path="admin/profile" element={<ProfileUpdateForm />} />
    </Route>
  </Routes>
   
  );
};
export default App;