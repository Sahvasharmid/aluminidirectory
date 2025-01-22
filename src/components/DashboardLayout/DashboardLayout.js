import { useContext } from "react";
import { AuthContextProvider } from "../../utils/AuthContext";
import DashboardNavbar from './DashboardNavbar'
const DashboardLayout = ({ children }) => {
  const { auth } = useContext(AuthContextProvider);

  const userLinks = {
    link: '/dashboard/user',
    profilelink: '/dashboard/user/profile',
    members: '/dashboard/user/members',
  };

  const adminLinks = {
    link: '/admindashboard/admin',
    profilelink: '/admindashboard/admin/profile',
    members: '/admindashboard/admin/members',
  };

  // Choose links based on user role
  const links = auth?.user.role === 'admin' ? adminLinks : userLinks;

  return (
    <>
      <DashboardNavbar 
        link={links.link}
        profilelink={links.profilelink}
        members={links.members}
      />
      <main>{children}</main>
    </>
  );
};

export default DashboardLayout