import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ForgotPassword from '../pages/ForgotPassword'
import Profile from '../pages/Profile'
import VerifyAccount from '../pages/VerifyAccount'
import ResetPassword from '../pages/ForgotPassword/ResetPassword'
const routesData = {
  publicRoutes: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: '/reset-password',
      element: <ResetPassword />,
    },
    {
      path: '/verify-account',
      element: <VerifyAccount />,
    },
  ],
  privateRoutes: [
    {
      path: '/profile',
      element: <Profile />,
    },
  ],
}

export default routesData
