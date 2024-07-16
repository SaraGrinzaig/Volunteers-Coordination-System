import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://VolunteerCoordination:SariG@cluster0.mongodb.net/myDatabaseName?retryWrites=true&w=majority');
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
