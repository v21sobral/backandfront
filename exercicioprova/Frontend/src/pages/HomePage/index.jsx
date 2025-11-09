import './styles.css'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className="home-container">
            <h1 className="home-title">Cadastre-se aqui para ser o futuro funcionário da McDonaldes</h1>
            
            <div className="home-content">
                <section className="welcome-section">
                    <p className="welcome-text">
                        Aqui você sai do SENAI diretamente para ser empregado numa das maiores redes de fast-food do mundo.
                        ;p
                    </p>
                    
                    <Link to="/cadastro" className="action-button">
                        Cadastrar Novo Funcionário
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default HomePage