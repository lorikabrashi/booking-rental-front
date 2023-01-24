import Home from "../pages/Home"
import Login from "../pages/Login"
import NotFound from "../pages/NotFound"
import Register from "../pages/Register"
import ForgotPassword from '../pages/ForgotPassword'
import Profile from '../pages/Profile'
const routesData = [
  {
    path: '/',
    element: <Home />,

  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routesData