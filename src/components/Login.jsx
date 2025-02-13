import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../asset/logo-light.svg'
import './Login.css';

const BASE_URL = 'https://risapi.mrbiller.com.au/api';
const API_KEY='Vm94ZWwgcmFkaW9sb2d5';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onSubmitLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/Authentication/Login`,
                {
                    email, 
                    password,
                },
                {
                    headers: {
                        "RIS-API-KEY": API_KEY
                }
            }
                
            );
            // console.log("Response",response)
            const { token } = response.data.data;

            localStorage.setItem("authToken", token);
            navigate("/home");
        } catch (error) {
            console.error(error);
        }

    }

  return (
    <div className='container'>
        <div className='form-card'>
            <form onSubmit={onSubmitLogin}>
                <div className='logo'>
                <img src={Image} alt="logo"/>
                </div>
                <p>Sign In</p>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name='email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <Link to="/login" style={{color: "rgb(72, 202, 245)", fontWeight: 'bold', marginLeft: '10px'}}>Forgot Password</Link>
                <button type='submit'>Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default Login;