const {MongoClient} = require('mongodb')
const { Error } = require('mongoose')

module.exports =  class dbModel {
    constructor(dbName='StreamCove'){
        this.dbUri = process.env.DB_URI
        this.client =  new MongoClient(this.dbUri)
        this.database = this.client.db(dbName)
    }

    async find(collection=null){
        try{
            
            const col = this.database.collection(collection)
            
            const result = await col.find().limit(30).toArray((err,result)=>{
                
                if(err){
                    throw new Error(err)
                }
                
                return result
            })
            return result
            
        }finally{
            await this.client.close()
        }
        
    }

}


