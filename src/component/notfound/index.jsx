import { useNavigate } from 'react-router-dom';
import './index.css'
useNavigate

const NotFound = ()=>{

  const navigate =  useNavigate();

  alert("Please try correct url");

  const retryPage = ()=>{

    navigate("/");


  }

  return (
  
    <div className='not-found-cont'>

      <button onClick={retryPage}>Retry</button>

    </div>

  )


}

export default NotFound;
