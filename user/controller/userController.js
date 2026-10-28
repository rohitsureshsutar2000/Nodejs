const userService = require("../service/userService")

exports.getUser = (req, res) => {
    getAllUser(req, res, (error, data) => {
        if (error) return error;

        return res.status(200).json({
            success: true,
            data: data
        })
    })
}

const getAllUser = (req, res, next) => {
    userService.getAllUser(req, next);
}


exports.getUserById = (req, res) => {
    getUserById(req, res, (error, data) => {
        if (error) {
            return res.status(500).json({
                success: false,
                error: error || "Internal server error"
            });
        };
        if (!data) {
            res.status(204).json({
                success: false,
                error: 'Data not available'
            })
        }

        return res.status(200).json({
            success: true,
            data: data
        })
    })
}

const getUserById = (req, res, next) => {
    userService.getUserById(req, next);
}