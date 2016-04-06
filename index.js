/**
 * Description
 *   hubot plugin template writtern in plain Javascript, compatible with webbybot.
 *
 * Dependencies:
 *
 * Configurations:
 * Commands:
 *   hubot test - return pong
 * Author:
 */
module.exports = function(robot) {
  robot.respond(/test$/i, function(res) {
    res.send('pong');
  });
}
