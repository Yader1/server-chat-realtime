const { response } = require('express');

const Usuario = require('../models/usuarios');

const crearUsuario = async (req, res = response) => {
    const usuario = new Usuario(req.body);

    await usuario.save();

    res.json({
        ok: true,
        msg: 'Crear usuario'
    });
}


module.exports = {
    crearUsuario
}