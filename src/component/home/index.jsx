import './index.css'
import Header from '../header';

const Home = ()=>{

  return (

    <div className='home-main-cont'>

      <Header/>

      <div className='d-flex justify-content-center align-items-center w-100 text-center'>
        <h1>"Connecting Talent with Opportunity – Start Your Journey Today!"</h1>
      </div>

      <marquee behavior='fast' className='marqee-cont' >Let sucure your career and find job with us. we'll never dissappoint you. </marquee>
            
    </div>
    



  )
}

export default Home;
