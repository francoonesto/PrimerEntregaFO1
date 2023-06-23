import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDBiMnNhPMicDYLhfJlADr-ruiiS0pipK4",
  authDomain: "francoonestopf.firebaseapp.com",
  projectId: "francoonestopf",
  storageBucket: "francoonestopf.appspot.com",
  messagingSenderId: "342754392321",
  appId: "1:342754392321:web:326f515a1563aae5494300"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
