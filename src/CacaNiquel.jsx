// src/CacaNiquel.jsx
import React, { useState } from 'react';

const simbolos = ['🍒', '🍋', '🍇', '🔔', '⭐', '💎'];

export default function CacaNiquel({ saldo, setSaldo }) {
  const [rodada, setRodada] = useState(['❓', '❓', '❓']);
  const custo = 2;

  const jogar = () => {
    if (saldo < custo) {
      alert("Saldo insuficiente.");
      return;
    }

    const novaRodada = [
      simbolos[Math.floor(Math.random() * simbolos.length)],
      simbolos[Math.floor(Math.random() * simbolos.length)],
      simbolos[Math.floor(Math.random() * simbolos.length)],
    ];

    setRodada(novaRodada);
    setSaldo(s => s - custo);

    if (novaRodada[0] === novaRodada[1] && novaRodada[1] === novaRodada[2]) {
      setSaldo(s => s + 10);
      alert("🎉 Você ganhou R$10!");
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>🎰 Caça-Níqueis</h2>
      <div style={{ fontSize: 60 }}>{rodada.join(' ')}</div>
      <button onClick={jogar} style={{ marginTop: 20, padding: 10, backgroundColor: '#f39c12', border: 'none', color: '#fff' }}>
        Jogar (R$2)
      </button>
    </div>
  );
}
