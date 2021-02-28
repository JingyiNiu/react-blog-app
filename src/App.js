import React, { useState } from 'react';
import { Router } from "@reach/router";

import Nav from './components/nav/nav.component';
import Footer from './components/footer/footer.component';

import Homepage from './pages/homepage/homepage';
import Blog from './pages/blog/blog';
import Post from './pages/read-one-post/post.component';
import NewPost from './pages/new-post/new-post.component';
import UpdatePost from './pages/update-post/update-post.component';
import Register from './pages/register/register';
import SignIn from './pages/sign-in/sign-in';

import { auth } from './firebase';

import './App.css';

function App() {

  const [user, setUser] = useState(false);

  auth.onAuthStateChanged((user) => {
    if (user) {
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
          <Post path="post/:id" user={user} />
          <NewPost path="newpost" user={user} />
          <UpdatePost path="update-post/:id" user={user} />
          <Register path="register" />
          <SignIn path="signin" />
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
