import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './scss/global.scss';
import { ModalContext } from './contexts/ModalContext/index.tsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Suspense } from 'react';
import FullScreenMessage from './components/shared/FullScreenMessage/index.tsx';
import ErrorBoundary from './components/shared/ErrorBoundary/index.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ModalContext>
      <ErrorBoundary fallback={<FullScreenMessage type="error" />}>
        <Suspense fallback={<FullScreenMessage type="loading" />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </ModalContext>
  </QueryClientProvider>,
);
