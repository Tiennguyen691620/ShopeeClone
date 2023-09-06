
import { ToastContainer } from 'react-toastify'
import useRouteElement from './Routers/useRouteElement'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const routeElement = useRouteElement()
  return (
    <div>
      {routeElement}
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
