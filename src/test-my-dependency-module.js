define('test-my-dependency-module',
    ['squire'],

function (Squire) {

    var injector = new Squire();

    var myCoreModuleMock = {
        hello: function(name) {}
    };

    var builder = injector
        .mock('my-core-module', myCoreModuleMock);

    describe('test that my-dependency-module...', function () {
        var myDependencyModule;

        beforeEach(function(done) {
            builder.require(['my-dependency-module'], function (mockedMyDependencyModule) {
                myDependencyModule = mockedMyDependencyModule;
                done();
            });
        });

        it('should call core.hello()', function () {

            spyOn(myCoreModuleMock, 'hello');

            myDependencyModule.message("Albert");

            expect(myCoreModuleMock.hello).toHaveBeenCalledWith("Albert");
        });
        
        // many other "it('should..."

    });
});
