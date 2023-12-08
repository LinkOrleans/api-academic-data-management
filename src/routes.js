const express = require('express');
const routes = express();

const aulas = require('./controllers/classes');

const instrutores = require('./controllers/instructors');

// instructor
routes.get('/instrutores', instrutores.listarInstrutores);
routes.get('/instrutores/:id', instrutores.obterInstrutor);
routes.post('/instrutores', instrutores.cadastrarInstrutor);
routes.put('/instrutores/:id', instrutores.atualizarInstrutores);
routes.patch('/instrutores/:id/status', instrutores.atualizarStatusInstrutor);
routes.delete('/instrutores/:id', instrutores.excluirInstrutor);

// classes
routes.get('/aulas', aulas.listarAulas);
routes.get('/aulas/:id', aulas.obterAula);
routes.get('/instrutores/:idInstrutor/aulas', instrutores.obterAulasInstrutor)
routes.post('/instrutores/:idInstrutor/aulas', aulas.cadastrarAulas);

module.exports = routes;