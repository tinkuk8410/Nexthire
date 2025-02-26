import './index.css'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


import { Link } from 'react-router-dom';
import LogoutButton from '../uidesigns/logoutButton';


const Header = () => {

  const navigate = useNavigate();

  const removeCookies = () => {

    Cookies.remove("jwtToken")
    navigate("/login");

  }

  return (

    <>
      {/* for tablets and mobile */}

      <nav className='first-nav-cont'>

        <div className='d-flex justify-content-between align-items-center w-100 p-2'>

          <Link to="/" className='head-first-cont '>

            <img src="images/headerlogo.png" className='web-logo' />

          </Link>

          <div className='head-second-cont d-flex justify-content-between  p-2 w-50 '>

            <ul className='d-flex list-unstyled gap-5 '>

              <li>

                <Link to="/" className='a-style'>HOME</Link>

              </li>

              <li>

                <Link to="/job" className='a-style'>JOB</Link>

              </li>

            </ul>


          </div>


          <div className='head-third-cont'>


            <button className='btn btn-primary' onClick={removeCookies}>Logout</button>

          </div>

        </div>


      </nav>


      {/* for large device/laptop */}

      <nav className='second-nav-cont'>

        <Link to="/" className='head-first-cont '>

          <img src="images/headerlogo.png" className='web-logo' />

        </Link>

        <div className='d-flex justify-content-end align-items-center w-100 p-2'>


          <div className='head-second-cont d-flex justify-content-between p-2 w-25'>

            <ul className='d-flex list-unstyled gap-5 '>

              <li>

                <Link to="/" className='a-style text-dark'><strong>HOME</strong></Link>

              </li>

              <li>

                <Link to="/job" className='a-style text-dark'><strong>JOB</strong></Link>

              </li>

            </ul>

            <div className='head-third-cont'>
            <LogoutButton removeCookies={removeCookies}/>
          </div>


          </div>


          

        </div>

      </nav>

    </>




  )

}

export default Header;
