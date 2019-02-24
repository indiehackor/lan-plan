const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist'));
});

app.get('/.well-known/acme-challenge/uLyioDO6Jxk-RrxtkjQJW8EsNOzyYKjnW3fn2Ck1h5k', function (req, res) {
  res.send('uLyioDO6Jxk-RrxtkjQJW8EsNOzyYKjnW3fn2Ck1h5k.py7W8Is9OWzzLoboYjmqVlW5i0kE-H-SFqZQDnh8oto');
});

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});
