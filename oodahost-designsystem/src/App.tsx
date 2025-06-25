// App.tsx
import React, { useState } from 'react';
import { ColorPalette, Color } from '@/components/ui/Colors/Colors';

const colors: Color[] = [
  { name: 'Rojo', value: '#FF0000' },
  { name: 'Verde', value: '#00FF00' },
  { name: 'Azul', value: '#0000FF' },
];

export const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorSelect = (color: Color) => {
    setSelectedColor(color.value);
    console.log('Color seleccionado:', color);
  };

  return (
    <div>
      <h1>Selector de colores</h1>
      <ColorPalette
        colors={colors}
        size="medium"
        shape="circle"
        showLabels={true}
        selectedColor={selectedColor}
        onColorSelect={handleColorSelect}
      />
      <div className="text-greencolor bg-neutralcolors-100 p-4 rounded-xl">
  ¡Colores personalizados funcionando! ✅
</div>
</div>
  );
};

export default App;