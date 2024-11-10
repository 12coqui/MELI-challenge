require('dotenv').config();
import express, { Request, Response } from 'express';
const mongoose = require('mongoose');
const routes = require('./Routes/MutantRoutes');
const app = express();

app.use(express.json());
app.use('/api', routes);
app.get('/', (_req: Request, res: Response) => {
  res.send('<h1>Leandro Serra - MELI Mutant Challenge</h1>');
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
