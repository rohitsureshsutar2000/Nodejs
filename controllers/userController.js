const { Users } = require('../database/models')

const createUser = async (req, res) =>{
    try {
        return res.status(200).json({
            success:false,
            msg: "User Created"
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            msg: error.message
        })
    }
}

model.exports = {
    createUser      
}