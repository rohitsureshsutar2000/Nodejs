const express = require("express")
const router = express();

const ClientController = require("../controller/clientController")

router.post('/create-client', ClientController.createClient)
router.get('/get-clients', ClientController.getClient)

module.exports = router;