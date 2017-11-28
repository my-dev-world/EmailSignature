
angular
	.module('Signature')
	.directive('htmlPreview', htmlPreview);

function htmlPreview() {
	var directive = {
		restrict: 'EA',
		scope: {
			data: '@'
		},
		link: link
	};

	return directive;

	function link(scope, element, attrs) {
		debugger;
	}
}