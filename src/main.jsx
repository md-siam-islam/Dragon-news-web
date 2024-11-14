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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
