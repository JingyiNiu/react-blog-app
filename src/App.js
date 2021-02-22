import React from 'react';
import { Router } from "@reach/router";

import Nav from './components/nav/nav.component';
import Footer from './components/footer/footer.component';

import Homepage from './pages/homepage/homepage.jsx';
import Blog from './pages/blog/blog.jsx';
import Post from './components/post/post.component.jsx'
import NewPost from './components/new-post/new-post.component'

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Nav />
      <div className="page-container">
        <Router>
          <Homepage path="/" />
          <Blog path="blog" />
          <Post path="post/:id" />
          <NewPost path="newpost" />
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
