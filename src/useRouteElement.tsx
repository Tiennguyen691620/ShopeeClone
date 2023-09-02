import { useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <ProductList></ProductList>
    },
    {
      path: '/login',
      element: <RegisterLayout><Login></Login></RegisterLayout>
    },
    {
      path: 'register',
      element: <RegisterLayout><Register></Register></RegisterLayout>
    }
  ])
  return routeElements
}
