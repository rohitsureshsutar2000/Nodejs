const { Client, ClientDetails } = require("../../database/models")

exports.createClient = async (req, next) =>{
    try {
        const data = await Client.create(req.body)
    
        next(null, data)
    } catch (error) {
         next(error)
    }
}

exports.getAllClients = async (req, next) => {
    let data = await Client.findAll({
        include: ClientDetails
    })

    if (data) {
        next(null, data)
    } else {
        next('data not found')
    }

}