import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Footerr from './components/Footerr'
import Navbarr from './components/Navbarr'
import Home from './pages/Home'
import ROUTER from './router/router'
const routes = createBrowserRouter(ROUTER)

function App() {

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}
export default App
