const mongoose = require ('mongoose');

const Product = mongoose.model('Product');

// aqui dentro exportar um objeto com algumas funções
module.exports = {
    // teste
    async index(req, res) {
        const { page = 1 } = req.query; // query é para parâmetros get
        const products = await Product.paginate({ }, { page, limit: 10 }); // tamanho da minha página atual e o tamho da página que eu quero 

        return res.json(products);
    },

    async show(req, res) {
        // pegar o id que está no parâmetro da rota
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res) {
        // Criação de um produto
        const product = await Product.create(req.body);

        // retornar o produto que foi criado na base de dados
        return res.json(product);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { 
            new: true 
        });

        return res.json(product);
    },

    // Para fazer a parte de remoção
    async destroy(req, res) {
        const product = await Product.findByIdAndRemove(req.params.id);

        // retorna uma mensagem de sucesso sem conteúdo
        return res.send();
    },
};