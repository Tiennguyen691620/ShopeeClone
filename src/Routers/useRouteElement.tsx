import { useRoutes } from 'react-router-dom'
import ProductList from '../pages/ProductList'
import Login from '../pages/Login'
import Register from '../pages/Register'
import RegisterLayout from '../layouts/RegisterLayout'
import MainLayout from 'src/layouts/MainLayout'

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <ProductList></ProductList>
        </MainLayout>
      )
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login></Login>
        </RegisterLayout>
      )
    },
    {
      path: 'register',
      element: (
        <RegisterLayout>
          <Register></Register>
        </RegisterLayout>
      )
    }
  ])
  return routeElements
}
