import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Error from './components/Error';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import './App.css';
import About from './Nav-components/About';


function App() {
  return (
    <>
    <Header/>
    <Body />
    <Footer />
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error/>,
  },
  {
    path:"/about",
    element:<About/>,
  },
  {
    path:"/Error",
    element:<Error/>,
  },
 
])

export default App;

