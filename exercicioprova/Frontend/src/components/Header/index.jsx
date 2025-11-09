import './styles.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="header-title">
                    <span className="mc-arch">Mc</span>
                    <span>Do SENAI direto pra McDonaldes</span>
                </Link>
                <nav className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/cadastro" className="nav-link">Cadastrar Funcionários</Link>
                    <Link to="/usuarios" className="nav-link">Listar Funcionários</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header