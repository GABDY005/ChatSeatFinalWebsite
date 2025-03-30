
//import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./Pages/Home";
import Help from "./Pages/Help";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Listener from "./Pages/Listener";
import Coordinators from "./Pages/Coordinators";
import Booking from "./Pages/Bookings";
import Chatroom from "./Pages/Chatroom";
import Feedback from "./Pages/Feedback";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Help />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/" element={<Listener />} />
        <Route path="/" element={<Coordinators />} />
        <Route path="/" element={<Booking />} />
        <Route path="/" element={<Chatroom />} />
        <Route path="/" element={<Feedback />} />
       

      </Routes>
    </Router>

  );
}

export default App;
