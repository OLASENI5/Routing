import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
