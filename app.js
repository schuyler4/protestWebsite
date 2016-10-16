const koa = require('koa');
const serve = require('koa-static');
const app = koa();
const Pug = require('koa-pug');
const http = require('http');
server = http.createServer(app.callback());
const router = require('koa-router')();
const pug = new Pug({
  viewPath: './views',
  debug: false,
  pretty: false,
  compileDebug: false,
  app: app 
})

app.use(serve('./public'));

app.use(function *(next) {
  this.render('index');
});

const io = require('socket.io')(server);
let messages = [];

io.on('connection', function(socket){
  socket.emit('starting messages', messages)
  socket.on('message', function(message) {
    console.log(message);
    messages.push(message);
    io.emit('message', message);
  });
});

server.listen(3000, function() {
  console.log('listening on port 3000');
});
