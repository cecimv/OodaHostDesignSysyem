import React from 'react';
// Ya no necesitamos importar un archivo CSS Module

interface SidebarProps {
  title?: string;
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ title, children }) => {
  return (
    <aside
      className="
        w-64          /* Ancho fijo de la barra lateral (256px) */
        bg-gray-50    /* Color de fondo muy claro */
        p-5           /* Padding de 20px */
        shadow-lg     /* Sombra sutil a la derecha */
        h-screen      /* Ocupa toda la altura de la ventana */
        sticky top-0 left-0 /* Se mantiene en su lugar al hacer scroll */
        flex flex-col /* Para organizar el título y la navegación */
        text-gray-800 /* Color de texto base */
        z-50          /* Asegura que esté por encima de algunos elementos */
      "
    >
      {title && (
        <h2 className="text-2xl font-semibold mb-5 text-black">
          {title}
        </h2>
      )}
      <nav className="list-none p-0 m-0 flex-grow">
        {/*
          Los 'children' (enlaces) deben tener sus propias clases de Tailwind
          para los estilos de navegación.
          Un ejemplo de cómo se vería un enlace en el Storybook:
          <a href="#/dashboard" className="block py-2 px-3 mb-1 text-gray-700 rounded hover:bg-gray-200 hover:text-blue-600 active:bg-blue-600 active:text-white transition-colors duration-200 ease-in-out">Dashboard</a>
          Si tus enlaces son un componente separado, ahí es donde aplicarías estas clases.
        */}
        {children}
      </nav>
    </aside>
  );
};

export default Sidebar;