import ReactDom from 'react-dom/client';
import App from './App.jsx';
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from 'react'
import './index.css'





const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>,
            },

            {
                path: "about",
                element: <About/>,
            },

            {
                path: "contact",
                element: <Contact/>,
            },

        ]
    }
])

ReactDom.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
       )