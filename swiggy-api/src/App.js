import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Error from './components/Error';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import './App.css';
import About from './Nav-components/About';
import Contact from './components/Contact';
import RestaurentMenu from './components/RestaurentMenu';
import LogIn from './RegisterPage/LogIn';
import Logout from './RegisterPage/Logout';
// import { lazy } from 'react';
//
// loading in dynamic way 
//
// const Instamart = lazy(() => import("./components/Instamart"))
//upon on demand loading --> upon render -->suspend loading

function App() {
  return (
    
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
    

  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error/>,
    children : [            
      // all children nested insight the outlet
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurent/:id",
        element:<RestaurentMenu/>,
      },
      {
        path:"/login",
        element:<LogIn/>,
      },
      {
        path:"/logout",
        element:<Logout/>,
      },
    ]
  },
 
])

export default App;

