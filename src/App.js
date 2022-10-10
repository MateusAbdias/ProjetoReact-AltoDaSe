import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link,} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Historico from "./Historico";
import Informacoes from "./Informacoes"
import Horario from "./Horario";
import Trabalho from "./Trabalhe";

function App() {
  return (
    <div>
      <Router>
        <header className="app-header">
          <NavBar />
        </header>
        <body className="app-body">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/Historico" element={<Historico/>} />
            <Route path="/Informacoes" element={<Informacoes/>} />
            <Route path="/Horario" element={<Horario/>} />
            <Route path="/Trabalhe" element={<Trabalho/>} />
          </Routes>
        </body>
        <div className="app-footer">
          <p>Endereço: R. Bpo. Coutinho, s/n - Alto da Sé, Olinda - PE, 53120-130</p>
          <p>(81) 3439-1988</p>
          <p>Desenvolvido por: Mateus Abdias</p>
        </div>
      </Router>
    </div>
  );
}

export default App;
