import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Provider, useSelector } from "react-redux";
import store from "../../../store/store";
import { Home, Login } from "@mui/icons-material";
import CadastroUsuario from "../../../paginas/cadastroUsuario/CadastroUsuario";
import ListaPostagem from "../../postagens/listapostagem/ListaPostagem";
import DeletarPostagem from "../../postagens/deletarPostagem/DeletarPostagem";
import CadastroPost from "../../postagens/cadastroPost/CadastroPost";
import Navbar from "../navbar/Navbar";
import CadastroTema from "../../temas/listatema/cadastroTema/CadastroTema";
import DeletarTema from "../../temas/listatema/deletarTema/DeletarTema";
import NotFoundPage from "../../../paginas/pageNotFound/PageNotFound";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
  
    var footerComponent;
  
    if (token != "") {
      footerComponent = (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            {/* // Antigo Switch */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/posts" element={<ListaPostagem />} />
            <Route path="/forumularioPostagem" element={<CadastroPost />} />
            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/formularioTema/:id" element={<CadastroTema />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>     
        <Footer />
        </Router>
    </Provider>
  );
}

return <>{footerComponent}</>;
}

export default Footer;