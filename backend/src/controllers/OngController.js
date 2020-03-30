
const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

  //Listar todos os dados da tabela ongs
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const{ name, email, whatsapp, city, uf } = request.body;
        
        //gerar id automaticamente com a biblioteca crypto 
        const id = crypto.randomBytes(4).toString('HEX');

        // inserção dos dados em ongs
        await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
        })
    
        return response.json({ id });
    }
};