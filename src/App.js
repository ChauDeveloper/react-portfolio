import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './components/About';

function App() {
  return (
    <div className="App"> 
      <h1 id='title'>Chau Nguyen</h1>

      
      <div>
      <Navbar />
      <About />
      </div>

      <Footer />
    </div>
  );
}

export default App;
