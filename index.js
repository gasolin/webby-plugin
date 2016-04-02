/**
 * Description
 *   Enables hubot to suggest places for lunchtime. Powered by Yelp.
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
  }
}
