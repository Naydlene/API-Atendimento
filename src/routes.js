const express = require('express');
const routes = express.Router();

const AtendimentoController = require('./controllers/AtendimentoController');
routes.get('/atendimentos', AtendimentoController.index);
routes.get('/atendimentos/:id', AtendimentoController.show);
routes.post('/atendimentos', AtendimentoController.store);
routes.put('/atendimentos/:id', AtendimentoController.update);
routes.delete('/atendimentos/:id', AtendimentoController.destroy);


module.exports = routes;