const Pessoa = require('./pessoa')
const errorHandler = require('../common/errorHandler')

Pessoa.methods(['get', 'post','put','delete'])
Pessoa.updateOptions({ new:true, runValidators:true })
Pessoa.after('post', errorHandler).after('put', errorHandler)

Pessoa.route('get', (req, res, next) => {
    Pessoa.find({}, (err, docs) => {
        if(!err) {
            res.json(docs)
        } else {
            res.status(500).json({errors: [error]})
        }
    })
})
module.exports = Pessoa