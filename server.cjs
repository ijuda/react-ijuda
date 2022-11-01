const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 3000);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const server = app.listen(app.get('port'), () => {
  console.log('Listening on port', server.address().port);
});
