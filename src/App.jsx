import React, { useState } from 'react';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <div>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Bem-vindo(a), {user}!</h1>
          <p>Seu saldo fictício: R$ 1.000,00</p>
          <button onClick={() => setUser(null)}>Sair</button>
        </div>
      )}
    </div>
  );
}

export default App;
