import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

 const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  })

  // const [confirmPassword, setConfirmPassword] = useState("")

  const handleChange = (e)=>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const res = await axios.post("/auth/register", inputs)
      console.log(res);
    }catch(err){
      console.log(err)
    }
  };
  // const confirmPassord = (e) =>{
  //   if(inputs.password !== confirmPassword){
  //      console.error("Password don't match!");
  //      return;
  //   }
  //   if(inputs.password === confirmPassword){
  //     return console.log("Password Match!");
  //   }
  // }


  
  return (
    <div className='register'>
      <h1>Register</h1>
      <form action="">
        {/* <label htmlFor="username">Username</label> */}
        <input type="text" placeholder='username' name='username' onChange={handleChange} />
        <input type="email" placeholder='email' name='email' onChange={handleChange}  />
        <input type="password" placeholder='password' name='password' onChange={handleChange} />
        {/* <input type="password" placeholder='ConfirmPassword' name='confirmPassword'  onChange={setConfirmPassword} id="password" /> */}
        <button className='registerConfirm' onClick={handleSubmit}>Create account</button>
        <p>This is an Error!</p>
        <span>Do you Alreay have an account? <NavLink className='link' to='/login'>Login</NavLink></span>
      </form>
    </div>
  )
}

export default Register;