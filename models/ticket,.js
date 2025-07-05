import mongoose from 'mongoose';
import { describe } from 'node:test';
import { title } from 'process';

const ticketSchema = new mongoose.Schema({
    title: String,
    describe: String,
    status: { type: String, default: 'TODO' },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },

    priority:String,
    deadline:Date,
    helpfulNotes:String,
    relatedSkills:[String],
    createdAt: { type: Date, default: Date.now }

})

export default mongoose.model('Ticket', ticketSchema);