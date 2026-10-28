const userService = require("../service/userService")

exports.getUser = (req, res) => {
    getAllUser(req, res, ( error, data )=>{
        if(error) return error;

        return res.status(200).json({
            success: true,
            data:data
        })
    })
}

const getAllUser = (req, res, next) => {
    userService.getAllUser(req, next);
}