import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Router from 'react-router/BrowserRouter';
import './index.css';
import './semantic-ui/semantic.min.css';



ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById('root')
);
