/* eslint-env node, mocha */
var chai = require('chai');
var sinon = require('sinon');
chai.use(require('sinon-chai'));
var expect = chai.expect;

describe('plugin', function() {
  beforeEach(function() {
    this.robot = {
      respond: sinon.spy(),
      hear: sinon.spy()
    };
    return require('../src/plugin')(this.robot);
  });

  it('registers a respond listener', function() {
    expect(this.robot.respond).to.have.been.calledWith(/test$/i);
  });
});
