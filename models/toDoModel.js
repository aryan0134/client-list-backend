const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    taskName: {
        type: String,
        required: true
    },
    assignee: {
        type: String,
        enum: ['Vinod' , 'Suman' , 'Aryan' , 'Ayusha' , 'Raman'],
        required: true
    },
    assignedBy: {
        type: String,
        enum: ['Vinod' , 'Suman' , 'Aryan' , 'Ayusha' , 'Raman'],
        required: true
    },
    dueDate: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['Low' , 'Medium' , 'High'],
        required: true
    },
    Status: {
        type: String,
        enum: ['to do' , 'doing' , 'done'],
        required: true
    }   
} , { timestamps: true });

module.exports = mongoose.model('ToDo', toDoSchema)