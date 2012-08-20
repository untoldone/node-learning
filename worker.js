var kue = require('kue');
var redis = require('redis');
var config = require('config');

kue.redis.createClient = function () {
  var client = redis.createClient(6379, config.host);
  return client;
}

kue.app.listen(3001);

jobs = kue.createQueue();
jobs.process('email', function(job, done) {
  setTimeout(function () {
    console.log("Sent that email to " + job.data.to);
    done();
  }, 5000);
});
