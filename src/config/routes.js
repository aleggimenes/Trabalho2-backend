const express = require('express')

module.exports = function(server){
    
    const router = express.Router()
    server.use('/api', router)

    const todoService = require('../api/pessoa/pessoaService')
    todoService.register(router,'/pessoas')
}