import { Link } from "react-router-dom";
import './styles.css';

function Header() {
    return (
        <header className="header-container">
        <div className= 'logo'>Sistema de clientes</div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/cadastro">Cadastrar</Link>
            <Link to="/lista">Listar</Link>
        </nav>
    </header>
    );
}   