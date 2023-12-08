let { instrutores, aulas, identificadorAula } = require('../database');

const cadastrarAulas = (req, res) => {
    const { idInstrutor } = req.params;
    const { titulo, descricao } = req.body;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado!' });
    }

    if (!titulo) {
        return res.status(400).json({ mensagem: 'O título é obrigatório!' });
    }

    if (!descricao) {
        return res.status(400).json({ mensagem: 'A descrição é obrigatória!' });
    }

    const aula = {
        id: identificadorAula++,
        id_Instrutor: Number(idInstrutor),
        titulo,
        descricao
    }

    aulas.push(aula);

    res.status(201).json(aula);
};

const listarAulas = (req, res) => {
    return res.json(aulas);
};

const obterAula = (req, res) => {
    const { id } = req.params;

    const aula = aulas.find((aula) => {
        return aula.id === Number(id);
    });

    if (!aula) {
        return res.status(404).json({ mensagem: 'Id não encontrado!' });
    }

    res.json(aula);
};


module.exports = {
    cadastrarAulas,
    listarAulas,
    obterAula,
}