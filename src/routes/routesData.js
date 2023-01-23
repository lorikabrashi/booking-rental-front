import Home from "../pages/Home"
import Login from "../pages/Login"
import NotFound from "../pages/NotFound"
import Register from "../pages/Register"

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
    path: '*',
    element: <NotFound />
  }
]

export default routesData