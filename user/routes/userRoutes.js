const express = require("express")
const router = express();

const UserController = require("../controller/userController")

router.get('/get-users', UserController.getUser)
router.get('/get-users-byId', UserController.getUserById)

module.exports = router;