require('dotenv').config();
import express, { Request, Response } from 'express';
const mongoose = require('mongoose');
const router = require('./Routes/MutantRoutes');
const app = express();

app.use(express.json());
app.use('/api', router);
app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World');
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    console.log('Connected to MongoDB');
  })
  .catch((err: any) => {
    console.log(err);
  });
