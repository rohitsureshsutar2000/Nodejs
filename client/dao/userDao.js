const { Client } = require("../../database/models")

exports.createClient = async (req, res) =>{
    try {
        const data = await Client.create(req.body)
    
        return next(null, data)
    } catch (error) {
         next(error)
    }
}

exports.getAllClients = async (req, next) => {
    let data = await Client.findAll()

    if (data) {
        next(null, data)
    } else {
        next('data not found')
    }

}

// exports.getUserById = async (req, next) => {
//     const { id } = req.query
//     let data = await Client.findOne({
//         where: { id: id },
//         attributes: ["name"] // only return mentioned columns
//     })

//     if (data) {
//         next(null, data)
//     } else {
//         next()
//     }

// }


// exports.deleteAllClient = async (req, next) => {
//     try {
//         let data = await Client.destroy({
//             where: {}
//         })

//         if (data) {
//             next(null, data)
//         } else {
//             next("Error while delete all Client")
//         }

//     } catch (error) {
//         return next(error, data, 500)
//     }

// }

// exports.deleteById = async (req, next) => {
//     const { id } = req.query
//     let data = await Client.destroy({
//         where: { id: id }
//     })

//     if (data) {
//         next(null, data)
//     } else {
//         next()
//     }

// }

// exports.updateUserDetails = async (req, next) => {
//     const { id, name, email, status } = req.body

//     // .update({},{}) it takes two obj 1st take field that what to update, 2nd takes where condition

//     let data = await Client.update({
//         name, email, status
//     },
//         {
//             where: { id: id }
//         })

//     if (data) {
//         next(null, data)
//     } else {
//         next()
//     }

// }