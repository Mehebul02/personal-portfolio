import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../pages/Home/Home/Home";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
      children:[
        {
            path:'/',
            element:<Home/>
        }
      ]
    },
  ]);

  export default router