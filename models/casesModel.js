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
        required: true
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
        type: String,
        required: true
    },
    placeOfBirth:{
        type: String,
        required: true
    },
    sex:{
        type: String,
        enum: ['male' , 'female' ],
        required: true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    pincode:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    passportNumber:{
        type: String,
        required: true
    },
    passportDateIssue:{
        type: String,
        required: true
    },
    passportDateExpiry:{
        type: String,
        required: true
    },
    tenthScore:{
        type: String,
        required: true
    },
    tenthScoreSchema:{
        type: String,
        required: true
    },
    tenthBoard:{
        type: String,
        required: true
    },
    tenthSchoolName:{
        type: String,
        required: true
    },
    tenthSchoolAddress:{
        type: String,
        required: true
    },
    tenthPassingDate:{
        type: String,
        required: true
    },
    twelthScore:{
        type: String,
        required: true
    },
    twelthScoreSchema:{
        type: String,
        required: true
    },
    twelthBoard:{
        type: String,
        required: true
    },
    twelthSchoolName:{
        type: String,
        required: true
    },
    twelthSchoolAddress:{
        type: String,
        required: true
    },
    twelthPassingDate:{
        type: String,
        required: true
    },
    workExperience:{
        type: String,
        required: true
    },

    
} , { timestamps: true });

module.exports = mongoose.model('Cases', casesSchema)