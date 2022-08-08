const express = require('express');
// const bodyParser = require('body-parser');
// const talkerRouter = require('./routes/talkerRouter');
// const loginRouter = require('./routes/loginRouter');
const cors = require('cors')
const app = express()

// app.use(cors())
app.use(cors({
  origin: '*'
}));
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const list = [
  {test0: "mock0"},
  {test1: "mock1"},
  {test2: "mock2"},
  {test3: "mock3"},
];

const obj = {
  "code": "200",
  list
}

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {

  response.status(200).json(obj);
});

app.post('/', (_request, response) => {
  return response.status(204).end();
});


app.post('/auth', (request, response) => {
  console.log(request.headers.authorization)
  const auth = request.headers.authorization
  if (!auth) return response.status(204).end();

  const validToken = "Basic cGVkcm86YnJpdG8="
  if (auth !== validToken) return response.status(204).end();

  return response.status(200).json({...obj, "auth": true});
});


app.put('/', (_request, response) => {
  response.status(400).json({put: "400"});
});

app.delete('/', (_request, response) => {
  response.status(500).json({delete: "500"});
});


// app.use('/talker', talkerRouter);
// app.use('/login', loginRouter);

app.listen(process.env.PORT || PORT, () => {
  console.log('Online on ', process.env.PORT || PORT);
});
