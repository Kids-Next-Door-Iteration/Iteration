require('dotenv').config();
const createApp = require('./app');

const port = process.env.PORT;

const config = {
  connectionString: process.env.PG_URI,
};

createApp(config).then((app) => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
