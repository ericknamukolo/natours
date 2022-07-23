const app = require('./app');
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`app listening to port ${port}`);
});
