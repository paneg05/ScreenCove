const express = require('express')
const body = require('body-parser')
const consign = require('consign')


const server = express()

//configuração do midleware
server.use(body.urlencoded({extended:true}))
server.use(body.json())

//importação das rotas
consign()
    .include('./routs')
        .into(server)

module.exports = server



