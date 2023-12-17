import Spinner from 'components/spinner/Spinner';
import {Suspense, lazy} from 'react';
import {Route, Routes} from 'react-router-dom';

// Route-based 코드스플리팅
const Container = lazy(() => import('components/common/Container'));
const Main = lazy(() => import('pages/Main/Main'));
const Registor = lazy(() => import('pages/Registor/Registor'));
const Statics = lazy(() => import('pages/Statics/Statics'));
const Setting = lazy(() => import('pages/Setting/Setting'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
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
