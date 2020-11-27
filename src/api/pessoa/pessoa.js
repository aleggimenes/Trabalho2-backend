const restful = require('node-restful')
const mongoose = restful.mongoose

const pessoaSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: {type: String, required: true},
    nascimento: {type: String, required: true},
    altura: {type: String, required: true}
})

module.exports = restful.model('Pessoa', pessoaSchema)