import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
// import ExerciseDetails from "./Pages/ExerciseDetails"

// const router = ([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/ExerciseDetails",
//     element: <ExerciseDetails />
//   },
// ]);

// createBrowserRouter(router, {
//   future: {
//     v7_relativeSplatPath: true,
//   }
// });

const router = createBrowserRouter([{
  path: '/',
  element: <App></App>,
  //  loader: homeLoader 
},
  // {
  //   path: '/ExerciseDetails',
  //   element: <><Navbar /><ExerciseDetails /><Footer /></>,
  //   // loader: aboutLoader 

  // }, // Add more routes as needed 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navbar /> */}
    <RouterProvider router={router} future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_fetcherPersist: true,
    }} />
    {/* <Footer /> */}
  </StrictMode>,
)
