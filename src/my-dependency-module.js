define('my-dependency-module', ['my-core-module'], function (core) {

    var message = function(name) {
        return core.hello(name);
    }

    return {
        message : message
    };

});