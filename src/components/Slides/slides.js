import React from 'react';
import styles from './slides.module.css'; // Import the CSS module

const SlideShow = () => {
  return (
    <div 
      id="carouselExampleAutoplaying" 
      className={`carousel slide ${styles.slide}`} 
      data-bs-ride="carousel" 
      data-bs-interval="3000" 
    
    >
      <div className={`carousel-inner ${styles.carouselinner}`}>
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img 
            src="https://resources.itmuniversity.ac.in/newweb/images/homepage04052024-5.jpg" 
            className={`d-block w-100 ${styles.carouselImage}`} 
            alt="Slide 1"
          />
          
        </div>
        
        {/* Slide 2 */}
        <div className="carousel-item">
          <img 
            src="https://assets.collegedunia.com/public/college_data/images/appImage/_ITMCAS-new.jpg"
            className={`d-block w-100 ${styles.carouselImage}`} 
            alt="Slide 2"
          />
        
        </div>
        
        {/* Slide 3 */}
        <div className="carousel-item">
          <img 
            src="https://resources.itmuniversity.ac.in/newweb/images/homepage04052024-5.jpg"
            className={`d-block w-100 ${styles.carouselImage}`} 
            alt="Slide 3"
          />
         
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button 
        className="carousel-control-prev" 
        type="button" 
        data-bs-target="#carouselExampleAutoplaying" 
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button 
        className="carousel-control-next" 
        type="button" 
        data-bs-target="#carouselExampleAutoplaying" 
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default SlideShow;
