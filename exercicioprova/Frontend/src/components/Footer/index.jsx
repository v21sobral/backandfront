import './styles.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Todos os direitos reservados.
                    <br/> 
                    Desenvolvido pela Bancada McDonaldes.
                </p>
            </div>
        </footer>
    )
}

export default Footer