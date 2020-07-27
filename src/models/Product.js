const mongoose = require ('mongoose');
const mongoosePaginate = require ('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    // Aqui vai ser passado o objeto.
    // quais são os campos que eu quero salvar no meu banco de dados para cada produto.
    title: {
        // tipo de dado
        type: String, 
        // campo obrigatorio
        required: true,
    },
    description: {
        type: String,
        required: true, 
    },
    url: {
        // link que vamos dar para esse produto
        type: String,
        required: true,
    },
    createdAt: {
        // salvar uma data e ela vai se preencher automáticamente com o valor da data atual que o registro for criado no banco de dados.
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);

// Para registrar um model na aplicação 
mongoose.model('Product', ProductSchema);