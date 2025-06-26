// Por ejemplo, en App.tsx o cualquier otro componente:

import React from 'react';
import "/src/index.css";
import { ButtonLightmode } from '@/components/ui/Button/Button-Lightmode'; // Ajusta la ruta correcta

export default function App() {
  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold bg-danger-500">Ejemplo de botón</h1>
      <ButtonLightmode
        size="md"
        variant="primaryLeftIcon"
        leftIcon={<span> </span>} // Puedes poner cualquier ícono o componente aquí
        onClick={() => alert('¡Botón presionado!')}
      >
        Presióname
      </ButtonLightmode>
    </div>
  );
}
