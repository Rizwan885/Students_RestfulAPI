const express = require('express');
const studentsRouter = require('./routers/student');

const app = express();
const port = process.env.Port || 8000;
app.use(express.json());
// app.post('/students', (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// });

//1:

app.use(studentsRouter);

app.listen(port, () => {
  console.log(`Connection is setup at ${port}`);
});
