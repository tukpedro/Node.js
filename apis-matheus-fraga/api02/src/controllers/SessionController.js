//metodos: index, show, update, store, destroy
/*
index: listagem de sessoes
store: Criar uma sessao
show: Quando queremos listar uma UNICA sessao
update: quando queremos alterar alguma sessao
destroy: quando queremos deletar uma sessao
*/


class SessionController {
    store(req, res) {
        return res.json({ msg: 'Session Online'})
    }
}

export default new SessionController();