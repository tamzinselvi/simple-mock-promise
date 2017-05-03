var stub = function() {
  return {
    then: stub,
    catch: stub,
    finally: stub
  }
};

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.mockPromises = factory();
  }
})(this, function factory() {
  return function(type, arg) {
    type = type || 'then';

    var mainHandler = function(f) {
      f.call(f, arg)

      return stub()
    }

    var genericHandler = function() {
      var chain = {
        then: genericHandler,
        catch: genericHandler,
        finally: genericHandler
      };

      chain[type] = mainHandler;

      return chain;
    }

    return genericHandler();
  }
});
