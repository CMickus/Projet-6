import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header';
import Main from './components/main'
import Footer from './components/footer'

export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header/>
    <Main/>
    <Footer/>
  </React.StrictMode>
);

export default root