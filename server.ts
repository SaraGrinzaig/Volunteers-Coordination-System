import express from 'express';
import connectDB from './utils/db-connect';
// import helpRequestRoutes from './help requests/help-requests-api';
// import volunteerRoutes from './volunteers/volunteers-api';

const app = express();
const PORT = process.env.PORT || 5000;

// חיבור ל-MongoDB
connectDB();

// Middlewares
app.use(express.json());

// Routes
// app.use('/api', helpRequestRoutes);
// app.use('/api', volunteerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
