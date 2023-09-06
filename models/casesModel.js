const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const casesSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    maritalStatus: {
        type: String,
        enum: ['single' , 'married' , 'separated' , 'divorced' , 'widow(er)' , 'other'],
    },
    visaType: {
        type: String,
        enum: ['study' , 'work' , 'visitor'],
        required: true
    },
    office: {
        type: String,
        enum: ['tci immigration' , 'town centre immigration' ],
        required: true
    },
    caseStatus: {
        type: String,
        enum: ['to do' , 'doing' , 'processing' , 'done'],
        required: true
    },
    dob:{
        type: String
    },
    placeOfBirth:{
        type: String
    },
    sex:{
        type: String,
        enum: ['male' , 'female' ]
    },
    address:{
        type: String
    },
    city:{
        type: String
    },
    state:{
        type: String
    },
    pincode:{
        type: String
    },
    phoneNumber:{
        type: String
    },
    passportNumber:{
        type: String
    },
    passportDateIssue:{
        type: String
    },
    passportDateExpiry:{
        type: String
    },
    tenthScore:{
        type: String
    },
    tenthScoreSchema:{
        type: String
    },
    tenthBoard:{
        type: String
    },
    tenthSchoolName:{
        type: String
    },
    tenthSchoolAddress:{
        type: String
    },
    tenthPassingDate:{
        type: String
    },
    twelthScore:{
        type: String
    },
    twelthScoreSchema:{
        type: String
    },
    twelthBoard:{
        type: String
    },
    twelthSchoolName:{
        type: String
    },
    twelthSchoolAddress:{
        type: String
    },
    twelthPassingDate:{
        type: String
    },
    workExperience:{
        type: String
    },
    status:{
        type: String
    },
    responsibility:{
        type: String
    },
    remarks:{
        type: String
    }

    
} , { timestamps: true });

module.exports = mongoose.model('Cases', casesSchema)