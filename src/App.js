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
        {/* Define routes for your pages */}
        <Route path="/client" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/membership' element={<MembershipPage></MembershipPage>}></Route>
        <Route path='/login' element={<LoginForm></LoginForm>}></Route>
        <Route path='/dashboard' element={<PrivateRouter></PrivateRouter>}>
       <Route path="user" element={<DashboardUser></DashboardUser>}></Route>
    <Route path="user/events" element={<EventList></EventList>}></Route>
    <Route path='user/course' element={<CourseList></CourseList>}></Route>
<Route path="user/profile" element={<Profile></Profile>}></Route>
<Route path='user/members' element={<MemberList></MemberList>}></Route>

          </Route>
          <Route path="/admindashboard" element={<AdminRoute />}>
                    <Route path='admin' element={<AdminDashboard></AdminDashboard>}></Route>
                    <Route path='admin/members' element={<AdminMemberList></AdminMemberList>}></Route>
                    <Route path='admin/profile' element={<ProfileUpdateForm></ProfileUpdateForm>}></Route>
                </Route>
      </Routes>
   
  );
};
export default App;