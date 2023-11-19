const express = require ('express');

const somatorioInteirosDivisiveis = require('./controlador/calculo');

const rotas = express();

rotas.get('/calculo/:numero', somatorioInteirosDivisiveis)

module.exports = rotas