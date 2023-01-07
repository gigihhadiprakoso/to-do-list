import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Activities from './pages/Activities';
import DetailActivity from './pages/DetailActivity';

import {
  BrowserRouter as ParentRouter,
  Routes,
  Route
} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ParentRouter>
      <Routes>
        <Route 
          path="/detail/:id" 
          element={<DetailActivity />}
        />
        <Route 
          path="/" 
          element={<Activities />} 
        />
      </Routes>
    </ParentRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
