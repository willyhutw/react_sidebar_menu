import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App.jsx';

import './stylesheets/vendor/bootstrap/bootstrap.min.css';
import './stylesheets/vendor/font-awesome/css/font-awesome.min.css';
import './stylesheets/style.scss';

render(
  <HashRouter hashType="noslash">
    <App />
  </HashRouter>,
  document.getElementById('app'),
);
