// src/App.jsx
import React, { useState } from 'react';
import Login from './Login';
import Recarga from './Recarga';
import CacaNiquel from './CacaNiquel';

function App() {
  const [usuario, setUsuario] = useState(null);
  const [saldo, setSaldo] = useState(10);

  if (!usuario) {
    return <Login onLogin={setUsuario} />;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#f1c40f' }}>Mel777 - Teste 🐝</h1>
      <p style={{ textAlign: 'center' }}>👤 Usuário: <strong>{usuario}</strong></p>
      <Recarga saldo={saldo} setSaldo={setSaldo} />
      <hr style={{ margin: '40px 0' }} />
      <CacaNiquel saldo={saldo} setSaldo={setSaldo} />
    </div>
  );
}

export default App;
