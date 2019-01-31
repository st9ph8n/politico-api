const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createPartiesRoute = require('./routes/parties');
const createOfficesRoute = require('./routes/offices');

const app = express();

app.use(logger('dev'));
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/parties', createPartiesRoute());
app.use('/api/v1/offices', createOfficesRoute());

app.use('/', (req, res) => {
  res.json({
    status: 200,
    message: 'Welcome to Politico',
  });
});

module.exports = app;
