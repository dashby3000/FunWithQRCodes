// boot/qr.js
var qr = require('qr-image');
module.exports = function(app) {
  app.get('/get-data-as-qr-code.svg', function(req, res) {
    res.type('svg');
    qr
      .image(new Date().toString(), { type: 'svg' })
      .pipe(res);
  });
}
