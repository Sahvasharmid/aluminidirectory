import React from 'react'
import SocialLinkIcon from '../components/SocialLinks/SocialLinks'

import SlideShow from '../components/Slides/slides'
import style from './HomePage.module.css'
import Layout from '../components/Layout/Layout'

const alumniFeatures = [
  { title: "Develop Connections", description: "Building a network of other Alumnus increases your connections. MES Alumni is not only a great way to mingle and enjoy yourself, but it’s also the perfect opportunity to expand your professional connections and meet new people." },
  { title: "Give Back", description: "Joining the alumni association is the easiest way to give back to your school by joining hands with our CSR activities and student outreach programs" },
  { title: "Keep Informed", description:"Be Fit and Social Be a part of our various cultural events and Sports fiesta with your fellow Alumni "},
  { title: "Expand Your Skills", description: "MES Alumni aids in expanding their skills such as becoming member of MESAA Toastmasters club, sharpen your organization skills by joining our committee and helping conducts our various events within the calendar" },
  { title: "Show Pride", description: "Supporting your school shows pride in your education. Are you proud of having passed out from MES? Alumni support is essential to keeping this pride alive!" },
  { title: "Help Students", description: "Supporting your school shows pride in your education. Are you proud of having passed out from MES? Alumni support is essential to keeping this pride alive!" },
];

const HomePage = () => {
  return (
    <div>
     <Layout>
      <SlideShow></SlideShow>
      <div className='container-fluid pt-3 p-0' id="home">
      <div className='container'>
          <h4 className="text-center" style={{fontWeight:"bolder"}}>MES ALUMINI ASSOCIATION</h4>
       
          <p className='text-center'>MES Alumni Association was formed with a clear mandate to reunite former students of MES Indian School from all over the world. The students who graduated from the school over the years have gone to have distinguished careers in various fields around the globe working for world-class organizations, entrepreneurship, engaging with different community, or continuing their learning journey through further studies. The school takes great pride in their achievements and their progress through life and it is this in mind that the school continues its association with its former students.</p>
         </div>
          <div className='container-fluid p-0' style={{backgroundImage:`url(/images/alumni.jpeg)`,height:"70vh",backgroundPosition:"top center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>

          </div>
          <div className='container pt-3' id="join">
          <h3 className='text-center ' style={{fontWeight:"bold"}}>Why Join Alumini</h3>
          <p className='text-center'>If you studied in MES Indian School at any point of your life, you have many reasons to join the MES Alumni Community.
          We are the largest high-school alumni association with strong purpose of existence.</p>
          <div className={` d-flex flex-wrap`}><div className={`${style.section} d-flex flex-wrap`}>
  {alumniFeatures.map((feature, index) => (
    <div key={index} className="col-12 col-md-6 col-lg-4">
      <div className="p-3"> {/* Optional padding for better spacing */}
        <h4 style={{ fontWeight: "bold" }}>{feature.title}</h4>
        <p>{feature.description}</p>
      </div>
    </div>
  ))}
</div>
<div className={style.sociallinks}>
    <SocialLinkIcon width="25" height="25"></SocialLinkIcon>
</div>


</div>


        </div>
      </div>
     </Layout>
    </div>
  )
}

export default HomePage