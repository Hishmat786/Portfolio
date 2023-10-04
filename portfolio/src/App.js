import './App.css';

import About from './component/About';
import Experience from './component/Experience';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Portfolio from './component/Portfolio';
import SocialLinks from './component/SocialLinks';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      
      <SocialLinks/>
      
    </>
  );
}

export default App;
