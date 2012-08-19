var http = require('http');
var kue = require('kue');
var jobs = kue.createQueue();
http.createServer(function (req, res) {
  var start = new Date;
  console.log(start)
  setTimeout(function () {
    var end = new Date;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var t = end - start;
    console.log('end: ' + end)
    res.end('Hello World: ' + t + '\n');
    jobs.create('email', {
      title: 'hello world',
      to: 'michael.m.wasser@gmail.com'
    }).save();
  }, 5000);
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/')
