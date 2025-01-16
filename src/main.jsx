import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogDetail from "./components/BlogDetail.jsx";
import Home from "./components/Home.jsx";
import Manage from "./components/Manage.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import Contact from "./components/Contact.jsx";
import PopUp from "./components/PopUp.jsx";

const router = createBrowserRouter([
  
    {
      path: "/",
      element: <App />,
    
    children: [
      {
        path: "/",
        element: <Home />,
      }, 

      {
        path: "/:id",
        element: <BlogDetail />,
      },   
       
      {
        path: "/blog",
        element: <Manage/>,
      },   
      {
        path: "/Home",
        element: <Home/>,
      },   
      {
        path: "/about",
        element: <About/>,
      },     
      {
        path: "/contact",
        element: <Contact/>,
      },   
      {
        path: "/create",
        element: <PopUp/>,
      },   
      {
        path: "/login",
        element: <Login/>,
      },   
     
      
  ],
},
]
  
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);