const app = require('./app');
const mongoose = require('mongoose');
const port = process.env.PORT;

const DB = process.env.DATABASE;
mongoose.connect(DB).then(() => console.log('DB connection successful'));

app.listen(port, () => {
  console.log(`app listening to port ${port}`);
});
