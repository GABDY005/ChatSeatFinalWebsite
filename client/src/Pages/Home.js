import {Link} from "react-router-dom";
import "./Home.css";

function Home() {
    return(
        <>
        <div className="home-page">
            <nav className="navbar navbar-expand-lg custom-navbar">
                <div className="container-fluid">
                    <span className="navbar-brand d-flex align-items-center">
                        <img src=""/>
                    </span>
                    <div className="ms-auto">
                        <Link to="/Scheduling" className="btn-btn-outline-primary mx-2">Schedule</Link>
                        <Link to="/Help" className="btn-btn-outline-primary mx-2">Help</Link>
                        <Link to="/About" className="btn-btn-outline-primary mx-2">About Us</Link>
                        <Link to="/Login" className="btn-btn-outline-primary mx-2">LogIn</Link>
                    
                    </div>
                </div>
                     
  
            </nav>

            <div className="row content-row">
                <div className="col-md-6 section">
                    <h4>Open Seating:</h4>
                    <ul>
                        <li>Set up the seating so it is easily accessible to others.</li>
                        <li>Place the banner to the side so the Listeners are visible.</li>
                        <li>Choose a location with high foot traffic and visibility.</li>
                        <li>Offer tea/coffee if possible</li>
                    </ul>
                </div>
            </div>

        </div>
        </>
    );
    
}

export default Home;