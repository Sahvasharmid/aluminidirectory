import React from 'react'

import Layout from '../components/Layout/Layout'

const AboutPage = () => {

  return (
    <div>
       <Layout>
        <div className='container-fluid' style={{paddingTop:"5rem"}}>
          <div className='container' id="about">
     <h3 className='text-center'>About us</h3>
     <div  className='row pt-5 pb-5 d-flex flex-column-reverse flex-md-row'>
      <div className="col-12 col-lg-6">
     <h3>Mes Alumini Association</h3>
     <h4 style={{color:"var(--secondary-color)",paddingTop:"10px",paddingBottom:"10px"}}>MES Alumni Association was formed with a clear mandate to reunite former students</h4>
<p>MESAA (MES Alumni Association) first started out in 2006 under the aegis of the MES Youth Association (MESYA) with a mere registration of 240 ex-students. Today, more than a decade later, this has grown to 2300 registrations from all over the world and counting!

MES Alumni, as it is now called, aims to serve as a common platform to re-ignite reminiscent relationships and a bridge towards building new ones.

MES Alumni Association was formed with a clear mandate to reunite former students of MES Indian School from all over the world. The students who graduated from the school over the years have gone to have distinguished careers in various fields around the globe working for world-class organisations, entrepreneurship, engaging with different community, or continuing their learning journey through further studies. The school takes great pride in their achievements and their progress through life and it is this in mind that the school continues its association with its former students.</p>
        </div>
        <div className="col-12 col-lg-6">
<img src="/aluminidirectory/images/aboutimg.jpg" style={{width: "100%"}} alt="About" />
</div>
        </div>
        </div>
      
        </div>
      </Layout>
    </div>
  )
}

export default AboutPage