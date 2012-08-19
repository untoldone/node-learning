var kue = require('kue');

kue.app.listen(3001);

jobs = kue.createQueue();
jobs.process('email', function(job, done) {
  setTimeout(function () {
    console.log("Sent that email to " + job.data.to);
    done();
  }, 5000);
});
