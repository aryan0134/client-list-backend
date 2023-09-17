const ToDo = require('../models/toDoModel')
const mongoose = require('mongoose')

//GET all cases(for particular users)
const getClients = async (req, res) => {
    const clients = await ToDo.find({}).sort({createdAt: -1})

    res.status(200).json(clients)
}

//GET a single client
const getClient = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: 'client not found' })
    }

    const clients = await ToDo.findById(id)

    if(!clients){
        return res.status(404).json({ error: 'client not found' })
    }

    res.status(200).json(clients)
}

//POST a new client
const createClients = async (req, res) => {
    const {taskName,assignee,assignedBy,dueDate,priority,status} = req.body


    try{
        const clients = await ToDo.create({taskName,assignee,assignedBy,dueDate,priority,status})
        res.status(200).json(clients)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//DELETE a client
const deleteClients = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: 'client not found' })
    }

    const clients = await ToDo.findOneAndDelete({_id: id})

    if(!clients){
        return res.status(404).json({ error: 'client not found' })
    }

    res.status(200).json(clients)
}

//UPDATE a Client
const updateClients = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: 'client not found' })
    }

    const clients = await ToDo.findOneAndUpdate({_id: id},{...req.body})

    if(!clients){
        return res.status(404).json({ error: 'client not found' })
    }

    res.status(200).json(clients)
}

module.exports = {createClients,getClients,getClient,deleteClients,updateClients}