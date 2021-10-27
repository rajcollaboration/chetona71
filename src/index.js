import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextPrivider } from './context/Context';
ReactDOM.render(
  <React.StrictMode>
    <ContextPrivider>
    <App />
    </ContextPrivider>
  </React.StrictMode>,
  document.getElementById('root')
);


