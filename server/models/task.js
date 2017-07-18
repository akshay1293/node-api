const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'peoples'
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', TaskSchema);