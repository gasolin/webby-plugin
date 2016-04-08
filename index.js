/* globals: fs, path */
var fs = require('fs');
var path = require('path');

module.exports = function(robot, scripts) {
  var scriptsPath = path.resolve(__dirname, 'src');
  fs.exists(scriptsPath, function(exists) {
    if (exists) {
      var ref = fs.readdirSync(scriptsPath);
      var indexOf = Array.prototype.indexOf;
      for (var i = 0, len = ref.length; i < len; i++) {
        var script = ref[i];
        if (scripts != null && indexOf.call(scripts, '*') < 0) {
          if (indexOf.call(scripts, script) >= 0) {
            robot.loadFile(scriptsPath, script);
          }
        } else {
          robot.loadFile(scriptsPath, script);
        }
      }
    }
  });
};
