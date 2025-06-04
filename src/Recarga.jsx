// src/Recarga.jsx
import React, { useState } from 'react';

export default function Recarga({ saldo, setSaldo }) {
  const [valor, setValor] = useState('');

  const adicionarSaldo = () => {
    const v = parseFloat(valor);
    if (!isNaN(v) && v > 0) {
      setSaldo(saldo + v);
      setValor('');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Recarga de Saldo (FICTÍCIO)</h2>
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Valor da recarga"
        style={{ padding: 8, marginRight: 10 }}
      />
      <button onClick={adicionarSaldo} style={{ padding: 8, backgroundColor: '#27ae60', color: '#fff', border: 'none' }}>
        Adicionar
      </button>
      <p style={{ marginTop: 20 }}>💰 Saldo atual: <strong>R$ {saldo.toFixed(2)}</strong></p>
    </div>
  );
}
