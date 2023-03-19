import './App.css';
import { useState } from 'react';
// import ClassComponents from './components/ClassComponents';
// import Props from './components/Props';
// import Map from "./components/Map"
// import States from './components/States';
import IfElse from './components/IfElse';
import EventHand from './components/EventHand';

function App() {
// const [name, setName] = useState("Nishant")

// const changeName = (value) => {
//   console.log(value)
//   setName(value)
// }

  return (
    
    <div className='app'> 
    {/* <Map/> */}
    {/* <States/> */}
    {/* <ClassComponents/> */}
    {/* <Props valueProps={name} changeName={changeName}/> */}
    {/* <IfElse/> */}
    <EventHand/>
    </div>
  );
}

export default App;
