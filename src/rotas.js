const express = require ('express');

const rotas = express();

rotas.get('/calculo', (req,res) => {
    console.log('ok')
})

module.exports = rotas