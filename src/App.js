
import './App.css';
import Logo from "./logo.avif";
import Banner from "./banner.webp";
import Kanha from "./kanha.webp";
import Navbar from './pages/navbar.js';
import Kanhacollection from './pages/kanhacollection.js';
import Wintercollection from './pages/wintercollection.js';
import Newarrivals from "./pages/newarrivals.js";
import Bestsellers from "./pages/bestsellers.js";
import Grandcollection from "./pages/grandcollection.js";
import Featuredcollection from "./pages/featuredcollection.js";
import Footer from "./pages/footer.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header'>
          Big Sale ! Enjoy flat 10% Off ! Use Coupon code BIGSALE10
        </div>
        <Navbar></Navbar>
        <div >
          <img className='banner' src={Banner}></img>
        </div>
        <div>
          <Kanhacollection></Kanhacollection>
        </div>
        <div>
          <Wintercollection></Wintercollection>
        </div>
        <div>
          <Newarrivals></Newarrivals>
        </div>
        <div>
          <Bestsellers></Bestsellers>
        </div>
        <div>
          <Grandcollection></Grandcollection>
        </div>
        <div>
          <Featuredcollection></Featuredcollection>
        </div>
        <div>
          <Footer></Footer>
        </div>


      </header>


    </div>
  );
}

export default App;
