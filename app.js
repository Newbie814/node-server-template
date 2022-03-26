import express from 'express';
const app = express();

const port = 3000;

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({ message: 'wtf' });
});

app.post('/', (req, res) => {
  res.status(200).send({ message: "I don't know, man" });
});

app.put('/', (req, res) => {});

app.delete('/', (req, res) => {});

app.post('/', (req, res) => {});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
