import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./login.css"

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async () => {
        console.log(`users=>`, user)
        try {
            const response = await axios.post('http://localhost:8000/api/v1/user/login', user);
            if (response.status === 200) {
                setUser({
                    email: "",
                    password: ""
                })
                navigate('/main');
            }
        } catch (error) {
            console.error('Login error', error);
        }
    }


    return (
        <div className='login--container'>
            <div className="col-sm-6 mx-auto border p-4 rounded shadow-sm">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input name="email" onChange={handleChange} type="email" className="form-control" placeholder="Enter Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input name="password" onChange={handleChange} type="password" className="form-control" placeholder="Enter Password" />
                </div>
                <div>
                    <button onClick={handleClick} className='btn btn-success'>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
