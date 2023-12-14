import {Suspense, lazy} from 'react';
import {Route, Routes} from 'react-router-dom';

// import Container from 'components/common/Container';
// import Main from 'pages/Main';
// import Statics from 'pages/Statics';
// import Registor from 'pages/Registor';
// import Setting from 'pages/Setting';

// Route-based 코드스플리팅

const Container = lazy(() => import('components/common/Container'));

const Main = lazy(() => import('pages/Main'));
const Registor = lazy(() => import('pages/Registor'));
const Statics = lazy(() => import('pages/Statics'));
const Setting = lazy(() => import('pages/Setting'));

function App() {
  return (
    <Suspense fallback={<Spinnner />}>
      <Routes>
        <Route path='/' Component={Container}>
          <Route path='/' Component={Main} />
          <Route path='/register' Component={Registor} />
          <Route path='/statics' Component={Statics} />
          <Route path='/setting' Component={Setting} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
