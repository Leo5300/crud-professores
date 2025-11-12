import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Importação das páginas
import Login from "./pages/Login/Login.js";
import Lista from "./pages/Lista/Lista.js";
import Home from "./pages/Home/Home.js";
import Cadastro from "./pages/Cadastro/Cadastro.js";

// importação do NavBar (menu principal)
import Navbar from "./components/Navbar/Navbar.js";

function App() {
  // Estado global simples para login e contatos
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contacts, setContacts] = useState([]);

  // Função de login
  const handleLogin = (username, password) => {
    if (username === "admin" && password === "123") {
      setIsAuthenticated(true);
    } else {
      alert("Usuário ou Senha Inválidos!");
    }
  };

  // Função de Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {/* Renderização Condicional */}
      {isAuthenticated && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route
          path="/login"
          element={
            // Rota para a página de Login
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />

        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />

        <Route
          path="/cadastro"
          element={
            isAuthenticated ? (
              <Cadastro contacts={contacts} setContacts={setContacts} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/lista"
          element={
            isAuthenticated ? (
              <Lista contacts={contacts} setContacts={setContacts} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
export default App;