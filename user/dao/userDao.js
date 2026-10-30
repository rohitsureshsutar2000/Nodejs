const { Users } = require("../../database/models")

exports.getAllUser = async (req, next) => {
    let data = await Users.findAll()

    if (data) {
        next(null, data)
    } else {
        next('data not found')
    }

}

exports.getUserById = async (req, next) => {
    const { id } = req.query
    let data = await Users.findOne({
        where: { id: id },
        attributes: ["name"] // only return mentioned columns
    })

    if (data) {
        next(null, data)
    } else {
        next()
    }

}


exports.deleteAllUsers = async (req, next) => {
    let data = await Users.destroy({
        where: {}
    })

    if (data) {
        next(null, data)
    } else {
        next()
    }

}

exports.deleteById = async (req, next) => {
    const { id } = req.query
    let data = await Users.destroy({
        where: { id: id }
    })

    if (data) {
        next(null, data)
    } else {
        next()
    }

}