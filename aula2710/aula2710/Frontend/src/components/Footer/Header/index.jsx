//aula2710\Frontend\src\components\Footer\Header\index.jsx

import './style.css';

function Header() {
    return (
        <header className="header">
            <div> Gerenciamento de Usuários</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/acadastro">Cadastrar</Link>
                <Link to="/listar">Listar Usuários</Link>
            </nav>
        </header>
    );
}

export default Header;
           