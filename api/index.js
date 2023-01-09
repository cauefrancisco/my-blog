import express from 'express';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';
import usersRoutes from './routes/users.js';

const app = express();

app.use(express.json());

app.get("/teste", (req, res)=>{
  res.json("it Works");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, ()=>{
  console.log("connected bitch");
});