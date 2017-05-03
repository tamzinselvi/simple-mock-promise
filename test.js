var chai = require("chai");
var spies = require("chai-spies");
chai.use(spies);

var mockPromise = require('./index');

describe('mockPromise', function() {
  it('crazy chain', function() {
    var data = {};

    var nonMainHandler = chai.spy();
    var mainHandler = chai.spy();

    mockPromise('then', data)
      .catch(nonMainHandler)
      .finally(nonMainHandler)
      .catch(nonMainHandler)
      .then(mainHandler)
      .catch(nonMainHandler)
      .then(nonMainHandler)
      .finally(nonMainHandler);

    chai.expect(nonMainHandler).not.to.have.been.called();
    chai.expect(mainHandler).to.have.been.called.with(data);
  });
});
