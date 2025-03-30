import {Link} from "react-router-dom";
import "./Home.css";

function Home() {
    return(
        <>
        <div className="home-page">
            <nav className="navbar navbar-expand-lg navbar-light custom-navbar px-4">
                <div className="container-fluid">
                    <span className="navbar-brand d-flex align-items-center">
                        <img src=""/>
                    </span>
                    <div className="ms-auto">
                        <Link to="/Scheduling" className="btn btn-outline-secondary me-2">Schedule</Link>
                        <Link to="/Help" className="btn btn-outline-secondary me-2">Help</Link>
                        <Link to="/About" className="btn btn-outline-secondary me-2">About Us</Link>
                        <Link to="/Login" className="btn btn-outline-secondary me-2">Log In</Link>
                    
                    </div>
                </div>
                     
            </nav>

            <div className="hero-bar text-center">
                <h2>Connecting Communities One Conversation at a Time</h2>
                
            </div>

            <h4 className="heading">Welcome to Chat Seats - where every voice matters.</h4>

            <div className="container main-content">
                <h2 className="title"> Chat Seats - Attracting Chatters</h2>
           
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

                <div className="col-md-6 section">
                    <h4>As Listeners:</h4>
                    <ul>
                        <li>Make eye contact with individuals passing by.</li>
                        <li>Smile at anyone nearby</li>
                        <li>Be welcoming and friendly.</li>
                        <li>Say “Hi/Hello/Good morning” to those around.</li>
                        <li>Invite people to sit and grab a tea or coffee if available.</li>
                    </ul>
                </div>
            </div>
            <div className="text-center message">
                <p className="lead">
                    We hope you find this guide helpful. If you have suggestions to improve it, let us know!
                </p>
                    
                <p>
                    Thank you for taking the time to support your local community through chatting with its members.
                    We hope you will commit to more “Chat” time in the future.
                </p>
                <h5 className="closing"> Connecting Through Conversation</h5>

            </div>
        </div>
        <footer className="footer">
            

        </footer>

        </div>

        
        </>
    );
    
}

export default Home;