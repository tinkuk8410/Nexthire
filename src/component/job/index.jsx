import './index.css';
import Header from '../header';
import DisplayJobs from '../displayJobs';
import FilterSection from '../filterSection';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const Job = () => {

  const [allValues, setValues] = useState({

    jobArr: [],
    empType: [],
    salaryRange: '',
    searchIn: ''

  })

  const [loading, setLoading] = useState(false);

  const token = Cookies.get("jwtToken");

  useEffect(() => {

    const fetchJobs = async () => {

      const api = `https://apis.ccbp.in/jobs?employment_type=${allValues.empType}&minimum_package=${allValues.salaryRange}&search=${allValues.searchIn}`;

      const options = {

        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }

      }

      try {
        setLoading(true)
        const response = await fetch(api, options)

        const data = await response.json();

        if (response.ok === true) {
          setLoading(false)
          setValues({ ...allValues, jobArr: data.jobs });
        }


      }
      catch (error) {
        console.log(error);
      }

    }

    fetchJobs();

  }, [allValues.searchIn]);

  const handleSearchInput = (e) => {

    if (e.key === "Enter") {

      setValues({ ...allValues, searchIn: e.target.value });
    }
    if (e.target.value === "") {
      setValues({ ...allValues, searchIn: "" });
    }

  }

  return (

    <div className='job-main-cont'>

      <Header />
      <div className='job-main-div container '>

        <div className='row w-100 p-2' >

          <div className='col-4 ' >
            {loading ?
              <div className='d-flex w-100 justify-content-center align-items-center' style={{ height: '75vh' }}>
                <div className='loader'></div>
              </div>
              :
              <FilterSection />
            }
            
          </div>


          <div className='col-8 p-2'>

            <input className='form-control w-75 mb-3 w-100' type="search" placeholder='search your job' onKeyUp={handleSearchInput} />


            <ul style={{ padding: '0px', margin: '0px' }}>

              {loading ?
                <div className='d-flex w-100 justify-content-center align-items-center' style={{ height: '75vh' }}>
                  <div className='loader'></div>
                </div>
                :
                allValues.jobArr.map((each) => <DisplayJobs jobsItem={each} key={each.id} />)
              }

            </ul>

          </div>

        </div>  {/* row close */}

      </div> {/* container close */}

    </div>




  )


}

export default Job;
