var qr = require('qr-image');

module.exports = function(MyModel) {
  MyModel.getCode = function(cb) {
    var code = qr.image(new Date().toString(), { type: 'svg' })

    cb(null, code);
  }

  MyModel.remoteMethod('getCode', {
    isStatic: true,
    http: {
      pipe: {
        dest: 'res'
      },
      path: '/code',
      verb: 'GET'
    }
  });

  MyModel.beforeRemote('getCode', function(ctx, user, next) {
    ctx.res.type('svg');
    next();
  });
}
