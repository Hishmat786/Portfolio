import './App.css';

import About from './component/About';
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
      
      <SocialLinks/>
      
    </>
  );
}

export default App;
