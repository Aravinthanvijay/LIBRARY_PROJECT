import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../../../styles/pages/signup.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            console.log("event triggered");
            const req = await axios.post("http://localhost:3005/login", {
              email: email,
              password: password
            });
            alert(req.data.response);
            if (req.data.loginStatus) {
              navigate("/home");
            }
            else {
              navigate("/login");
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='container'>
            <form method="POST" onSubmit={handleLogin}>
                Email : <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required /><br />
                Password : <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} required /><br />
                <button type='submit'>Login</button>
            </form>
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
    )
}

export default Login;
