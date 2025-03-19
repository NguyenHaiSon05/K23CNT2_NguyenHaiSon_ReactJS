import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NhsApp from './NhsApp';

const NhsRoot = ReactDOM.createRoot(document.getElementById('NhsRoot'));
NhsRoot.render(
  <React.StrictMode>
     <NhsApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
