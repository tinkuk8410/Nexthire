import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css'; 
import { useState } from 'react';

const Login = () => {

  const token = Cookies.get("jwtToken");

  useEffect(()=>{

    if (token !== undefined) {
    
      navigate("/");
      
    }
   

  },[]);

  const [allValues,setValues] = useState({

    username : "",
    password : "",
    errorMsg : ""

  });

  const navigate = useNavigate();

  const onSubmitUserDetail = async (e)=> {

    e.preventDefault();

    const api = "https://apis.ccbp.in/login";

    const userDetails = {
      
      username : allValues.username,
      password : allValues.password

    }

    const options = {

      method : "post",
      body : JSON.stringify(userDetails)

    }


    try {

      const response = await fetch(api,options);

      const data = await response.json();

      console.log(response);
      
      Cookies.set("jwtToken",data.jwt_token)
      

      if( response.ok === true)
      {
        setValues({...allValues,errorMsg :""})

        navigate("/")
      }
      else{
        
        setValues({...allValues,errorMsg :data.error_msg})
      }
      

  
    } catch (error) {

      console.log(error);
      
      
    }


  }



  return (
    <section className="vh-100" style={{ width:'100%', backgroundColor: 'white' }}>

      <div className="container py-5 h-100">


          <div className="col col-xl-10">

            <div className="card" style={{ borderRadius: '2rem' }}>
              
              <div className="row g-0">

                {/* Left Image Section */}
                <div className="col-md-6 col-lg-5 d-none d-md-block">

                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid " style={{ borderRadius: '1rem 0 0 1rem' }} />
                
                </div>

                {/* Right Form Section */}
                <div className="col-md-6 col-lg-7 d-flex align-items-center">

                  <div className="card-body p-4 p-lg-5 text-black">

                    <form onSubmit={onSubmitUserDetail}>

                      {/* Logo Section */}
                      <div className="d-flex align-items-center mb-3 pb-1">

                        <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }} ></i>
                        <span className="h1 fw-bold mb-0">JOB SEEKER</span>

                      </div>

                      {/* Title */}
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }} > Yes, You can find your job with us!</h5>

                      {/* Usernmae Input */}
                      <div className="mb-4">

                        <input  onChange={(e)=>{ setValues({...allValues,username : e.target.value }) }} type="text" id="form2Example17" className=" input-field form-control " placeholder="Username"/>
                        
                      </div>

                      {/* Password Input */}
                      <div className="mb-4">

                        <input   onChange={(e)=>{ setValues({...allValues,password : e.target.value }) }} type="password" id="form2Example27" className="input-field form-control" placeholder="Password"/>

                      </div>

                      {/* Login Button */}
                      <div className="pt-1 mb-4">

                        <button type="submit" className="log-in" > Login </button>

                      </div>

                      <h5 className="text-danger">{allValues.errorMsg}</h5>

                    </form>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default Login;
