//aula2710\Frontend\src\components\Footer\index.jsx

import './style.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; { new Date().getFullYear()} - Todos os direitos reservados.
                <br />Desenvolvido Bancada McDonaldes.
            </p>
        </footer>
    );
}   

export default Footer;