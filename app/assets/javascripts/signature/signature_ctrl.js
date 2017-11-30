
angular
    .module('Signature')
    .controller('SignatureCtrl', SignatureCtrl);

SignatureCtrl.$inject = ['$scope', '$sce', 'signatureService'];

function SignatureCtrl($scope, $sce, signatureService) {

    // Initialize components
    $scope.model = [
        {
            label: 'Surname',
            value: 'surname',
            field: 'Bob',
            container: 0,
            color: '#000000',
            fontSize: 14,
            fontFamily: 'Arial'
        },
        {
            label: 'Lastname',
            value: 'lastname',
            field: 'Smith',
            container: 0,
            color: '#000000',
            fontSize: 16,
            fontFamily: 'Tahoma'
        },
        {
            label: 'Title',
            value: 'title',
            field: 'Senior Developer',
            container: 1,
            color: '#000000',
            fontSize: 18,
            fontFamily: 'Arial'
        },
        {
            label: 'Zk Phone Number',
            value: 'zk',
            field: '(480) 662 3333',
            container: 2,
            color: '#000000',
            fontSize: 20,
            fontFamily: 'Arial'
        },
        {
            label: 'Company Name',
            value: 'company',
            field: 'ABC Company',
            container: 3,
            color: '#000000',
            fontSize: 14,
            fontFamily: 'Arial'
        },
        {
            label: 'Address',
            value: 'address',
            field: '66345 West Street, New York',
            container: 4,
            color: '#000000',
            fontSize: 14,
            fontFamily: 'Arial'
        },
        {
            label: 'City, ZIP Code',
            value: 'zip',
            field: '10010',
            container: 5,
            color: '#000000',
            fontSize: 14,
            fontFamily: 'Arial'
        }
    ];
    $scope.selected = {};
    $scope.html = '';

    // Initialize fonts
    $scope.fonts = ['Arial', 'Arial Black', 'Tahoma', 'Trebuchet MS', 'Verdana', 'Courier', 'Courier New', 'Georgia', 'Times', 'Times New Roman'];
    $scope.selectedFont = '';

    // Initialize sizes
    $scope.sizes = [12, 14, 16, 18, 20];
    $scope.selectedSize = '';

    // Initialize color settings
    $scope.selectedColor = '#000';

    $scope.html = '';

    // Change status
    $scope.changed = false;
    $scope.modelList = [];

    initialize();

    function initialize() {
        $scope.modelList = [];
        angular.forEach($scope.model, function(item, key) {
            if ($scope.modelList[item.container] === undefined || !angular.isArray($scope.modelList[item.container])) {
                $scope.modelList[item.container] = [angular.copy(item)];
            } else {
                $scope.modelList[item.container].push(angular.copy(item));
            }
        });
    }

    $scope.selectCallback = function(item) {
        $scope.selected = item;
    }

    $scope.moveCallback = function(index, item, external, type) {
        $scope.modelClone.splice(index, 1);
        $scope.changed = true;
    }

    $scope.changeCallback = function() {
        $scope.changed = true;
    }

    $scope.cancelChanges = function() {
        initialize();
        $scope.changed = false;
        $scope.selected = {};
        $scope.$apply();
    }

    $scope.saveSignature = function() {
        signatureService.postSignature({data: JSON.stringify($scope.modelClone), template: $scope.html.toString()})
            .then(function(response) {
                $scope.changed = false;
            });
    }

    $scope.$watch('modelList', function(modelList) {
        //Generate preview HTML
        $scope.html = '';
        angular.forEach(modelList, function(container) {
            $scope.html += '<div>';
            angular.forEach(container, function(item) {
                $scope.html += '<span style="font-family:' + item.fontFamily 
                            + ';font-size:' + item.fontSize + 'px'
                            + '; color:' + item.color
                            + '; font-weight:' + (item.bold ? 'bold' : 'normal')
                            + '; text-decoration:' + (item.underline ? 'underline' : 'none')
                            + '; font-style:' + (item.italic ? 'italic' : 'normal')
                            + ';">'
                            + item.field + '</span>';
            });
            $scope.html += '</div>';
        });

        $scope.html += '<p>This message is solicitation. Feel tree to manage your subscriptions to opt out of further emails</p>';

        $scope.html = $sce.trustAsHtml($scope.html);
    }, true);
};
