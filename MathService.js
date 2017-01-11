require('seneca')()
  .use(require('./math'))
  .listen(3000)