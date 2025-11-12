import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onLogout }) {
  return (
    <nav className="navbar">
      <h2>Agenda</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cadastro">Cadastrar</Link>
        </li>
        <li>
          <Link to="/lista">Listar Professores</Link>
        </li>
        <li>
          <button onClick={onLogout}>Sair</button>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;