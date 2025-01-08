
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Parent from './Components/Parent/Parent'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Ux from './Components/Ux/Ux';
import Error from './Components/Error/Error';

function App() {

  let router = createBrowserRouter(
    [
      {path:"", element:<Layout></Layout>, children:[
        {index:true,element:<Home/>},
        {path:'about',element:<About/> ,children:[
          {index:true,element:<Gallery></Gallery>},
          {path:'ux',element:<Ux></Ux>}
        ]},
        {path:'parent',element:<Parent/>},
        {path:"*" ,element:<Error/>}
      ]
    }]
  )
  return (
    <>
  <RouterProvider router={router}/>
    </>
  )
}

export default App
