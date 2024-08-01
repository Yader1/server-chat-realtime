const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'Crear usuario'
    });
}


module.exports = {
    crearUsuario
}