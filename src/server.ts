require('dotenv').config();
import express from 'express';
const moongoose = require('mongoose');
import { router } from './Routes/MutantRoutes';
const app = express();

app.use(express.json());
app.use('/api', router);
app.get('/', (req, res) => {
  res.send('Hello World');
});
moongoose
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
