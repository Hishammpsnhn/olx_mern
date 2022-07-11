import React, { useContext, useState } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { useNavigate } from 'react-router-dom'
import { login } from '../../Action/User';
import Loading from '../Loading/Loading';
import { AuthContext } from '../../store/Context';

function Login() {
  const [userData, setUserData] = useState({email:'',password:''})
  const [Isloading,setIsLoading] = useState(false)
  const { user, setUser } = useContext(AuthContext)

  const navigate = useNavigate()

  const handlelogin = (e) => {
    e.preventDefault()
    setIsLoading(true)
    login(userData,(res)=>{
      localStorage.setItem('profile', JSON.stringify(res))
      setUser(JSON.parse(localStorage.getItem('profile')))
      navigate('/')
      setIsLoading(false)
    })
    
  }

  return (
    <div>
      
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlelogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={userData.email}
            onChange={(e) => setUserData({...userData,email:(e.target.value)})}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={userData.password}
            onChange={(e) =>setUserData({...userData,password:(e.target.value)})}
          />
          <br />
          <br />
          <button> { Isloading ? <Loading/>:'Login'}</button>
        </form>

        <a onClick={() => navigate("/signup")}>Signup</a>

      </div>
    </div>
  );
}

export default Login;
