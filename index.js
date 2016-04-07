/**
 * Description
 *   hubot plugin template writtern in plain Javascript, compatible with webbybot.
 *
 * Commands:
 *   hubot test - return pong
 *
 * Author:
 *   webby team
 */
module.exports = function(robot) {
  robot.respond(/test$/i, function(res) {
    res.send('pong');
  });
};
