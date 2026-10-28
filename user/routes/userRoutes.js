const express = require("express")
const router = express();

const UserController = require("../controller/userController")

router.get('/get-users', UserController.getUser)

module.exports = router;