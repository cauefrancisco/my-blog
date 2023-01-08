import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        {/* <label htmlFor="username">Username</label> */}
        <input type="text" placeholder='username' name='username' id="username" />
        <input type="password" placeholder='password' id="password" />
        <button>Enter</button>
        <p>This is an Error!</p>
        <span>Don't have an account? <NavLink className='link' to='/register'>Create one</NavLink></span>
      </form>
    </div>
  )
}

export default Login;