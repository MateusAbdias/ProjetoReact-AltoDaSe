import "./App.css";
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='navBar'>
            <ul>
                <li><Link to="/Home">HOME</Link></li>
            </ul>
            <ul>
                <li><Link to="/Historico">HISTÓRICO</Link></li>
            </ul>
            <ul>
                <li><Link to="/Informacoes">INFORMAÇÕES</Link></li>
            </ul>
            <ul>
                <li><Link to="/Horario">HORÁRIO</Link></li>
            </ul>
            <ul>
                <li><Link to="/Trabalhe">TRABALHE</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;