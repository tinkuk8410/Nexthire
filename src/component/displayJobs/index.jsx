import './index.css'
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";

/* 
 {
   "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png",
   "employment_type": "Full Time",
   "id": "d6019453-f864-4a2f-8230-6a9642a59466",
   "job_description": "We’re in search of a Back-End Software Engineer that specializes in server-side components. In this role, you’ll primarily work in NodeJs, SQL Lite, Python, AWS and GO and will bring a depth of knowledge on basic algorithms and data structures. As a Back-End Engineer, you might be architecting new features for our customers.",
   "location": "Bangalore",
   "package_per_annum": "21 LPA",
   "rating": 4,
   "title": "Backend Engineer"
 } */

const DisplayJobs = (prop) => {

  const { jobsItem } = prop;



  return (

    <li className='job-card border-0'>

      <div className='d-flex rounded-1'>

        <div className='w-75 d-flex justify-align-content-between mr-4 gap-4'>

          <img src={jobsItem.company_logo_url} width="100px" />

          <div >

            <h4 >{jobsItem.title}</h4>
            
            <h5><b>{jobsItem.package_per_annum}</b></h5>
            
          </div>

        </div>

        <div style={{ width: '30%' }}>

          <h6 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}> <FaLocationDot />{jobsItem.location}</h6>

          <h6 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}> <IoBriefcase />{jobsItem.employment_type}</h6>

          <h6 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}> <FaStar />{jobsItem.rating}</h6>

        </div>
      
      </div>
      <hr />
      <div>

      <h5>Description</h5>
      <p>{jobsItem.job_description}</p>
      </div>
      
    </li>

  )

}

export default DisplayJobs;
