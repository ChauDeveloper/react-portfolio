import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      
      <Router>
      <Navbar />
      <Switch>
                <Route exact path="/" component={About} exact={true}/>
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/contact" component={Contact} />
                <Route component={About} />
              </Switch>
              </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
