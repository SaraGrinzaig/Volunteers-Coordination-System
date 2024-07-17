import mongoose from 'mongoose';

const volunteerSchema = new mongoose.Schema({
  _id: String,
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  internships: [String],
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

export default Volunteer;
