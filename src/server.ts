import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Mutant detector API');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
