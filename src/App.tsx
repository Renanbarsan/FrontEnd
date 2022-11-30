import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './paginas/home/Home';
// import {Grid} from '@material-ui/core';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';


function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path = '/' element={<Login />}/>
      <Route path = '/Home' element={<Home />} />
      <Route path = '/cadastroUsuario' element={<CadastroUsuario/>}/>
      </Routes>

    <Footer />
  </Router>
);
}

export default App;
