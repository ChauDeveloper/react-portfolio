import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App"> 
      <h1 id='title'>Chau Nguyen</h1>

      
      <div>
      <Navbar />
      {/* <About /> */}
      {/* <Portfolio /> */}
      {/* <Resume /> */}
      <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
