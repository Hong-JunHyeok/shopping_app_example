import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import App from './App';

import { ErrorPage, LoadingPage } from './pages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <Suspense fallback={<LoadingPage />}>
          <App /> 
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
);
