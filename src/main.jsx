import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// import css
import './style.css';
import './mobile.css';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// import router
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)