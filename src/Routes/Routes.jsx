import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";
import MySkills from "../pages/Home/My_SKills/MySkills";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
      // children:[
      //   {
      //       path:'/',
      //       element:<Home/>
      //   },
      //   {
      //       // path:'/about',
      //       element:<About/>
      //   },
      //   {
      //       path:'/skills',
      //       element:<MySkills/>
      //   },
      //   {
      //       path:'/contact',
      //       element:<Contact/>
      //   }
      // ]
    },
  ]);

  export default router