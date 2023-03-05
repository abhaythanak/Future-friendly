
import './App.css';
import {NavBar,Home, Portfolio} from './Components';
import AboutMe from './Components/AboutMe';
import Companies from './Components/Companies';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Skills from './Components/Skills';


function App() {
  return (
    <div className="App">
      {/* NavBar */}
      <NavBar/>
      {/* Home */}
      <Home/>
      {/* About Me */}
      <AboutMe/>
      {/* Skills */}
      <Skills/>
      {/* Portfolio */}
      <Portfolio/>

      {/* Companies */}
      <Companies/>
      {/* Contact Us */}
      <ContactUs/>

      <Footer/>
    </div>
  );
}

export default App;
