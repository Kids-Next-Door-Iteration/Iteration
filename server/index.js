require('dotenv').config();
const createApp = require('./app');

const port = process.env.PORT;

createApp().then((app) => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
