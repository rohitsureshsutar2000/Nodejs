const express = require("express")
const router = express();

const ClientController = require("../controller/clientController")

router.post('/create-client', ClientController.createClient)
router.get('/get-clients', ClientController.getClient)
// router.get('/get-clients-byId', ClientController.getClientById)
// router.delete('/delete-clients-byId', ClientController.deleteClientById)
// router.delete('/delete-all-clients', ClientController.deleteAllClient)
// router.put('/update-client', ClientController.updateClientDetails)

module.exports = router;