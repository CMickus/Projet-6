import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <p>hello</p>
    <a href={`/A-propos`}>À propos</a>
    <a href={`/logements`}>Logements</a>
  </React.StrictMode>
);

export default root