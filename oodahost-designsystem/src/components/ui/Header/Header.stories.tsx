import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header'; // Asegúrate de que la ruta sea correcta

const meta: Meta<typeof Header> = {
  title: 'components/Header/NavigationBar',
  component: Header,
  parameters: {
    layout: 'fullscreen', // Para que el header ocupe todo el ancho disponible
  },
  // Opcional: Define argTypes para controlar mejor las props en Storybook UI
  argTypes: {
    logoText: { control: 'text' },
    navLinks: { control: 'object' },
    buttonLabel: { control: 'text' },
    buttonHref: { control: 'text' },
    userName: { control: 'text' },
    userAvatarUrl: { control: 'text' },
    variant: {
      control: 'select',
      options: ['white', 'light-gray', 'gradient'],
    },
  },
  tags: ['autodocs'], // Habilita la generación automática de documentación
};

export default meta;
type Story = StoryObj<typeof Header>;

// --- Historias para las variantes de color con el layout original (logo izquierda, nav centro, botón derecha) ---

// Variante 1: Fondo Blanco, Texto Oscuro (Similar a la imagen pero claro)
export const HeaderVariant: Story = {
  args: {
    logoText: 'OODA',
    navLinks: [
      { label: 'Product', href: '/product' },
      { label: 'Resources', href: '/resources' },
      { label: 'Pricing', href: '/pricing' },
    ],
    buttonLabel: 'Get started',
    buttonHref: '/get-started',
    variant: 'white',
  },
};

// Variante 2: Fondo Gris Claro, Texto Más Oscuro
/*export const LightGrayVariant: Story = {
  args: {
    logoText: 'OODA',
    navLinks: [
      { label: 'Product', href: '/product' },
      { label: 'Resources', href: '/resources' },
      { label: 'Pricing', href: '/pricing' },
    ],
    buttonLabel: 'Get started',
    buttonHref: '/get-started',
    variant: 'light-gray',
    showSearch: false,
    showUserMenu: false,
  },
};*/

// Variante 4: Fondo con Degradado Sutil
/*export const GradientVariant: Story = {
  args: {
    logoText: 'OODA',
    navLinks: [
      { label: 'Product', href: '/product' },
      { label: 'Resources', href: '/resources' },
      { label: 'Pricing', href: '/pricing' },
    ],
    buttonLabel: 'Get started',
    buttonHref: '/get-started',
    variant: 'gradient',
    showSearch: false,
    showUserMenu: false,
  },
};*/

// --- Historias para mostrar funcionalidades adicionales con una variante específica ---

// Variante con campo de búsqueda (usando la variante 'white' por defecto para claridad)
/*export const WithSearchAndButton: Story = {
  args: {
    ...WhiteVariant.args, // Hereda los args de WhiteVariant
    showSearch: true,
    navLinks: [ // Puedes personalizar los enlaces si quieres
      { label: 'Features', href: '/features' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Docs', href: '/docs' },
    ],
  },
};*/

// Variante con menú de usuario (usando la variante 'white')
/*export const WithUserMenuAndButton: Story = {
  args: {
    ...WhiteVariant.args, // Hereda los args de WhiteVariant
    showUserMenu: true,
    userName: 'OodaUser',
    userAvatarUrl: 'https://via.placeholder.com/150/50bda4/FFFFFF?text=OU', // URL de avatar de ejemplo
    navLinks: [ // Personaliza los enlaces para un usuario logueado
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Account', href: '/account' },
      { label: 'Logout', href: '/logout' },
    ],
    buttonLabel: undefined, // Ocultar el botón "Get started" si el usuario ya está logueado
    buttonHref: undefined,
  },
};
*/
// Variante para simular la versión móvil
/*export const MobileVersion: Story = {
  args: {
    ...WhiteVariant.args, // Hereda los args de WhiteVariant
    // Puedes ajustar aquí las propiedades para el móvil si quieres un comportamiento diferente
    showSearch: true, // Mostrar búsqueda en móvil
    showUserMenu: true, // Mostrar menú de usuario en móvil
    userName: 'MobileUser',
    userAvatarUrl: 'https://via.placeholder.com/150/007bff/FFFFFF?text=M',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1', // Esto simula un tamaño de pantalla de móvil
    },
    // Opcional: Centrar el contenido dentro del viewport si la historia parece desplazada
    // docs: {
    //   canvas: {
    //     foco: 'center',
    //   },
    // },
  },
};*/