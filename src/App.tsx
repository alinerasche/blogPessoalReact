import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import Temas from "./components/temas/listatema/ListaTema";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import "./App.css";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";
import CadastroPost from "./components/postagens/cadastroPost/CadastroPost";
import DeletarTema from "./components/temas/listatema/deletarTema/DeletarTema";
import CadastroTema from "./components/temas/listatema/cadastroTema/CadastroTema";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          {/* // Antigo Switch */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/temas" element={<Temas />} />
          <Route path="/posts" element={<ListaPostagem />} />
          <Route path="/forumularioPostagem" element={<CadastroPost />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;