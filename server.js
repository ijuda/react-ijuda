const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));
app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log('Listening on port', server.address().port);
});
