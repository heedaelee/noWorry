import { Route, Routes, useNavigate } from "react-router-dom";

import Container from "components/common/Container";
import Main from "Pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Container}>
        <Route path="/" Component={Main} />
      </Route>
    </Routes>
  );
}

export default App;
