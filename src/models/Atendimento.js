const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const AtendimentoSchema = new mongoose.Schema({
    coordenador: {
        type: String,
        required: true,
    },
    assunto: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    data: {
        type:Date,
        required: true,
    },
    createAt: {
        type: Date,
        defaullt: Date.now,
    },
});

AtendimentoSchema.plugin(mongoosePaginate);

mongoose.model("Atendimento", AtendimentoSchema);

//coordenador: string;
//assunto: string;
//descricao: string;
//data: Date;
