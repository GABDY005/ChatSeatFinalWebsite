import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    

    const validEmail = "trialsite@chatseat.com";
    const validPassword = "ChatSeat";

    if (email === validEmail && password === validPassword) {
        setError("");
        navigate("/Dashboard");
    } else {
        setError("Invalid email or password");
    }
};

    return(
        <>
        <div className="login-page">
            <div className="login-box">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Username or Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter Email" required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter Password" required
                    value={password} onChange={(e) => setPassword(e.target.value)} />

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit">Submit</button>                
                </form>

                <div className="text-center mt-3">
                    <p> Don't have an account? {""}
                        <a href="/signup" style={{color:"003366", fontWeight:"bold"}}> SignUp </a>
                    </p>
                </div>

                <a href="/" className="back-link">Back</a>
            </div>
        </div>
        </>
    );
    
}

export default Login;