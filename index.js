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
global.tokens = [];

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(200).json({get: "200"});
});
app.post('/', (_request, response) => {
  response.status(300).json({post: "300"});
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
  console.log('Online');
});
