import React, { useState } from "react";
import "./Lista.css";

function Lista({ contacts, setContacts }) {
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({});

  const handleEdit = (contact) => {
    setEditingId(contact.id);
    setEditedData(contact);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (id) => {
    setContacts(
      contacts.map((c) => (c.id === id ? { ...editedData } : c))
    );
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div className="lista-container">
      <h2>Lista de Professores</h2>

      {contacts.length === 0 ? (
        <p>Nenhum cadastro encontrado!</p>
      ) : (
        <ul className="lista-contatos">
          {contacts.map((contact) => (
            <li key={contact.id} className="contact-item">
              {editingId === contact.id ? (
                <>
                  <input
                    type="text"
                    name="nomeCompleto"
                    value={editedData.nomeCompleto}
                    onChange={handleChange}
                    placeholder="Nome Completo"
                  />
                  <input
                    type="text"
                    name="cpf"
                    value={editedData.cpf}
                    onChange={handleChange}
                    placeholder="CPF"
                  />
                  <input
                    type="text"
                    name="telefone"
                    value={editedData.telefone}
                    onChange={handleChange}
                    placeholder="Telefone"
                  />
                  <input
                    type="email"
                    name="emailInstitucional"
                    value={editedData.emailInstitucional}
                    onChange={handleChange}
                    placeholder="Email Institucional"
                  />
                  <button onClick={() => handleSave(contact.id)}>Salvar</button>
                </>
              ) : (
                <>
                  <div className="dados">
                    <strong>{contact.nomeCompleto}</strong>  
                    <p><b>CPF:</b> {contact.cpf}</p>
                    <p><b>Matrícula:</b> {contact.matricula}</p>
                    <p><b>Formação:</b> {contact.formacao}</p>
                    <p><b>Email:</b> {contact.emailInstitucional}</p>
                    <p><b>Telefone:</b> {contact.telefone}</p>
                    <p><b>Endereço:</b> {contact.logradouro}, {contact.numero}, {contact.complemento && contact.complemento + ", "}
                      {contact.cidade} - {contact.uf}, {contact.cep}</p>
                  </div>

                  <div className="botoes">
                    <button onClick={() => handleEdit(contact)}>Editar</button>
                    <button onClick={() => handleDelete(contact.id)}>Excluir</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Lista;
