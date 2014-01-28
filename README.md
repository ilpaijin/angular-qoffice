Qoffice bundle
===========

Trying to find out how to structure an external module to manage the new Qoffice FrontEnd. 

##Require

* bower
```
    bower install angular-route
    bower install angular-mocks
    bower install angular-result
```
* nodejs
```shell
    npm install
```

##Bundles structure

    app/bundles/namespace/module

Example:

```js
app/                            -- main root dir
  bundles/                      -- bundles dir
    ilpaijin/                   -- namespace
      qoffice/                  -- module name
        mainModulefile.js
        controllers/
          file.js
          ...
        views/
          file.js
          ...
  controllers/
  ...
    
```

##Adding it to the main app
Simply requiring it as a dependency
```
var mainApp = angular.module('mainApp', ['...', 'ilpaijin.qoffice']);
``` 

##MainModuleFile
```
angular
    .module('ilpaijin.qoffice', [])
    .config([
        '$routeProvider', 
        function config($routeProvider) 
        {
            $routeProvider.when('/qoffice', 
            {
                templateUrl: 'app/bundles/ilpaijin/qoffice/views/base.php',
                controller: 'QofficeMainCtrl'
            });
        }]);
```

##A controller
```
"use strict";

angular.module('ilpaijin.qoffice').controller('QofficeMainCtrl', ['$scope', '$rootScope',

    function($scope, $rootScope) {

    }
]);
```