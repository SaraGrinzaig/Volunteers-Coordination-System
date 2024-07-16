import mongoose from 'mongoose';

const helpRequestSchema = new mongoose.Schema({
  location: String,
  description: String,
  phone: String,
  status: String,
  peopleCount: Number,
  priorityCode: String,
  volunteerCode: String,
});

const HelpRequest = mongoose.model('HelpRequest', helpRequestSchema);

export default HelpRequest;
