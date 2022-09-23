import React, { useState } from 'react'
import axios from 'axios'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link, useNavigate, } from 'react-router-dom'
import { SignIn } from './SignIn'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = ('')
    const [userData, setUserData] = useState('')

    const navigate = useNavigate()          

    const handleLogin = () => {
        axios.get(`http://localhost:8080/user`).then(res => {
            setUserData(res.data)
        }).catch(err => alert(err))
        navigate("/signin")
    }

  return (
    <div>
        <form className='m-5'>
            <div className="form-group w-50">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group w-50">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}}  className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
                <button type="submit" onClick={handleLogin} className="btn btn-primary">Register</button>
                {/* <Link to={} type="submit" onClick={handleLogin} className="btn btn-primary">Register</Link> */}

        </form>
      
    </div>
  )
}

export default Login