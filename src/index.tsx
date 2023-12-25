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
  <BrowserRouter>
    <GlobalHtmlStyles />
    <RecoilRoot>
      <Modals />
      <App />
    </RecoilRoot>
  </BrowserRouter>,
);
// PWA 활성화
serviceWorkerRegistration.register();
