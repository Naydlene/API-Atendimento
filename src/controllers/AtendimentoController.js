const mongoose = require('mongoose');

const Atendimento = mongoose.model('Atendimento');

module.exports = {
    async index(req, res) {
        const { page } = req.query;
        const atendimentos = await Atendimento.paginate({}, { page, limit: 10});

        return res.json(atendimentos);
    },

    async show(req, res) {
        const atendimento = await Atendimento.findById(req.params.id);

        return res.json(atendimento);
    },

    async store(req, res){
        const atendimento = await Atendimento.create(req.body);

        return res.json(atendimento);
    },

    async update(req, res){
        const atendimento = await Atendimento.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(atendimento);
    },

    async destroy(req, res) {
        await Atendimento.findByIdAndRemove(req.params.id);

        return res.send();

    }
};