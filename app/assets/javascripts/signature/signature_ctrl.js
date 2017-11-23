
angular
    .module('Signature')
    .controller('SignatureCtrl', SignatureCtrl);

SignatureCtrl.$inject = ['$scope'];

function SignatureCtrl($scope) {

    // Initialize model
    $scope.model = [[], []];
    var id = 10;

    initialize();

    function initialize() {
        angular.forEach(['all', 'move', 'copy', 'link', 'copyLink', 'copyMove'], function(effect, i) {
            var container = {items: [], effectAllowed: effect};
            for (var k = 0; k < 7; ++k) {
                container.items.push({label: effect + ' ' + id++, effectAllowed: effect});
            }
            $scope.model[i % $scope.model.length].push(container);
        });
    }

    $scope.dragoverCallback = function(index, external, type, callback) {
        $scope.logListEvent('dragged over', index, external, type);
        // Invoke callback to origin for container types.
        if (type == 'container' && !external) {
            console.log('Container being dragged contains ' + callback() + ' items');
        }
        return index < 10; // Disallow dropping in the third row.
    };

    $scope.dropCallback = function(index, item, external, type) {
        $scope.logListEvent('dropped at', index, external, type);
        // Return false here to cancel drop. Return true if you insert the item yourself.
        return item;
    };

    $scope.logEvent = function(message) {
        console.log(message);
    };

    $scope.logListEvent = function(action, index, external, type) {
        var message = external ? 'External ' : '';
        message += type + ' element was ' + action + ' position ' + index;
        console.log(message);
    };

    $scope.$watch('model', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);
};
