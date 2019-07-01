import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import Avatar from './Avatar';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <switch>
       <Route path="/" exact component={Avatar} />
       <Route path="/about" component={About} />
       <Route path="/contact" component={Contact} />    
       </switch>
    </BrowserRouter>
  );
}

export default App;
