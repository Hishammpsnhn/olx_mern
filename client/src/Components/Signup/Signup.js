import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { singup } from '../../Action/User';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { AuthContext } from '../../store/Context';



export default function Signup() {
  const initialState = { username: '', email: '', password: '', phone: '' }
  const [userData, setUserData] = useState(initialState)


  const navigate = useNavigate()
   const { user, setUser } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    singup(userData, (res) => {
      console.log(res)
      localStorage.setItem('profile', JSON.stringify(res))
      setUser(JSON.parse(localStorage.getItem('profile')))
      navigate('/')
    })
}

return (
  <div>
    <div className="signupParentDiv">
      <img width="200px" height="200px" src={Logo}></img>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">Username</label>
        <br />
        <input
          className="input"
          type="text"
          id="fname"
          name="name"
          value={userData.username}
          onChange={(e) => setUserData({ ...userData, username: (e.target.value) })}

        />
        <br />
        <label htmlFor="fname">Email</label>
        <br />
        <input
          className="input"
          type="email"
          id="fname"
          name="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: (e.target.value) })}
        />
        <br />
        <label htmlFor="lname">Phone</label>
        <br />
        <input
          className="input"
          type="number"
          id="lname"
          name="phone"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: (e.target.value) })}
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
          onChange={(e) => setUserData({ ...userData, password: (e.target.value) })}
        />
        <br />
        <br />
        <button>Signup</button>
      </form>

      <a onClick={() => navigate('/login')}>Login</a>
    </div>
  </div>
);
}
