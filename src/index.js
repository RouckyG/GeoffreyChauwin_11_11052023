import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Location from './pages/Location';
import About from './pages/About';
import Error from './pages/Error';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Header/>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/location/:id" element={<Location />} />
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/*" element={<Error />}/>
          </Routes>
        </main>
        <Footer/>
    </Router>
  </React.StrictMode>
);