// Mostrar apenas a seção selecionada
function mostrarSecao(id) {
    document.querySelectorAll('.secao').forEach(s => s.classList.remove('ativo'));
    document.getElementById(id).classList.add('ativo');
}

// Carregar dados quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar funcionários por padrão
    mostrarSecao('funcionarios');
    
    // Carregar funcionários
    fetch('/funcionarios')
        .then(response => response.json())
        .then(funcionarios => {
            const lista = document.getElementById('lista-funcionarios');
            funcionarios.forEach(f => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h3>${f.nome}</h3>
                    <p>CPF: ${f.cpf}</p>
                    <p>Email: ${f.email}</p>
                    <p>Telefone: ${f.telefone}</p>
                `;
                lista.appendChild(card);
            });
        });

    // Carregar produtos
    fetch('/produtos')
        .then(response => response.json())
        .then(produtos => {
            const lista = document.getElementById('lista-produtos');
            produtos.forEach(p => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h3>${p.nome}</h3>
                    <p>Lote: ${p.lote}</p>
                    <p>Validade: ${p.validade}</p>
                `;
                lista.appendChild(card);
            });
        });

    // Carregar clientes
    fetch('/clientes')
        .then(response => response.json())
        .then(clientes => {
            const lista = document.getElementById('lista-clientes');
            clientes.forEach(c => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h3>${c.nome}</h3>
                    <p>Data de Nascimento: ${c.DataNascinmento}</p>
                    <p>Protocolo: ${c.protocoloAtendimento}</p>
                `;
                lista.appendChild(card);
            });
        });
});

// Adicionar Funcionário
document.getElementById('form-funcionario').addEventListener('submit', function(e) {
    e.preventDefault();
    const dados = Object.fromEntries(new FormData(this));
    fetch('/funcionarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(() => location.reload());
});

// Adicionar Produto
document.getElementById('form-produto').addEventListener('submit', function(e) {
    e.preventDefault();
    const dados = Object.fromEntries(new FormData(this));
    fetch('/produtos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(() => location.reload());
});

// Adicionar Cliente
document.getElementById('form-cliente').addEventListener('submit', function(e) {
    e.preventDefault();
    const dados = Object.fromEntries(new FormData(this));
    fetch('/clientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(() => location.reload());
});