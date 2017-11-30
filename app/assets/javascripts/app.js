angular
    .module('Signature', [
        'ui.router',
        'ui.bootstrap',
        'templates',
        // 'dndLists',
        'minicolors'
    ]);

angular
    .module('Signature')
    .config(config);

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('signature');

    $stateProvider.state('dashboard', {
        url: '/dashboard',
        template: '<p class="center">This is dashboard page</p>'
    }).state('signature', {
        url: '/signature',
        templateUrl: 'signature/signature.html',
        controller: 'SignatureCtrl'
    });
};
