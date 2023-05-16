import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Lodgement from './pages/Lodgement';
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
            <Route path="/lodgement/:userId" element={<Lodgement />} />
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/*" element={<Error />}/>
          </Routes>
        </main>
        <Footer/>
    </Router>
  </React.StrictMode>
);