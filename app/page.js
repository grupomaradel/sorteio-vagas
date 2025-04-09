'use client';
import { useState } from 'react';

export default function Home() {
  const [nomes, setNomes] = useState('');
  const [vagas, setVagas] = useState('');
  const [resultado, setResultado] = useState([]);

  function sortear() {
    const listaNomes = nomes.split('\n').map(nome => nome.trim()).filter(nome => nome);
    const totalVagas = parseInt(vagas);

    if (!listaNomes.length || isNaN(totalVagas) || totalVagas <= 0) {
      alert('Preencha corretamente os campos.');
      return;
    }

    if (totalVagas > listaNomes.length) {
      alert('O número de vagas não pode ser maior que o número de moradores.');
      return;
    }

    const embaralhado = listaNomes.sort(() => Math.random() - 0.5);
    const selecionados = embaralhado.slice(0, totalVagas);
    setResultado(selecionados);
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 600, margin: 'auto' }}>
      <h1>Sorteio de Vagas de Garagem</h1>

      <label>Quantidade de vagas:</label>
      <input
        type="number"
        value={vagas}
        onChange={e => setVagas(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '1rem' }}
      />

      <label>Digite os nomes dos moradores (um por linha):</label>
      <textarea
        value={nomes}
        onChange={e => setNomes(e.target.value)}
        rows={6}
        style={{ display: 'block', width: '100%', marginBottom: '1rem' }}
      />

      <button onClick={sortear} style={{ padding: '0.5rem 1rem' }}>
        Sortear
      </button>

      {resultado.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Selecionados:</h2>
          <ol>
            {resultado.map((nome, index) => (
              <li key={index}>{nome}</li>
            ))}
          </ol>
        </div>
      )}
    </main>
  );
}
