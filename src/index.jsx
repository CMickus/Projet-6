import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
/*
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Logement from './pages/logements';
import Apropos from './pages/a-propos'*/ 

export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />    
    </BrowserRouter>
  </React.StrictMode>
);

export default root