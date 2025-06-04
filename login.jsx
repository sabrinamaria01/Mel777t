import React, { useState } from 'react';
import './Login.css';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('mel777User', username);
      onLogin(username);
    }
  };

  return (
    <div className="login-container">
      <h2>Bem-vindo à Mel777</h2>
      <input
        type="text"
        placeholder="Digite seu nome de usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
