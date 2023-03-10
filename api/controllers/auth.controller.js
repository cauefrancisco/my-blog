import bcrypt from 'bcryptjs';
import { db } from '../db.js';



export const register = (req, res) =>{
  

  //CHECK EXISTING USER
  const query = "SELECT * FROM users WHERE email = ? OR username = ? ";

  db.query(query, [req.body.email, req.body.name], (err, data)=>{
    if(err) return res.json(err);
    if(data.length) return res.status(409).json("User already exists!");

    //HASH the password and create a user

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    

    const q = "INSERT INTO users(`username`,`email`, `password`) VALUES (?)";
    const values = [
      req.body.username,
      req.body.email,
      hash,
    ]
    db.query(q, [values], (err, data) =>{
      if(err) return res.json(err);
      return res.status(200).json("user has been created.");
    });
  });
};

export const login = (req, res) =>{

};

export const logout = (req, res) =>{

}