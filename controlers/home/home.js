const dbModel = require('./../../models/dbModel/dbModel')

const homeControler =async (req,res)=>{
    const db = new dbModel()

    const result = await db.find('series')
    
    res.json(result)
}



module.exports= homeControler