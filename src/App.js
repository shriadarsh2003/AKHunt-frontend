import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Menu from "./components/nav/Menu"
import Home from "./pages/Home"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Dashboard from "./pages/user/Dashboard"
import Que1 from "./pages/user/Que1.js";
import Que2 from "./pages/user/Que2.js";
import Que3 from "./pages/user/Que3.js";
import Que4 from "./pages/user/Que4.js";
import Que5 from "./pages/user/Que5.js";
import Que6 from "./pages/user/Que6.js";
import Que7 from "./pages/user/Que7.js";
import Que8 from "./pages/user/Que8.js";
import Score from "./pages/user/Score.js";
import Leaderboard from "./pages/user/Leaderboard"
import PrivateRoute from "./components/routes/PrivateRoute"
import PageNotFoundGIF from "./images/pgnf.gif";

const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: "90vh"}}>
      {/* <h3> Error 404!! Page Not Found </h3> */}
      <img src={PageNotFoundGIF} alt="PageNotFound" style={{height: "100%", width:"80%"}}/>
    </div>
  )
}
export default function App(){
  return (
    <BrowserRouter>
    <Menu />  
    <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
          <Route path="que1" element={<Que1 />} />
          <Route path="que2" element={<Que2 />} />
          <Route path="que3" element={<Que3 />} />
          <Route path="que4" element={<Que4 />} />
          <Route path="que5" element={<Que5 />} />
          <Route path="que6" element={<Que6 />} />
          <Route path="que7" element={<Que7 />} />
          <Route path="que8" element={<Que8 />} />  
          <Route path="user" element={<Score />} />
          <Route path="admin" element={<Leaderboard />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}