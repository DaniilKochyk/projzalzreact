import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from './Components/Navbar';
import  Footer  from './Components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {Home} from './Home';
import {Pr} from './Pr';
import {About} from './About';

function App() {
  return (
   <>
   <Router>
  <NavBar />
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/pr" element={<Pr/>} />
    <Route path="/about" element={<About/>} />
  </Routes>
  </Router>
  <Footer/>
   </>

  );
}


export default App;
