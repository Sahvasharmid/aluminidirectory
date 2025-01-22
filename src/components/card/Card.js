import CountUp from 'react-countup';
import style from './Card.module.css'
const Card = ({ title, count }) => (
  <div
    className={`card ${style.card}`}
   
  >
    <div className="card-body text-center">
      {count !== null ? (
        <h6 className="card-title" style={{color:"white"}}>
          {title}: <span><CountUp end={count} duration={2} delay={0.5} /></span>
        </h6>
      ) : (
        <p className="card-text">Loading...</p>
      )}
    </div>
  </div>
)
export default Card