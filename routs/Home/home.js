const homeControler = require('./../../controlers/home/home')

module.exports = (server)=>{
    server.get('/',(req,res)=>{
        homeControler(req,res)
    })
    
}



