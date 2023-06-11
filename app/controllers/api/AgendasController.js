const Agenda = require('../../models/agenda');

function AgendasController() {

  function save(req, res) {
    const agenda = {
      nome: req.body.nome,
      celular: req.body.celular,
      email: req.body.email,
      rua: req.body.rua,
      numero: req.body.numero,
      bairro: req.body.bairro,
      cidade: req.body.cidade,
      estado: req.body.estado,
      cep: req.body.cep,
      complemento: req.body.complemento,
      done: false,
    }

    Agenda.create(agenda)
      .then((data) => {
        res.status(201).json(data)
      })
      .catch((err) => console.log())
  }

  function list(req, res) {
    Agenda.findAll({ raw: true })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => console.log(err))
  }

  async function show(req, res) {
    const id = req.params.id;

    try {

      const data = await Agenda.findOne({ where: { id: id }, raw: true });

      if (!data) {
        return res.status(404).send({
          message: "Tarefa não encontrada."
        })
      }

      res.status(200).json(data);

    } catch (error) {
      res.status(500).json({
        message: "Deu M capitão!"
      });
    }
    
  }

  function remove(req, res) {
    const id = req.params.id;

    Agenda.findOne({ where: { id: id }, raw: true })
      .then((data) => {

        if (!data) {
          return res.status(404).send({
            message: "Tarefa não encontrada."
          })
        }

        Agenda.destroy({ where: { id: id } })
          .then(() => {
            res.status(200).json({
              message: "Tarefa removida."
            })
          })
          .catch((err) => console.log())

      })
      .catch((err) => res.json(err));
    
  }

  function update(req, res) {
    const id = req.params.id

    const agenda = {
      nome: req.body.nome,
      celular: req.body.celular,
      email: req.body.email,
      rua: req.body.rua,
      numero: req.body.numero,
      bairro: req.body.bairro,
      cidade: req.body.cidade,
      estado: req.body.estado,
      cep: req.body.cep,
      complemento: req.body.complemento,
    }

    Agenda.findOne({ where: { id: id }, raw: true })
      .then((data) => {

        if (!data) {
          return res.status(404).send({
            message: "Contato não encontrado."
          })
        }

        Agenda.update(agenda, { where: { id: id } })
          .then(() => {
            res.json({
              message: "Contato atualizado."
            })
          })
          .catch((err) => console.log(err))

      })
      .catch((err) => res.json(err))

    
  }

  function updateStatus(req, res) {
    const id = req.params.id

    const agenda = {
      done: req.body.done === '1' ? true : false,
    }

    
    Agenda.findOne({ where: { id: id }, raw: true })
      .then((data) => {

        if (!data) {
          return res.status(404).send({
            message: "Tarefa não encontrada."
          })
        }

        Agenda.update(agenda, { where: { id: id } })
          .then(() => {
            res.json({
              message: "Status da Tarefa atualizado."
            })
          })
          .catch((err) => console.log(err))

      })
      .catch((err) => res.json(err));

    }

    return {
      save,
      list,
      show,
      remove,
      update,
      updateStatus,
    }

}

module.exports = AgendasController();
