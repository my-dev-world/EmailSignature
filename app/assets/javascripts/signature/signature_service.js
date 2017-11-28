
angular
    .module('Signature')
    .factory('signatureService', signatureService);

signatureService.$inject = ['$http'];

function signatureService($http) {
    return {
        postSignature: postSignature
    };

    function postSignature(signature) {
        return $http.post('/signatures.json', signature);
    }
}
