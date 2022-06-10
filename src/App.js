import './App.css';
import Navegacao from './Components/Navegacao';
import Home from './Components/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Produto from './Components/Produto';

function App() {
  return (
    <>
        {/* Cria rotas. O padrão: sem barra, e carregará Home */}
        {/* Se a url for id e mercado, irá renderizar Produto */}

      <Router>
        <Navegacao />
        <Routes>
          <Route exact path='/' element={<Home />}/>  
          <Route exact path='/:id/:mercado' element={<Produto />}/>  
        </Routes>
      </Router>
    </>

  );
}

export default App;
