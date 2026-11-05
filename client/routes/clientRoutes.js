const express = require("express")
const router = express();

const UserController = require("../controller/userController")

router.post('/create-user', UserController.createUser)
router.get('/get-users', UserController.getUser)
router.get('/get-users-byId', UserController.getUserById)
router.delete('/delete-users-byId', UserController.deleteUserById)
router.delete('/delete-all-users', UserController.deleteAllUser)
router.put('/update-user', UserController.updateUserDetails)

module.exports = router;