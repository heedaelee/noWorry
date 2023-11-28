import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {BrowserRouter} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import GlobalHtmlStyles from 'styles/globalHtmlStyles';
import Modals from 'components/modals/modals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GlobalHtmlStyles />
    <BrowserRouter>
      <RecoilRoot>
        <Modals />
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
);
// PWA 활성화
serviceWorkerRegistration.register();
