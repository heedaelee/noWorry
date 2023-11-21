import {Route, Routes, useNavigate} from 'react-router-dom';

import Container from 'components/common/Container';
import Main from 'pages/Main';
import Statics from 'pages/Statics';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Container}>
        <Route path='/' Component={Main} />
        <Route path='/statics' Component={Statics} />
      </Route>
    </Routes>
  );
}

export default App;
