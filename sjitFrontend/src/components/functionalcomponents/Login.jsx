
import "../css//form.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
        const [email, setEmail] = useState("");
        const [password, setPass] = useState("");
        const navigate = useNavigate()
        const handleLogin = async (event) => {
            event.preventDefault();
            const req = await axios.post("https://mern-5ons.onrender.com/login",
                {
                    email: email,
                    password: password
                });

            const message = req.data.message
            const islogin = req.data.isLogin
            if (islogin) {
                console.log(islogin, message)
                alert(message)
                navigate('/')
            }
            else {
                console.log(islogin, message)
                alert(message)
            }

        }
        return (
            <div>
                <div class="login-edit">
                    <h1>Login Page</h1>
                    <form onSubmit={handleLogin}>
                        <input type="email" id="email" placeholder="Email id" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <br />
                        <input type="password" id="password" placeholder="Password" value={password} onChange={e => setPass(e.target.value)} />
                        <br />
                        <button type="submit">Login</button>
                    </form>
                </div>

            </div>
        )
    }
   
export default Login;

