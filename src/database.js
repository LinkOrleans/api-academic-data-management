const bancodedados = {
    identificadorInstrutor: 4,
    identificadorAula: 2,
    instrutores: [
        {
            id: 1,
            nome: 'Foo Bar',
            email: 'foo@bar.com',
            status: true
        },
        {
            id: 2,
            nome: 'Bar Foo',
            email: 'bar@foo.com',
            status: true
        },
        {
            id: 3,
            nome: 'FooBar Foo',
            email: 'foobar@foo.com',
            status: true
        }
    ],
    aulas: [
        {
            id: 1,
            id_instrutor: 1,
            titulo: 'Primeiro Servidor',
            descricao: 'Construindo o meu Primeiro Servidor com Express.js'
        }
    ]
}

module.exports = bancodedados;