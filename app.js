const koa = require('koa');
const serve = require('koa-static');
const app = koa();
const Pug = require('koa-pug');
const http = require('http');
server = http.createServer(app.callback());
const io = require('socket.io')(server);
const pug = new Pug({
  viewPath: './views',
  debug: false,
  pretty: false,
  compileDebug: false,
  app: app // equals to pug.use(app) and app.use(pug.middleware)
})

app.use(serve('./public'));

io.on('connection', function(socket){
  console.log('a user connected');
});

app.use(function *(next) {
  this.render('index');
});

server.listen(3000, function() {
  console.log('listening on port 3000');
});
