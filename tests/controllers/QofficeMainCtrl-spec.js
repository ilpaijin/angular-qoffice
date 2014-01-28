"use strict";

describe("Controller: QofficeMainCtrl", function()
{
    var scope;

    beforeEach(function()
    {
        angular.mock.module('ilpaijin.qoffice', function($provide)
        {
            $provide.value('$admin', {});
            $provide.value('$consts', {});
        });

        angular.mock.inject(function($rootScope, $controller)
        {
            scope = $rootScope.$new();

            $controller('QofficeMainCtrl', {$scope: scope});
        });
    });


    it("Should return Hello world!", function()
    {
        expect(scope.text).toBe('Hello World!');
    });
});