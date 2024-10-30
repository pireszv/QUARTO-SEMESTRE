import React, { useState } from 'react';
import './App.css';

function App() {
  const [ucs, setUcs] = useState(['UC1', 'UC2', 'UC3']);
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [perfil, setPerfil] = useState('');

  const adicionarUc = () => {
    const novaUc = prompt("Digite o nome da nova UC:");
    if (novaUc) {
      setUcs([...ucs, novaUc]);
    }
  };

  const moverUcParaCima = (index) => {
    if (index > 0) {
      const novaLista = [...ucs];
      [novaLista[index - 1], novaLista[index]] = [novaLista[index], novaLista[index - 1]];
      setUcs(novaLista);
    }
  };

  const moverUcParaBaixo = (index) => {
    if (index < ucs.length - 1) {
      const novaLista = [...ucs];
      [novaLista[index], novaLista[index + 1]] = [novaLista[index + 1], novaLista[index]];
      setUcs(novaLista);
    }
  };

  const removerUc = (indexToRemove) => {
    setUcs(ucs.filter((_, index) => index !== indexToRemove));
  };

  const validarCpf = () => {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
      alert("CPF inválido! Use o formato ddd.ddd.ddd-dd");
    }
  };

  const validarEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("E-mail inválido!");
    }
  };

  return (
    <div className="App">
      <h1>Lista de UCs</h1>
      <button onClick={adicionarUc}>Adicionar UC</button>
      <ul>
        {ucs.map((uc, index) => (
          <li key={index}>
            {uc}
            <button onClick={() => moverUcParaCima(index)}>↑</button>
            <button onClick={() => moverUcParaBaixo(index)}>↓</button>
            <button onClick={() => removerUc(index)}>Remover</button> {/* Botão de Remover UC */}
          </li>
        ))}
      </ul>

      <h2>Formulário</h2>
      <div>
        <label>CPF:</label>
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          onBlur={validarCpf}
          placeholder="ddd.ddd.ddd-dd"
        />
      </div>
      <div>
        <label>E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validarEmail}
        />
      </div>

      <h2>Perfil Pessoal</h2>
      <textarea
        placeholder="Descreva seu perfil..."
        value={perfil}
        onChange={(e) => setPerfil(e.target.value)}
      ></textarea>
    </div>
  );
}

export default App;
