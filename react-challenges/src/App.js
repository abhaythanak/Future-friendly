/* eslint-disable no-undef */

import './App.css';
import React, { Suspense, useState } from 'react';
import App1 from './ReactTesting/App1';
// import ClassComponents from './components/ClassComponents';
// import Props from './components/Props';
// import Map from "./components/Map"
// import States from './components/States';
// import IfElse from './components/IfElse';
// import EventHand from './components/EventHand';
// import Api from './components/Api';
// import Debouncing from './components/Debouncing';
// import { UserData } from './context/GlobalContext';
// import Home from './components/Home';
// import Profile from './components/Profile';


// Lazy Loading 
// import Home1 from './lazyLoading/Home1';
// import Loader from './lazyLoading/Loader';
// const Home1 = React.lazy(()=> import("./lazyLoading/Home1"))



function App() {
// const [name, setName] = useState("Nishant")

// const changeName = (value) => {
//   console.log(value)
//   setName(value)
// }

//context
// const [name , setName] = useState("Abhay")

  return (
    
    <div className='app'> 
    {/* Lazy loading to improve loading time */}
    {/* <div>
      <Suspense fallback={<Loader />}>
      <Home1/>
      <Home1/>
      </Suspense>
    </div> */}

    {/* react--testing */}
      <App1/>

    {/* context hook to passs props */}
    {/* <UserData.Provider value={{name, setName}}>
      <Home/>
      <Profile/>
    </UserData.Provider> */}

    {/* normal use case */}

    {/* <Map/> */}
    {/* <States/> */}
    {/* <ClassComponents/> */}
    {/* <Props valueProps={name} changeName={changeName}/> */}
    {/* <IfElse/> */}
    {/* <EventHand/> */}
    {/* <Api/> */}
    {/* <Debouncing/> */}
    
    </div>
  );
}

export default App;
