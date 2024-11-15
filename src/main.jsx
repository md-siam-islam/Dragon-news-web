import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Root/Roots.jsx';
import About from './Components/About.jsx';
import Categories from './Components/Categories/Categories.jsx';
import Authprovider from './Authprovider/Authprovider.jsx';
import Login from './Page/Login.jsx';
import Home from './Components/Home/Home.jsx';
import Signup from './Page/Signup.jsx';
import Newnews from './Page/Newnews.jsx';
import Privetrout from './Privetrout/Privetrout.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,

    children:[
      {
        path:"",
        element:<Navigate to={"/category/01"}></Navigate>
      },
      {
        path:"/category/:id",
        element:<Categories></Categories>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        
      },
      {
        path:"/about",
        element:<About></About>,
      },
      
    ]
    
  },
  {
    path:"/news/:id",
    element:<Privetrout><Newnews></Newnews></Privetrout>,
    loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path:"/home",
    element:<Home></Home>,
    children:[
      {
        path:"/home/login",
        element:<Login></Login>,
      },
      {
        path:"/home/signup",
        element:<Signup></Signup>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
 </Authprovider>
  </StrictMode>,
)
