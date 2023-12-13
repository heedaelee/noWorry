import Modals from 'components/modals/Modals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import GlobalHtmlStyles from 'styles/globalHtmlStyles';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

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
