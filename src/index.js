import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


// React Router DOM
import { BrowserRouter } from 'react-router-dom';

// React Notifications
import { ReactNotifications } from 'react-notifications-component'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// React Notifications - CSS
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactNotifications />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
