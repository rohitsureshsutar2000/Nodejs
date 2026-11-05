const userService = require("../service/clientService")


exports.createClient = (req, res) => {
    createClient(req, res, (error, data) => {
        if (error) {
            return res.status(500).json({
                success: false,
                error: error || "Internal server error"
            });
        };
        
        return res.status(200).json({
            success:true,
            msg: "Client Created",
            data: data
        })
    })
}

const createClient = (req, res, next) => {
    userService.createClient(req, next);
}

exports.getClient = (req, res) => {
    getAllClients(req, res, (error, data) => {
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

const getAllClients = (req, res, next) => {
    userService.getAllClients(req, next);
}