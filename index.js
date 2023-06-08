require('dotenv').config()
const server = require('./server/server')


const port = process.env.PORT || 3000





server.listen(port,async ()=>{
    console.log(`servidor rodando na porta: ${port}`)
    
})





