const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const {q, nombre} = req.query;
    res.json({
        msg: "get API - controlador",
        q,
        nombre
    })
}

const usuarioPut = (req, res = response) => {
    const { id } = req.params;


    res.json({
        msg: "put API - controlador",
        id
    })
}

const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body;

    res.json({
        msg: "post API - controlador",
        nombre,
        edad
    })
}


const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "delete API - controlador"
    })
}


module.exports = {
    usuariosGet,
    usuarioPut,
    usuariosPost,
    usuariosDelete
}