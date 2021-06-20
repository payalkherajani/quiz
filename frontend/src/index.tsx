import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';
import './App.css';
import { Provider } from './context/Context';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

