import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import Users from './pages/Users';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-white">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><span className="instabook-logo"><span className="insta">Ins<span className="short-letter">t</span>a</span><span className="book">book</span></span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto">
              <Link role="button" to="/users" className="btn btn-outline-primary ms-0 ms-sm-2 mt-2 mt-sm-0">Users 🔍</Link>
              <Link role="button" to="/books" className="btn btn-outline-primary ms-0 ms-sm-2 mt-2 mt-sm-0">Books 🔍</Link>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/books" element={<Books />}/>
        <Route path="/users" element={<Users />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
