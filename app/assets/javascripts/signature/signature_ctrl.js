
angular
    .module('Signature')
    .controller('SignatureCtrl', SignatureCtrl);

SignatureCtrl.$inject = ['$scope'];

function SignatureCtrl($scope) {

    // Initialize components
    $scope.model = [
        {
            label: 'Surname',
            value: 'surname',
            color: '#fff',
            fontSize: 14,
            fontFamily: 'Arial'
        },
        {
            label: 'Lastname',
            value: 'lastname',
            color: '#fff',
            fontSize: 16,
            fontFamily: 'Tahoma'
        },
        {
            label: 'Title',
            value: 'title',
            color: '#fff',
            fontSize: 18,
            fontFamily: 'Arial'
        },
        {
            label: 'Zk Phone Number',
            value: 'zk',
            color: '#fff',
            fontSize: 20,
            fontFamily: 'Arial'
        },
        {
            label: 'Company Name',
            value: 'company',
            color: '#fff',
            fontSize: 14,
            fontFamily: 'Arial'
        },
        {
            label: 'Address',
            value: 'address',
            color: '#fff',
            fontSize: 14,
            fontFamily: 'Arial'
        },
        {
            label: 'City, ZIP Code',
            value: 'zip',
            color: '#fff',
            fontSize: 14,
            fontFamily: 'Arial'
        }
    ];
    $scope.selected = null;

    // Initialize fonts
    $scope.fonts = ['Arial', 'Tahoma'];
    $scope.selectedFont = '';

    // Initialize sizes
    $scope.sizes = [12, 14, 16, 18, 20];
    $scope.selectedSize = '';

    // Initialize color settings
    $scope.selectedColor = '#000';

    var id = 10;

    initialize();

    function initialize() {
    }

    $scope.selectFont = function () {
       $scope.selected.fontFamily = $scope.selectedFont;
    }

    $scope.selectSize = function () {
       $scope.selected.fontSize = $scope.selectedSize;
    }

    $scope.selectCallback = function(index, item, external, type) {
        $scope.selected = item;
        $scope.selectedFont = item.fontFamily;
        $scope.selectedSize = item.fontSize;
        $scope.selectedColor = item.color;
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
