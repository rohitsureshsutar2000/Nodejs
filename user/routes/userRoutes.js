const express = require("express")
const router = express();

const UserController = require("../controller/userController")

router.get('/get-users', UserController.getUser)
router.get('/get-users-byId', UserController.getUserById)
router.delete('/delete-users-byId', UserController.deleteUserById)
router.delete('/delete-all-users', UserController.deleteAllUser)

module.exports = router;