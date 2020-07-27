const express = require ('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// rota
routes.get("/products", ProductController.index);

routes.get('/products/:id', ProductController.show);

// sempre usa o método post quando for criar alguma coisa dentro do nosso servidor
routes.post("/products", ProductController.store);

// atualizar
routes.put("/products/:id", ProductController.update);

// reletar
routes.delete("/products/:id", ProductController.destroy);

// exportar desse arquivo do routes
module.exports = routes;