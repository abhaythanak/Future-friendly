import Home from "./pages/Home";
 import Login from "./pages/Login";
 import Register from "./pages/Register";
import "./App.scss"
import { BrowserRouter,Routes,Route } from "react-router-dom"



function App() {


  return (
  <BrowserRouter>
  <Routes>
    <Route path="/"/>
    <Route index element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
