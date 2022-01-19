const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const { logger, myStream } = require('./utils/logger');

const apiRouter = require('./routes/api');
const threadRouter = require('./routes/thread');
const messageRouter = require('./routes/message');
const threadResRouter = require('./routes/threadReply');
const keysRouter = require('./routes/keys');

async function createApp() {
  const app = express();
  app.use(helmet());
  app.use(morgan('combined', { stream: myStream }));
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // TODO: Move this to a middleware
  if (process.env.NODE_ENV === 'production') {
    app.use('/build', express.static(path.join(__dirname, '../build')));
    app.get('/', (req, res) =>
      res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
    );
  }

  app.use('/api', apiRouter);
  app.use('/db/thread', threadRouter);
  app.use('/db/message', messageRouter);
  app.use('/threadreply', threadResRouter);
  app.use('/keys', keysRouter);

  // TODO: Move this to specific err handling
  app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred ' },
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj);
    return res.status(errorObj.status).json(errorObj.message);
  });

  return app;
}

module.exports = createApp;
