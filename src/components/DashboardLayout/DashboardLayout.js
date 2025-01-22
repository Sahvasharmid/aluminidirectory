import { useContext } from "react";
import { AuthContextProvider } from "../../utils/AuthContext";
import DashboardNavbar from './DashboardNavbar'
const DashboardLayout = ({ children }) => {
  const { auth } = useContext(AuthContextProvider);

  const userLinks = {
    link: '/aluminidirectory/dashboard/user',
    profilelink: '/aluminidirectory/dashboard/user/profile',
    members: '/aluminidirectory/dashboard/user/members',
  };

  const adminLinks = {
    link: '/aluminidirectory/admindashboard/admin',
    profilelink: '/aluminidirectory/admindashboard/admin/profile',
    members: '/aluminidirectory/admindashboard/admin/members',
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