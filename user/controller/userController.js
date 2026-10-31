const userService = require("../service/userService")

exports.getUser = (req, res) => {
    getAllUser(req, res, (error, data) => {
        if (error) return error;

        if (!data || data.length === 0) {
           return res.status(204).send()
        }

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


exports.deleteUserById = (req, res) => {
    deleteUserById(req, res, (error, data) => {
        if (error) {
            return res.status(500).json({
                success: false,
                error: error || "Internal server error"
            });
        };

        return res.status(200).json({
            success: true,
        })
    })
}

const deleteUserById = (req, res, next) => {
    userService.deleteById(req, next);
}


exports.deleteAllUser = (req, res) => {
    deleteAllUser(req, res, (error, data) => {
        if (error) {
            return res.status(500).json({
                success: false,
                error: error || "Internal server error"
            });
        };

        return res.status(200).json({
            success: true,
            msg: "User deleted"
        })
    })
}

const deleteAllUser = (req, res, next) => {
    userService.deleteUsers(req, next);
}

exports.updateUserDetails = (req, res) => {
    updateUserDetails(req, res, (error, data) => {
        if (error) {
            return res.status(500).json({
                success: false,
                error: error || "Internal server error"
            });
        };

        return res.status(200).json({
            success: true,
            msg: "User upated"
        })
    })
}

const updateUserDetails = (req, res, next) => {
    userService.updateUserDetails(req, next);
}