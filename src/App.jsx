import { Route,Routes } from "react-router-dom";
import Home from "./component/home";
import Login from "./component/login";
import Job from "./component/job";
import NotFound from "./component/notfound";
import ProtectedRoute from "./component/protectedRoute";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = ()=>{

  return (

    <Routes>

      <Route path="/" element = {<ProtectedRoute Component = {Home} />} ></Route>

      <Route path="/login" element = {<Login/>} ></Route>

      <Route path="/job" element = {<ProtectedRoute Component = {Job} />} ></Route>

      <Route path="/*" element = {<NotFound/>} ></Route>



    </Routes>
  
  
  )


}

export default App
