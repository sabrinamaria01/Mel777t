// src/Login.jsx
import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim()) {
      onLogin(username);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Bem-vindo ao Mel777 - Versão Teste 🐝</h2>
      <input
        type="text"
        placeholder="Digite seu nome de usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>Entrar</button>
    </div>
  );
}

const styles = {
  container: { display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '100px' },
  title: { color: '#f1c40f', marginBottom: 20 },
  input: { padding: 10, width: '300px', marginBottom: 15 },
  button: { padding: 10, width: '150px', backgroundColor: '#f1c40f', border: 'none', cursor: 'pointer' }
};
