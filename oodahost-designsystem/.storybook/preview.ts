import '../src/styles/main.css'
import type { Preview } from '@storybook/react-vite'
//import '../src/styles/Tailwind.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    //Configuracion de acciones (si se necesita
   

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      //test: 'todo',
      disable: true,
    },
  },
};

export default preview;