const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

// Criando conexão com o banco de dados MySQL.
const sequelize = new Sequelize('db_backend', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Definindo o modelo para tabela no banco de dados.
const Funcionario = sequelize.define('Funcionario', {
    nome: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
    },
    cpf: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        unique: true
    },
    rg: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        unique: true
    },
    matricula: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
    },
    dataNascimento: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
    },
    salario: {
        type: DataTypes.DOUBLE, // TIPO DOUBLE -> NÚMERO DECIMAL
        allowNull: false // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
    },
    telefone: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        unique: true // NÃO PODE REPETIR
    },
    email: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        unique: true // NÃO PODE REPETIR
    }
});

const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
    },
    lote: {
        type: DataTypes.STRING, // TIPO DOUBLE -> NÚMERO DECIMAL
        allowNull: false // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
    },
    validade: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
    }
});

const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
    },
    DataNascinmento: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        
    },
    protocoloAtendimento: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        
    }
});

const app = express(); // INICIALIZA O EXPRESS
app.use(cors()); // PERMITE QUE API ACEITE CONEXÃO DO FRONT-END.
app.use(express.json()); // HABILITA O EXPRESS PARA ENTENDER REQUISIÇÕES COM JSON;
app.use(express.static('public')); // HABILITA O EXPRESS PARA SERVIR ARQUIVOS ESTÁTICOS

const port = 3000; // PORTA QUE A APLICAÇÃO VAI RODAR

// ROTA DE TESTE
app.get('/', (req, res) => {
    res.send('API está funcionando!');
});

// ROTA PARA LISTAR TODOS OS FUNCIONÁRIOS, PRODUTOS E CLIENTES
app.get('/funcionarios', async (req, res) => {
    const funcionarios = await Funcionario.findAll();
    res.json(funcionarios);
});

app.get('/produtos', async (req, res) => {
    const produtos = await Produto.findAll();
    res.json(produtos);
});

app.get('/clientes', async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
});

// ROTA PARA CRIAR UM NOVO FUNCIONÁRIO, PRODUTO E CLIENTE
app.post('/funcionarios', async (req, res) => {
    try {
        const { nome, cpf, rg, matricula, dataNascimento, salario, telefone, email } = req.body;
        const novoFuncionario = await Funcionario.create({ nome, cpf, rg, matricula, dataNascimento, salario, telefone, email });
        res.status(201).json(novoFuncionario);
    } catch (error) {
        res.status(400).json({ mensagem: "Funcionário já cadastrado." });
    }
});

app.post('/produtos', async (req, res) => {
    try {
        const { nome, lote, validade } = req.body;
        const novoProduto = await Produto.create({ nome, lote, validade });
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(400).json({ mensagem: "Produto já cadastrado." });
    }
});

app.post('/clientes', async (req, res) => {
    try {
        const { nome, DataNascinmento, protocoloAtendimento } = req.body;
        const novoCliente = await Cliente.create({ nome, DataNascinmento, protocoloAtendimento });
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(400).json({ mensagem: "Cliente já cadastrado." });
    }
});

// SINCRONIZA O MODELO COM O BANCO DE DADOS E INICIA O SERVIDOR
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`🚀API rodando em http://localhost:${port}`);
        console.log('🚀Conectado ao banco de dados MySQL.');
    });
}).catch(err => {
    console.error('Não foi possível conectar ao banco de dados:');
});

// Teste de requisição removido. O backend não deve usar fetch para consumir sua própria API.