import React from 'react';
import home from './data/home.json';
import services from './data/services.json';

export default function App() {
  return (
    <div style={{fontFamily: 'Arial, sans-serif', padding: '20px'}}>
      <h1>{home.heroTitle}</h1>
      <p>{home.heroText}</p>
      <h2>Services</h2>
      <ul>
        {services.list.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  );
}