import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Material UI font
import 'typeface-roboto';

// Initialize Firebase
import firebase from 'firebase/app';

var config = {
    apiKey: "AIzaSyBCea7X11JaNKlow-tBgrdOy8BdZthD4WM",
    authDomain: "insta-portal.firebaseapp.com",
    databaseURL: "https://insta-portal.firebaseio.com",
    projectId: "insta-portal",
    storageBucket: "",
    messagingSenderId: "931005771863"
};
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
