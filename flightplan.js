var plan = require('flightplan');

var tmpDir = 'blog-client-' + new Date().getTime();
var user = 'deploy';

plan.target('production', {
  host: '138.68.178.32',
  port: 5555,
  username: user,
  agent: process.env.SSH_AUTH_SOCK
});

plan.local(function(local) {
  local.log('Copy files to remote host');
  var filesToCopy = local.exec('git ls-files', {silent: true});
  local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

plan.remote(function(remote) {
  remote.log('Moving folder to web root');
  remote.exec('cp -R /tmp/' + tmpDir + ' ~');
  remote.rm('-rf /tmp/' + tmpDir);

  remote.log('Installing dependencies');
  remote.exec('npm --prefix ~/' + tmpDir + ' install ~/' + tmpDir);

  remote.log('Build');
  remote.exec('npm --prefix ~/' + tmpDir + ' run build');

  remote.log('Reload application');
  remote.exec('ln -snf ~/blogster/versions/' + tmpDir + ' ~/blogster/current');
  remote.exec('(cd ~/blogster/current && pm2 start pm2.config.js --env production)');

  remote.log('Deploy process completed.');
});
