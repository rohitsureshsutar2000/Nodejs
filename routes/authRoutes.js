const express = require("express")
const router = express();

const UserController = require("../controllers/userController")

router.post('/create-user', UserController.createUser)

module.exports = router;