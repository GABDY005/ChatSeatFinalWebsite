import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./Signup.css";


function Signup() {
    const [form, setForm] = useState({
        firstName: "", 
        lastName: "",
        phoneNo: "",
        address: "",
        role: "",
        email: "",
        username: "",
        password:""
        
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.firstName || !form.lastName || !form.phoneNo || !form.Address || !form.Role || !form.email || !form.username || !form.password) {
            setError("Please fill all the field to signup!");
            return;
        } console.log("Form Submitted:", form);
        alert("You successfully created the account!");

        navigate("/login");
    } 



    return(
        <>
        <div className="signup-page">
            <div className="signup-box">
                <h2>
                    Create an Account
                </h2>

                <form onSubmit="{handleSubmit}">
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required />
                    </div>
                    
                        <label htmlFor="phoneNo">Phone Number</label>
                        <input type="tel" id="phoneNo" name="phoneNo" value={form.phoneNo} onChange={handleChange} required />
                    
                    
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" value={form.address} onChange={handleChange} required />
                    
                    
                        <label htmlFor="role">Role</label>
                        <select>
                        <input type="text" id="role" name="role" value={form.role} onChange={handleChange} required />
                        <option value="">Select Role</option>
                        <option value="Listener">Listener</option>
                        <option value="Coordinator">Coordinator</option>
                        </select>
                    
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" name="email" id="email" value={form.email} required />

                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" value={form.username} required />

                        <label htmlFor="password">Create Password:</label>
                        <input type="password" id="password" name="password" value={form.password} required />

                        <button type="submit">Signup</button>


                </form>

                {error && <div className="error-message">{error}</div>}

                <a href="/login" className="back-link"> Back</a>
            </div>
        </div>
        </>
    );
    
}

export default Signup;