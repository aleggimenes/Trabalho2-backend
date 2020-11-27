const restful = require('node-restful')
const mongoose = restful.mongoose

const pessoaSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: {type: String, required: true},
    nascimento: {type: Date, required: true},
    altura: {type: Number, required: true},
    fumante:{type: Boolean, required: false, default: false}
})

module.exports = restful.model('Pessoa', pessoaSchema)