import React, {useState} from 'react';
import axios from 'axios';
import { Link, useNavigate, } from 'react-router-dom';

export const SignIn = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const newUser = {
        "email" : email,
        "password" : password
    }
console.log(newUser)

    const handleSignIn = () => {
        axios.post(`http://localhost:8080/user`, newUser)
        console.log(newUser)
        navigate(`/upload`)
    }

  return (
    <div>
        <form className='m-5'>
            <h1>SignIn Using Email And Password</h1>
            <div className="form-group w-50">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group w-50">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
                <Link to={`/upload`} type="submit" onClick={handleSignIn} className="btn btn-primary">SignIn</Link>
      </form>
    </div>
  )
}