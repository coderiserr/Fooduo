import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./comoment/Header.jsx";
import Body from "./comoment/Body.jsx";
import About from "./comoment/About.jsx";
import Contact from "./comoment/Contact.jsx";
import Error from "./comoment/Error.jsx";

import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import RestaurentMenu from "./comoment/RestaurentMenu.jsx";
import UseClass from "./comoment/UseClass.jsx";
import Fun from "./comoment/Fun.jsx"




const AppLayout= () => {
  
       return (
         <div className="app">
             <Header/>
             <Outlet/> 
           
           
            </div>
     
   )
  
  
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {path:"/",
        element:<Body/>
      },
      ,{
        path:"/about",
        element:<About/>
      },{
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/resturent/:resId",
        element:<RestaurentMenu/>
      }
    ],
    errorElement:<Error/>,
      
}])
   
   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(<RouterProvider router={appRouter}/>);
  
   