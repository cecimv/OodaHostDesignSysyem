import Sidebar from './Sidebar';

export default {
  title: 'Components/Sidebar/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Title displayed at the top of the sidebar.' },
    children: { control: 'text', description: 'Main content of the sidebar.' },
  },
  parameters: {
    layout: 'fullscreen', // Es importante para que Storybook muestre el sidebar correctamente
  },
};

// Componente Wrapper para simular un layout con contenido principal
const LayoutWithSidebar = (args: any) => (
  <div className="flex min-h-screen bg-gray-100"> {/* Usa clases de Tailwind aquí también */}
    <Sidebar {...args}>
      {/* Ejemplos de enlaces de navegación con clases de Tailwind */}
      <a href="#/dashboard" className="block py-2 px-3 mb-1 text-gray-700 rounded hover:bg-gray-200 hover:text-black transition-colors duration-200 ease-in-out">Product</a>
      <a href="#/products" className="block py-2 px-3 mb-1 text-gray-700 rounded hover:bg-gray-200 hover:text-black transition-colors duration-200 ease-in-out">Resources</a>
      <a href="#/orders" className="block py-2 px-3 mb-1 text-gray-700 rounded hover:bg-gray-200 hover:text-black transition-colors duration-200 ease-in-out">Pricing</a>
      {/* Para el enlace activo, podrías tener una lógica de estado en tu app */}
      {/* <a href="#/active" className="block py-2 px-3 mb-1 text-white bg-blue-600 rounded">Activo</a> */}
    </Sidebar>
    <main className="flex-grow p-5">
      <h1 className="text-3xl font-bold mb-4">CONTENT</h1>
      <p className="text-gray-700 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam assumenda maxime, quas earum officiis, similique ea temporibus est.</p>
      
    </main>
  </div>
);

export const DefaultSidebar = {
  render: (args: any) => <LayoutWithSidebar {...args} />,
  args: {
    title: 'OODA',
  },
  parameters: {
    docs: {
      description: {
        story: 'This component is a fixed sidebar, designed to be the applications primary and persistent navigation. Its ideal for ensuring users have constant access to key sections, improving usability and fluidity when interacting with the system.',
      },
    },
  },
};