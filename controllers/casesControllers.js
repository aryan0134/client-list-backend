const Cases = require('../models/casesModel')
const mongoose = require('mongoose')

//GET all cases(for particular users)
const getClients = async (req, res) => {
    const clients = await Cases.find({}).sort({createdAt: -1})

    res.status(200).json(clients)
}

//GET a single client
const getClient = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: 'client not found' })
    }

    const clients = await Cases.findById(id)

    if(!clients){
        return res.status(404).json({ error: 'client not found' })
    }

    res.status(200).json(clients)
}

//POST a new client
const createClients = async (req, res) => {
    const {firstName,lastName,maritalStatus,visaType,office,caseStatus,dob,placeOfBirth,sex,address,city,state,pincode,phoneNumber,passportNumber,passportDateIssue,passportDateExpiry,tenthScore,tenthScoreSchema,tenthBoard,tenthSchoolName,tenthSchoolAddress,tenthPassingDate,twelthScore,twelthScoreSchema,twelthBoard,twelthSchoolName,twelthSchoolAddress,twelthPassingDate,workExperience} = req.body


    try{
        const clients = await Cases.create({firstName,lastName,maritalStatus,visaType,office,caseStatus,dob,placeOfBirth,sex,address,city,state,pincode,phoneNumber,passportNumber,passportDateIssue,passportDateExpiry,tenthScore,tenthScoreSchema,tenthBoard,tenthSchoolName,tenthSchoolAddress,tenthPassingDate,twelthScore,twelthScoreSchema,twelthBoard,twelthSchoolName,twelthSchoolAddress,twelthPassingDate,workExperience})
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

    const clients = await Cases.findOneAndDelete({_id: id})

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

    const clients = await Cases.findOneAndUpdate({_id: id},{...req.body})

    if(!clients){
        return res.status(404).json({ error: 'client not found' })
    }

    res.status(200).json(clients)
}

module.exports = {createClients,getClients,getClient,deleteClients,updateClients}