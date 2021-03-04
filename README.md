# React Blog App
it's a react app and I'm tring to build a fully functional blog web application so you can create, read, update and delete your posts. Finally I'm going to implement authentication. Stay tuned...😋

## Create React Project
create-react-app
> https://github.com/facebook/create-react-app
```
npm init react-app <my-app>
```

## Styling
ant design
> https://www.npmjs.com/package/antd
```
npm install antd
```
> https://ant.design/components/overview/

## Lodash
> https://lodash.com/docs/4.17.15
```
$ npm i --save lodash
```

## Router
reach router
> https://reach.tech/router/
```
npm install @reach/router
```


## Backend
Firebase
> https://firebase.google.com/docs
> https://www.npmjs.com/package/firebase
```
npm i firebase
```
add followings to index.html
```
<script src="https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.4/firebase-firestore.js"></script>
```
set up your own firebase.js file and import it before use
```
import firebase from "firebase";
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "### YOUR FIREBASE CONFIG FILE ###",
    authDomain: "### YOUR FIREBASE CONFIG FILE ###",
    databaseURL: "### YOUR FIREBASE CONFIG FILE ###",
    projectId: "### YOUR FIREBASE CONFIG FILE ###",
    storageBucket: "### YOUR FIREBASE CONFIG FILE ###",
    messagingSenderId: "### YOUR FIREBASE CONFIG FILE ###",
    appId: "### YOUR FIREBASE CONFIG FILE ###"
  };
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db;
```
