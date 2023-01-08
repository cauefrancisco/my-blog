import {
  createBrowserRouter,
  Outlet, RouterProvider
} from "react-router-dom";
import './App.scss';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import Home from './pages/Home.jsx';
import Article from './pages/Posts/Article.jsx';
import CreateArticle from './pages/Posts/CreateArticle.jsx';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
        
      },
      {
        path: "/post/:id",
        element: <Article />
      },
      {
        path: "/write",
        element: <CreateArticle />
      },
    ],
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
]);

const App = () => {
  return (
   <div className="app">
      <div className="container-blog">
        <RouterProvider router={router}/>
      </div>
   </div>
  );
}

export default App;
