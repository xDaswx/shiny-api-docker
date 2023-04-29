const express = require('express')
const animeModel = require('../models/animesModel')
const app = express()


const getAllAnimes = async (req,res) => {
    const [animes] = await animeModel.getAllAnimes()
    return res.status(200).send(animes)
}

const createNewAnime = async (req,res) =>{
    const [animes] = await animeModel.newAnime(req.body)
    return res.status(201).json({Novo_id:animes.insertId,informação:[req.body]})
}

const deleteAnime = async (req,res) => {
    const [message_server] =  await animeModel.deleteAnime(req.params.id)
    if (message_server.affectedRows == '') {
        return res.status(200).json({message:'ID inexistente ou já deletada',status:200})
    }
    return res.status(200).json({message:`ID ${req.params.id} Deletado com sucesso!`,status:message_server})
}

const editAnime = async (req,res) => {
    const {id} = req.params
    const message_server =  await animeModel.editAnime(id,req.body)
    return res.status(200).json({message:message_server})
}

module.exports = {
    getAllAnimes,
    createNewAnime,
    deleteAnime,
    editAnime
}