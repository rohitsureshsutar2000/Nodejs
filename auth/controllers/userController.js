const { Users } = require('../../database/models')

const createUser = async (req, res) =>{
    try {
        const data = await Users.create(req.body)
        
        return res.status(200).json({
            success:true,
            msg: "User Created",
            data: data
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            msg: error.message
        })
    }
}

module.exports = {
    createUser      
}