import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {BrowserRouter} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import GlobalStyles from 'styles/globalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
);
// PWA 활성화
serviceWorkerRegistration.register();
