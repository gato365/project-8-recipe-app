import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

function App() {
  return (

    <div>
         <Router>
     <div className="container">
          <Header />
          <h1>App</h1>
          {/* <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes> */}
          <HomePage />
        </div>
        </Router> 
        <ToastContainer />
    </div>
   


  );
}

export default App;
