import React, { useState } from 'react';
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

import { auth } from './firebase';

import './App.css';

function App() {

  const [user, setUser] = useState(false);

  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("User signed in with UID: ");
      console.log(user.uid);
      setUser(user);
    } else {
      console.log("No user signed in");
    }
  });

  return (
    <div className="app-container">
      <Nav user={user} />
      <div className="page-container">
        <Router>
          <Homepage path="/" />
          <Blog path="blog" user={user} />
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
