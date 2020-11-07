import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'fontsource-roboto';
import TimeTable from './components/dashboard';

ReactDOM.render(
  <React.StrictMode>
    <TimeTable />
  </React.StrictMode>,
  document.getElementById('root')
);
