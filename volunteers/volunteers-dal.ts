import mongoose from 'mongoose';

const volunteerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  internships: [String],
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

export default Volunteer;
