import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import { StoreProvider } from './Components/store';
// import UseImperativeHandle from './Components/useImperativeHandle';
import App1 from './App1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App1 />
    </BrowserRouter>
  </React.StrictMode>
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
