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
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';

import CadastroPost from './components/postagens/cadastroPostagem/CadastroPost';

import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import ListaTema from './components/postagens/temas/listatema/ListaTema';
import CadastroTema from './components/postagens/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/postagens/temas/deletarTema/DeletarTema';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />}/>
      <Route path='/Home' element={<Home />} />
        <Route path='/cadastroUsuario' element={<CadastroUsuario />} />
        <Route path='/temas' element={<ListaTema />} />
        <Route path='/postagem' element={<ListaPostagem />} />
        <Route path="/formularioPostagem" element={<CadastroPost />} />
        <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
        <Route path="/formularioTema" element={<CadastroTema />} />
        <Route path="/formularioTema/:id" element={<CadastroTema />} />
        <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
        <Route path="/deletarTema/:id" element={<DeletarTema />} />


      </Routes>

      <Footer />
    </Router>
  );
}

export default App;