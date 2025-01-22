import React from 'react'
import Layout from '../components/Layout/Layout'
import style from './MemberShip.module.css'
const MembershipPage = () => {
  return (
    
        <Layout>
               <div className='container-fluid pb-4' style={{paddingTop:"5rem"}} id="membership">
                      <div className='container'>
<h3 className='text-center'>Membership Benefits</h3>
 <div  className='row pt-5 pb-5 d-flex flex-column-reverse flex-lg-row'>
    <div className={`col-12 col-lg-6 ${style.flexitem}`}>
      <ul>
        <li>Access to alumini members with association</li>
        <li>Access to sports and other events organized by MESAA</li>
        <li>Unique QR code for each member</li>
        <li>Discount on alumni merchandise</li>
        <li>Discount at select stores affiliated with MESAA</li>
        <li>Right to participate in general body meetings</li>
        <li>Provision to self-nominate and vote(if applicable) for MESAA posts.</li>
        <li>
        Gives members chance to support the association and help it to run its activities, initiations and programs, comprising of but not limited to student counseling, CSR, network building, etc</li>
        <li>Discount at select stores affiliated with MESAA</li>
        <li>Right to participate in general body meetings</li>
        <li>Unique QR code for each member</li>
        <li>Discount on alumni merchandise</li>  
      </ul>

    </div>
    <div className={`col-12 col-lg-6 ${style.flexitem} mb-3`}>
     
        <img src='/images/aboutimg.jpg' style={{width:"100%"}} ></img>
        
    </div>
</div>
                      </div>
                      </div>
        </Layout>
        
  )
}

export default MembershipPage