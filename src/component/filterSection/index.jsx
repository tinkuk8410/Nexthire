import { useEffect, useState } from 'react';
import './index.css'
import Cookies from 'js-cookie';

const FilterSection = () => {

  const [allValues, setValue] = useState({

    profileDetails: {}

  });

  const [loading, setLoading] = useState(false);

  const empTypesList = [
    {
      label: 'Full Time',
      empTypesListId: 'FULLTIME',
    },
    {
      label: 'Part Time',
      empTypesListId: 'PARTTIME',
    },
    {
      label: 'Freelance',
      empTypesListId: 'FREELANCE',
    },
    {
      label: 'Internship',
      empTypesListId: 'INTERNSHIP',
    },
  ]

  const salaryRangesList = [
    {
      salaryRangeId: '1000000',
      label: '10 LPA and above',
    },
    {
      salaryRangeId: '2000000',
      label: '20 LPA and above',
    },
    {
      salaryRangeId: '3000000',
      label: '30 LPA and above',
    },
    {
      salaryRangeId: '4000000',
      label: '40 LPA and above',
    },
  ]

  useEffect(() => {

    const token = Cookies.get("jwtToken");

    const fetchApi = async () => {

      setLoading(true);

      const api = "https://apis.ccbp.in/profile";

      const option = {

        method: "GET",
        headers: {
          authorization: `Bearer ${token}`
        }

      }

      try {

        const response = await fetch(api, option);

        const data = await response.json();

        console.log(data);

        if (response.ok === true) {

          setValue({ ...allValues, profileDetails: data.profile_details });
          setLoading(false);

        }

      }
      catch (error) {
        console.log(error);
      }

    }

    fetchApi();

  }, [])

  const profileDetail = allValues.profileDetails;

  const profileDetails = () => (

    <div className='profile-cont bg-primary-subtle p-3 rounded-4 d-flex gap-4 align-items-center'>
      {
        loading ?

          <div className='d-flex w-100 justify-content-center align-items-center' style={{ height: '75vh' }}>
            <div className='loader'></div>
          </div>
          :

          <>

            <div >

              <img src={profileDetail.profile_image_url} width='100px' />

            </div>

            <div>

              <h4><b>{profileDetail.name}</b></h4>
              <p>{profileDetail.short_bio}</p>

            </div>
          </>
      }
    </div>

  )

  const renderEmpTypes = () => (
    <>

      <h5 className="filter-heading mt-4 mb-4 fw-bold">Type of Employment</h5>

      <ul className="filters-list">{

        empTypesList.map((e) => (

          <li className='emp-cont' key={e.empTypesListId} >

            <input type="checkbox" value={e.empTypesListId} id='e.empTypesListId' />
            <label htmlFor="e.empTypesListId" style={{ marginTop: "7px" }} >{e.label}</label>

          </li>

        ))


      }</ul>

    </>
  )
  const rendersalaryRanges = () => (
    <>

      <h5 className="filter-heading mt-4 mb-4 fw-bold">Salary Range</h5>

      <ul className="filters-list">{

        salaryRangesList.map((e) => (

          <li className='emp-cont' key={e.salaryRangeId} >

            <input type="radio" value={e.salaryRangeId} id='e.salaryRangeId' />
            <label htmlFor="e.salaryRangeId" style={{ marginTop: "7px" }} >{e.label}</label>

          </li>

        ))


      }</ul>

    </>
  )


  return (
    <>
      <div
        className='sticky-lg-top p-2 '
        style={{
          top: '100px',
          overflowY: 'scroll',
          height: ' calc(100vh - 100px)', // Allows it to grow up to 90vh but not beyond
        }}
      >
        {profileDetails()}
        <hr />
        {renderEmpTypes()}
        <hr />
        {rendersalaryRanges()}
      </div>



    </>

  )

}

export default FilterSection;
