const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require ('require-dir');
// Iniciando o App
const app = express();

// Para permitir que eu envie dados para minha aplicação no formato JSON
app.use(express.json());

app.use(cors());

// Sessão de - Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
     { useNewUrlParser: true }
    );

// registrar o model na aplicação
requireDir('./src/models');

// verificar se está salvando os dados no DB
/* Para conseguir inserir novos valores, atualizar etc...*/
/* const Product = mongoose.model('Product'); */ // não vai mais utilizar

// Rotas
/* O use vai receber todo tipo de requicisão get,post, put ou delete
ele vai aceitar todas as requicissões */
app.use('/api', require('./src/routes'));

app.listen(3001);