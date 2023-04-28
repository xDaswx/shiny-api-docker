const express = require('express')
const animeModel = require('../models/animesModel')
const app = express()


const getAllAnimes = async (req,res) => {
    return res.status(200).send(animes)
}


module.exports = {
    getAllAnimes,
}