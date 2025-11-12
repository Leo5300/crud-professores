import React, { useState } from "react";
import "./Cadastro.css";

function Cadastro({ contacts, setContacts }) {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    cpf: "",
    matricula: "",
    formacao: "",
    emailInstitucional: "",
    telefone: "",
    logradouro: "",
    numero: "",
    complemento: "",
    cidade: "",
    cep: "",
    uf: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { id: Date.now(), ...formData };
    setContacts([...contacts, newContact]);
    setFormData({
      nomeCompleto: "",
      cpf: "",
      matricula: "",
      formacao: "",
      emailInstitucional: "",
      telefone: "",
      logradouro: "",
      numero: "",
      complemento: "",
      cidade: "",
      cep: "",
      uf: "",
    });
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro de Professores</h2>
      <form onSubmit={handleSubmit}>

        {/* DADOS PESSOAIS */}
        <h3>Dados Pessoais</h3>
        <input
          type="text"
          name="nomeCompleto"
          placeholder="Nome Completo"
          value={formData.nomeCompleto}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={formData.cpf}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="matricula"
          placeholder="Matrícula ou Registro Funcional"
          value={formData.matricula}
          onChange={handleChange}
        />
        <select
          name="formacao"
          value={formData.formacao}
          onChange={handleChange}
        >
          <option value="">Selecione a Formação / Área</option>
          <option value="TI">Tecnologia da Informação</option>
          <option value="Engenharia">Engenharia</option>
          <option value="Administração">Administração</option>
          <option value="Educação">Educação</option>
          <option value="Outros">Outros</option>
        </select>

        {/* CONTATOS */}
        <h3>Contatos</h3>
        <input
          type="email"
          name="emailInstitucional"
          placeholder="Email Institucional"
          value={formData.emailInstitucional}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone Celular"
          value={formData.telefone}
          onChange={handleChange}
          required
        />

        {/* ENDEREÇO */}
        <h3>Endereço Residencial</h3>
        <input
          type="text"
          name="logradouro"
          placeholder="Logradouro"
          value={formData.logradouro}
          onChange={handleChange}
        />
        <input
          type="text"
          name="numero"
          placeholder="Número"
          value={formData.numero}
          onChange={handleChange}
        />
        <input
          type="text"
          name="complemento"
          placeholder="Complemento (Opcional)"
          value={formData.complemento}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          value={formData.cidade}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cep"
          placeholder="CEP"
          value={formData.cep}
          onChange={handleChange}
        />
        <select name="uf" value={formData.uf} onChange={handleChange}>
          <option value="">Selecione o Estado</option>
          <option value="SP">SP</option>
          <option value="RJ">RJ</option>
          <option value="MG">MG</option>
          <option value="PR">PR</option>
          <option value="RS">RS</option>
          <option value="SC">SC</option>
          <option value="BA">BA</option>
          <option value="PE">PE</option>
          <option value="CE">CE</option>
          <option value="GO">GO</option>
          <option value="DF">DF</option>
          {/* pode adicionar todos os estados aqui */}
        </select>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default Cadastro;
