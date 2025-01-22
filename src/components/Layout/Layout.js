import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SocialLinkIcon from '../SocialLinks/SocialLinks'

const Layout = ({children,isDashboard }) => {
  return (
    <div>
         <Navbar isDashboard={isDashboard} />
        <main>{children}
       
        </main>
        <Footer></Footer>
    </div>
  )
}

export default Layout