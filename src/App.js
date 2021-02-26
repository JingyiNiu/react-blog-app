import React from 'react';
import { Router } from "@reach/router";

import Nav from './components/nav/nav.component';
import Footer from './components/footer/footer.component';

import Homepage from './pages/homepage/homepage';
import Blog from './pages/blog/blog';
import Post from './components/post/post.component';
import NewPost from './components/new-post/new-post.component';
import UpdatePost from './components/update-post/update-post,component';
import Register from './pages/register/register';
import SignIn from './pages/sign-in/sign-in';

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
          <UpdatePost path="update-post/:id" />
          <Register path="register" />
          <SignIn path="signin" />
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
