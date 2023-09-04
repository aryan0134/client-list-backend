const express = require('express')
const {createClients,getClients,getClient,deleteClients,updateClients} = require('../controllers/casesControllers')

const router = express.Router()



//GET all Clients(for users)
router.get('/', getClients )


//GET single Clients
router.get('/:id', getClient )

//POST a new Clients
router.post('/' , createClients )

//DELETE a Clients
router.delete('/:id' , deleteClients )

//UPDATE a Clients
router.patch('/:id' , updateClients )



module.exports = router