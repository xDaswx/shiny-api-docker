const express = require('express')
const validator = require('validator')
const app = express()



const validador= (req,res,next) => {
    const {body} = req
    const good_values = [body.title,body.nota,body.quando]
    if(good_values.some(value => value == undefined)) {
        res.status(400).json({message:'title não foi informado'})
        return
    }
    next()
}

module.exports = {
    validador
}