import './App.css'
// import {Button} from './components/ui/button'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from './MainLayout';
import Login from './auth/Login';
import Signup from './auth/Signup';
import ForgetPassword from './auth/ForgetPassword';
import ResetPassword from './auth/ResetPassword';
import VerifyEmail from './auth/VerifyEmail';
// import { Children } from 'react';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // children: [
    //   {
    //     path:"/login"
    //   }
    // ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/forgot-password",
    element: <ForgetPassword />
  }
  ,
  {
    path: "/reset-password",
    element: <ResetPassword />
  }
  ,
  {
    path: "/verify-email",
    element: <VerifyEmail />
  }
])
function App() {
  return (
    <>
      {/* <Button className='bg-orange hover:bg-hoverOrange'>Lets build food app, Katyayini</Button> */}
      {/* <Login/>  */}
      <RouterProvider router={appRouter}>

      </RouterProvider>
    </>
  )
}

export default App
