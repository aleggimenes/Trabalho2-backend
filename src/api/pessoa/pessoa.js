const restful = require('node-restful')
const mongoose = restful.mongoose

const pessoaSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: {type: String, required: true},
    nascimento: {type: Number, required: true},
    altura: {type: Date, required: true},
    fumante:{type: Boolean, required: false}
})

module.exports = restful.model('Pessoa', pessoaSchema)