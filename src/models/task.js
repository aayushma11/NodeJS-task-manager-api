const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim:true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},{
    timestamps:true
})

taskSchema.pre('save', async function(next) {
    const task = this
    console.log('Just pre fucking checking!!');
    next()
})
const Task = mongoose.model('Task', taskSchema)

module.exports = Task

// const task = new Task({
//     description: '   Preparing    lunch ',
//     completed: true
// })

// task.save().then(() => {
//     console.log(task);
// }).catch((error) => {
//     console.log('Error', error);
// })