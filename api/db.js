import mysql from 'mysql';

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"632402$Cau",
  database:"blog"
});

db.connect((err)=>{
  if(err){
    throw err;
  } else{
    console.log('connected');
  }
})