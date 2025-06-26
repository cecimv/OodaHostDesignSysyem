// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';

// 👇 Importa el componente raíz
import App from './App';

// 👇 Importa tu hoja con @tailwind base/components/utilities
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
