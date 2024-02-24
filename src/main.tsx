import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './scss/global.scss';
import { ModalContext } from './contexts/ModalContext/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ModalContext>
    <App />
  </ModalContext>,
);
