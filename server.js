const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const PORT = 5000;
const queries = require("./queries");
// const connection = queries.connection;

app.use(express.static(path.join(__dirname, "./frontend/build")));

// GET ALL COWS
app.get('/api/getAllNames', (req, res) => {
  // run your query here
  queries.getAllNames((err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log('result of getAllNames: ', result);
      res.send(result);
    }
  });
  // res.send("hello from the server!");
});

// POST A COW
app.post('api/postCow', (req, res) => {
  queries.makeACow(req.body, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result);
    }
  })
})

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
