
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';


import Home from './pages/Home';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Single from './Pages/Single';
import Write from './Pages/Write';



const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )

}

const router = createBrowserRouter(
  [

    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/single/:id',
          element: <Single/>
        },
        {
          path: '/write',
          element: <Write/>
        },
      ]
    },
    {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      
    ]
)



const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App