
angular
	.module('Signature')
	.directive('confirmClick', confirmClick);

function confirmClick() {
	var directive = {
		link: link
	};

	return directive;

	function link(scope, element, attrs) {
		var msg = attrs.confirmClick || "Are you sure?";
        var clickAction = attrs.confirmedClick;
        element.bind('click',function (event) {
            if (window.confirm(msg)) {
                scope.$eval(clickAction)
            }
        });
	}
}