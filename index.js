import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.js';
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA2cVZfUWeotoprD0SNIDiQBrOikdITDZQ",
    authDomain: "online-library-36cd5.firebaseapp.com",
    projectId: "online-library-36cd5",
    storageBucket: "online-library-36cd5.appspot.com",
    messagingSenderId: "321158010554",
    appId: "1:321158010554:web:66984ec1e443f61c4dd483",
    measurementId: "G-4WW89T5KLZ"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);