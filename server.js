/* eslint-disable @typescript-eslint/no-var-requires */
function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}
const express = require('express');
const app = express();
app.use(requireHTTPS);
app.use(express.static('./dist/mini-app-angular'));
app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/mini-app-angular/' });
});
// eslint-disable-next-line no-undef
app.listen(process.env.PORT || 8080);
