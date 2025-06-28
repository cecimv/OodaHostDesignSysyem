import React, { useState } from 'react';
import { Dropdown, type Variant } from '@/components/ui/Dropdown/Dropdown';

import {
  User,
  Settings,
  Bell,
  Mail,
  Search,
  ChevronDown,
  Home,
  Calendar,
  FileText,
} from 'lucide-react';

const DropdownExample: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [selectedUser2, setSelectedUser2] = useState<string>('');

  const basicOptions = [
    { value: 'option1', label: 'Opción 1' },
    { value: 'option2', label: 'Opción 2' },
    { value: 'option3', label: 'Opción 3' },
    { value: 'option4', label: 'Opción 4' },
  ];

  const optionsWithIcons = [
    { value: 'home', label: 'Inicio', icon: <Home size={16} /> },
    { value: 'calendar', label: 'Calendario', icon: <Calendar size={16} /> },
    { value: 'documents', label: 'Documentos', icon: <FileText size={16} /> },
    { value: 'settings', label: 'Configuración', icon: <Settings size={16} /> },
  ];

  const userOptions = [
    { value: 'user1', label: 'Juan Pérez' },
    { value: 'user2', label: 'María García' },
    { value: 'user3', label: 'Carlos López' },
    { value: 'user4', label: 'Ana Martínez' },
  ];

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Ejemplos de Dropdown</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">1. Solo Texto</h3>
          <Dropdown
            options={basicOptions}
            placeholder="Selecciona una opción"
            variant="onlyText"
            onSelect={(value) => {
              setSelectedValue(value);
              console.log('Seleccionado:', value);
            }}
          />
          <p className="text-sm text-gray-600">Seleccionado: {selectedValue}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">2. Icono Izquierdo</h3>
          <Dropdown
            options={optionsWithIcons}
            placeholder="Selecciona una página"
            variant="leftIcon"
            leftIcon={<Search size={16} />}
            onSelect={(value) => console.log('Página seleccionada:', value)}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">3. Icono Derecho</h3>
          <Dropdown
            options={basicOptions}
            placeholder="Filtrar opciones"
            variant="rightIcon"
            rightIcon={<ChevronDown size={16} />}
            onSelect={(value) => console.log('Filtro:', value)}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">4. Iconos Ambos Lados</h3>
          <Dropdown
            options={optionsWithIcons}
            placeholder="Navegación"
            variant="leftRightIcon"
            leftIcon={<Mail size={16} />}
            rightIcon={<Bell size={16} />}
            onSelect={(value) => console.log('Navegación:', value)}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">6. Deshabilitado</h3>
          <Dropdown
            options={userOptions}
            placeholder="No disponible"
            variant="avatarleft"
            name="Usuario Bloqueado"
            leftIcon={<User size={20} className="text-white" />}
            disabled={true}
            onSelect={(value) => console.log('No debería ejecutarse')}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">6.1 User tamaño Pequeño</h3>
          <Dropdown
            options={userOptions}
            placeholder="Seleccionar usuario"
            variant="avatarleft"
            size="sm" // <--- tamaño pequeño
            name="Juan Pérez"
            leftIcon={
              <img
                src="https://i.pravatar.cc/24?u=juanperez" // avatar más pequeño, 24x24 px
                alt="Juan Pérez"
              />
            }
            onSelect={(value1) => {
              setSelectedUser(value1);
              console.log('Usuario seleccionado:', value1);
            }}
          />
          <p className="mt-4">Usuario seleccionado: {selectedUser}</p>
        </div>

        <div className="p-8">
          <Dropdown
            options={userOptions}
            placeholder="Seleccionar usuario"
            variant="avatarleft"
            size="lg" // <--- tamaño grande
            name="Juan Pérez"
            leftIcon={
              <img
                src="https://i.pravatar.cc/64?u=juanperez" // avatar más grande (64x64 px)
                alt="Juan Pérez"
              />
            }
            onSelect={(value) => {
              setSelectedUser2(value);
              console.log('Usuario seleccionado:', value);
            }}
          />
          <p className="mt-4">Usuario seleccionado: {selectedUser2}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">7. Tamaño Pequeño</h3>
          <Dropdown
            options={basicOptions}
            placeholder="Pequeño"
            variant="leftIcon"
            leftIcon={<Settings size={14} />}
            size="sm"
            onSelect={(value) => console.log('Pequeño:', value)}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">8. Tamaño Grande</h3>
          <Dropdown
            options={basicOptions}
            placeholder="Grande"
            variant="rightIcon"
            rightIcon={<ChevronDown size={20} />}
            size="lg"
            onSelect={(value) => console.log('Grande:', value)}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">9. Preseleccionado</h3>
          <Dropdown
            options={basicOptions}
            placeholder="Selecciona"
            variant="onlyText"
            selected={basicOptions[1]}
            onSelect={(value) => console.log('Cambio a:', value)}
          />
        </div>
      </div>

      
    </div>
  );
};

export default DropdownExample;
