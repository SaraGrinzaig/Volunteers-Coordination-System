import express from 'express';
import connectDB from './utils/db-connect';
import helpRequestsApi from './help requests/help-requests-api';
import volunteersApi from './volunteers/volunteers-api';

const app = express();

connectDB();

app.use(express.json());

app.use('/api/help-requests', helpRequestsApi);
app.use('/api/volunteers', volunteersApi);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
