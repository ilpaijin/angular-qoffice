Qoffice bundle
===========

Trying to find out how to structure an external module to manage the new Qoffice FrontEnd. 

##Require

* bower

```shell
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

```dir
app/                            -- main root dir
  bundles/                      -- bundles dir
    ilpaijin/                   -- namespace
      qoffice/                  -- module name
        Qoffice.js              -- module file
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
####Simply requiring it as a dependency
```js
//app/App.js
var mainApp = angular.module('mainApp', ['...', 'ilpaijin.qoffice']);
``` 
####and load the script files
```html
<!-- Ilpaijin Qoffice -->
<script src="app/bundles/ilpaijin/qoffice/src/Qoffice.js"></script>
<script src="app/bundles/ilpaijin/qoffice/src/controllers/QofficeMainCtrl.js"></script>
```


##MainModuleFile
```js
//app/bundles.ilpaijin/qoffice/src/Qoffice.js
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
```js
//app/bundles/ilpaijin/qoffice/src/controllers/QofficeMainCtrl.js
"use strict";

angular.module('ilpaijin.qoffice').controller('QofficeMainCtrl', ['$scope', '$rootScope',

    function($scope, $rootScope) {

    }
]);
```