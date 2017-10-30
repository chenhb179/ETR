app.controller("dialog_passwd", function($scope, $rootScope, $location, $uibModalInstance, items)
{
    $scope.ok = function()
    {
        if($scope.passwd && $scope.passwd !== "")
        {
            var operatePasswd = T.common.util.md5($scope.passwd);
            $uibModalInstance.close(operatePasswd);
        }
    };
    $scope.cancel = function()
    {
        $uibModalInstance.close();
    };
});