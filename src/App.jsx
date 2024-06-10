import { useState } from 'react'
import './common.css'
import {RouterProvider} from "react-router-dom";
import {routers} from "./app/routers.jsx";



function App() {


  return (
    <div>
            <RouterProvider router={routers} />

    </div>
  )
}

export default App
