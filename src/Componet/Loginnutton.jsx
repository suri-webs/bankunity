import { useState } from "react";
import "../style/Navbar.css";

export default function LoginComponent() {
    const [showLogin, setShowLogin] = useState(false);
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [saved, setSaved] = useState(false);

    const handleLogin = () => {
        if (!userId || !password) {
            alert("Please enter User ID and Password");
            setError("Please enter User ID and Password");
            return;
        }
        if (userId === "Suri6381" && password === "SURAJ#200420") {
            setError("Login successful!");
            alert("Login successful!");
            setUserId("")
            setPassword("")
        } else {
            setError("Invalid credentials");
            alert("Invalid credentials");
        }
    };

    const handleSaveId = () => {
        setSaved(!saved);
    };

    return (
        <>
            {/* Login Button */}
            <button className="Secnavbutton " onClick={() => setShowLogin(!showLogin)}>Login <i className="fa-solid fa-angle-down"></i>
            </button>

            {/* Login Card */}
            {showLogin && (
                <div className="login">
                    {error && <p className="error-message">{error}</p>}
                    <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="saveid" onClick={handleSaveId} >
                        <i className="fa-regular fa-thumbs-up"></i>
                        {saved ? "ID Saved" : "Save ID"}
                    </button>
                    <button className="loginbutton" type="submit" onClick={handleLogin}> Login </button>
                    <li>
                        <a href="#" className="forget">Forgot ID/Password?</a>
                        <a href="#" className="CreateAccount">Create Account</a>
                    </li>
                </div>
            )}
        </>
    );
}



