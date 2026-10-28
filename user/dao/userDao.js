const { Users } = require("../../database/models")
exports.getAllUser = async (req, next) => {
    let data = await Users.findAll()
    
    if (data) {
        next(null, data)
    } else {
        next('data not found')
    }

}