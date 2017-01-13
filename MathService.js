require('seneca')()
  .use(require('./math'))
  .listen(8080)