// frontend\src\pages\ListaUsuariosPage\index.jsx

import React, {useState, useEffect} from "react";
import api from "../../services/api";
import  './styles.css';

function ListaUsuariosPage() {
    const [usuarios, setUsuarios] = React.useState([]);
    const [carregando, setCarregando] = React.useState(true);

    useEffect(() => {
        async function fetchUsuarios() {
            try {
                const response = await api.get('/usuarios');
                setUsuarios(response.data);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            } finally {
                setCarregando(false);
            }
        }

        fetchUsuarios();
    }, []);

    if (carregando) {
        return <div className="lista-usuarios-container loading"><h2>Carregando...</h2></div>;
    }

    return (
        <div className="lista-usuarios-container">
            <h1 className="lista-title">Lista de Usuários</h1>
            {usuarios.length === 0 ? (
                <p className="error-message">Nenhum usuário encontrado.</p>
            ) : (
                <div className="usuarios-grid">
                    {usuarios.map((usuario) => (
                        <div className="usuario-card" key={usuario.id}>
                            <div className="usuario-nome">{usuario.nome}</div>
                            <div className="usuario-info usuario-email">{usuario.email}</div>
                            <div className="usuario-info usuario-telefone">{usuario.telefone}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ListaUsuariosPage;