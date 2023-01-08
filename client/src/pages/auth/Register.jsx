import React from 'react';
import { NavLink } from 'react-router-dom';

 const Register = () => {
  return (
    <div className='register'>
      <h1>Register</h1>
      <form action="">
        {/* <label htmlFor="username">Username</label> */}
        <input type="text" placeholder='username' name='username' id="username" />
        <input type="email" placeholder='email' name='username' id="username" />
        <input type="password" placeholder='password' id="password" />
        <input type="password" placeholder='Confirm Password' id="password" />
        <button>Create account</button>
        <p>This is an Error!</p>
        <span>Do you Alreay have an account? <NavLink className='link' to='/login'>Login</NavLink></span>
      </form>
    </div>
  )
}

export default Register;