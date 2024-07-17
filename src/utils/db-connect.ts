import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://VolunteerCoordination:SariG@volunteercoordinationcl.b9u8ddc.mongodb.net/?retryWrites=true&w=majority&appName=VolunteerCoordinationCluster');
    console.log('MongoDB connected');
  } catch (error) {
    if (error instanceof Error) {
      console.error('MongoDB connection failed:', error.message);
    } else {
      console.error('MongoDB connection failed:', error);
    }
  }
};

export default connectDB;
