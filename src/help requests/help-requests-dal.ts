import mongoose from 'mongoose';

const helpRequestSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['open', 'in progress', 'closed'],
    default: 'open',
  },
  peopleCount: {
    type: Number,
    required: true,
    min: 1,
  },
  priorityCode: {
    type: String,
    enum: ['low', 'medium', 'high'],
    required: true,
  },
  volunteerCode: {
    type: String,
    default: null,
  },
}, {
  timestamps: true,
});

const HelpRequest = mongoose.model('HelpRequest', helpRequestSchema);

export default HelpRequest;
