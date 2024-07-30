import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Products from './Components/Products/Products.jsx'
import Categories from './Components/Categories/Categories.jsx'
import Brands from './Components/Brands/Brands.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'

let routers = createBrowserRouter([
  {path: '' , element: <Layout/>, children :[
    {path:'home' , element:<Home/>},
    {path:'cart' , element:<Cart/>},
    {path:'products' , element:<Products/>},
    {path:'categories' , element:<Categories/>},
    {path:'brands' , element:<Brands/>},
    {path:'login' , element:<Login/>},
    {index:true , element:<Register/>},
    {path:'*' , element:<Notfound/>},
  ]}
])

function App() {

  return (
    <>
    <RouterProvider router={routers}>
    </RouterProvider>
    </>
  )
}

export default App;
