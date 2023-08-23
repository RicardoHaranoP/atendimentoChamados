import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Listagem from "./pages/listagem";
import CadastroChamado from "./pages/cadastroChamado"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Listagem/>}/>
      <Route path="/cadastroChamado" element={<CadastroChamado/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
