app.controller("dialog_notice", function($scope, $rootScope, $location, $uibModalInstance, items)
{
    $scope.notice = items;
    content=items.content;
    $scope.ok = function()
    {
        $uibModalInstance.close();
    };
});

app.directive('notice', function() {
    return {
        restrict: 'E',
        template: content,
        replace: true
    };
});