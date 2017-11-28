
angular
    .module('Signature')
    .controller('SignatureCtrl', SignatureCtrl);

SignatureCtrl.$inject = ['$scope', '$sce'];

function SignatureCtrl($scope, $sce) {

    // Initialize components
    $scope.model = [
        {
            label: 'Surname',
            value: 'surname',
            field: 'Bob',
            color: '#000',
            fontSize: 14,
            fontFamily: 'Arial'
        },
        {
            label: 'Lastname',
            value: 'lastname',
            field: 'Smith',
            color: '#000',
            fontSize: 16,
            fontFamily: 'Tahoma'
        },
        {
            label: 'Title',
            value: 'title',
            field: 'Senior Developer',
            color: '#000',
            fontSize: 18,
            fontFamily: 'Arial'
        },
        {
            label: 'Zk Phone Number',
            value: 'zk',
            field: '(480) 662 3333',
            color: '#000',
            fontSize: 20,
            fontFamily: 'Arial'
        },
        {
            label: 'Company Name',
            value: 'company',
            field: 'ABC Company',
            color: '#000',
            fontSize: 14,
            fontFamily: 'Arial'
        },
        {
            label: 'Address',
            value: 'address',
            field: '66345 West Street, New York',
            color: '#000',
            fontSize: 14,
            fontFamily: 'Arial'
        },
        {
            label: 'City, ZIP Code',
            value: 'zip',
            field: '10010',
            color: '#000',
            fontSize: 14,
            fontFamily: 'Arial'
        }
    ];
    $scope.selected = {};
    $scope.html = '';

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

    $scope.selectCallback = function(index, item, external, type) {
        $scope.selected = item;
        $scope.selectedFont = item.fontFamily;
        $scope.selectedSize = item.fontSize;
        $scope.selectedColor = item.color;
    }

    $scope.$watch('model', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);

        //Generate preview HTML
        var html = '';
        angular.forEach(model, function(item, index) {
            html += '<div style="font-family:' + item.fontFamily 
                + ';font-size:' + item.fontSize + 'px'
                + '; color:' + item.color
                + '; font-weight:' + (item.bold ? 'bold' : 'normal')
                + '; text-decoration:' + (item.underline ? 'underline' : 'none')
                + '; font-style:' + (item.italic ? 'italic' : 'normal')
                + ';">'
                + item.field + '</div>';
        });

        $scope.html = $sce.trustAsHtml(html);
    }, true);
};
