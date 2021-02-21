import React from 'react';
import { Router } from "@reach/router";

import Nav from './components/nav/nav.component';
import Footer from './components/footer/footer.component';

import Homepage from './pages/homepage/homepage.jsx';
import Blog from './pages/blog/blog.jsx';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Nav />
      <Router>
        <Homepage path="/" />
        <Blog path="blog" />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
