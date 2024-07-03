import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Install from './pages/Install';
import Examples from './pages/Examples';
import Documentation from './pages/Documentation';
import About from './pages/About';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/install" element={<Install />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/about" element={<About />} />
      </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
