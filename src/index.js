import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './scss/style.scss';
import App from './components/app/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>

);


