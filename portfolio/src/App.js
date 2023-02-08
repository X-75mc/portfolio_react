import './styles/main.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import NavBar from './components/navBar/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Projects from './pages/Projects';
import React from 'react';
import Project from './pages/Project';
import Contacts from './pages/Contacts';
import ScrollToTop from './Utils/ScrollToTop';

function App() {
  return (
    <>
      <Router>
          <ScrollToTop/>
          <NavBar/>

          <Routes>
              
              <Route path='/' element = {<Home></Home>}/>
              <Route path='/projects' element = {<Projects/>}/>
              <Route path='/project' element = {<Project/>}/>
              <Route path='/contacts' element = {<Contacts/>}/>
          </Routes>

          <Footer/>
      </Router>
      
    </>
  );
}

export default App;
