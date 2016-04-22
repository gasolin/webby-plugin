//
// Description
//   hubot plugin template writtern in plain Javascript, compatible with webbybot.
//
// Commands:
//   hubot hello - Reply with world!
//
// Author:
//   webby team
//
module.exports = function(robot) {
  robot.respond(/hello$/i, function(res) {
    res.send('world!');
  });
};
