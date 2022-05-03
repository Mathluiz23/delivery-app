import React from 'react';
import ReactDOM, { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={ 
          <main style={{ padding: "1rem 0" }}>
            <h2>Expenses</h2>
          </main>
       } />
      <Route exact path="/" element={ <Navigate to="/login" /> } />     
    </Routes>
  </BrowserRouter>
  ,rootElement
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
