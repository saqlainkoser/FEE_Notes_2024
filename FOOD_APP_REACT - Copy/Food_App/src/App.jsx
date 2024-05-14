import { useContext, useState } from 'react'
import Cart from './Components/Cart'

import './App.css'
import Main_page from './Components/Main_page'
import { CartContext } from './context/CartContext'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Main_page/></div>,
  },
  {
    path: "/Cart",
    element: <div><Cart/></div>,
  },
]);


function App() {
  const box = useContext(CartContext);
  // console.log(box);
  return (    
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
