const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const { logger, myStream } = require('./utils/logger');
const connectDb = require('./database');

const apiRouter = require('./routes/api');
const threadRouter = require('./routes/thread');
const messageRouter = require('./routes/message');
const threadResRouter = require('./routes/threadReply');
const keysRouter = require('./routes/keys');

async function createApp(config) {
  await connectDb(config);
  const app = express();
  app.use(helmet());
  app.use(morgan('combined', { stream: myStream }));
  app.use(cors());
  app.use(express.json());
  app.use(urlencoded({ extended: true }));

  app.use('/api', apiRouter);
  app.use('/db/thread', threadRouter);
  app.use('/db/message', messageRouter);
  app.use('/threadreply', threadResRouter);
  app.use('/keys', keysRouter);

  return app;
}

module.exports = createApp;
