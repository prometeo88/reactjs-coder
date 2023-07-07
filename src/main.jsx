import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_txm9z1GpkyxIObR3d2M5OTbe6Ej0474",
  authDomain: "reactjs-coder-93a9b.firebaseapp.com",
  projectId: "reactjs-coder-93a9b",
  storageBucket: "reactjs-coder-93a9b.appspot.com",
  messagingSenderId: "808864713172",
  appId: "1:808864713172:web:5d34aa047ab9743cc5ae41"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
