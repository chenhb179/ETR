app.controller("updatepwd", function($scope, $rootScope, $location, $uibModalInstance, items)
{
    console.log("获取参数: " + items);

    $scope.ok = function()
    {
        $uibModalInstance.close("返回结果q23");
    };

    $scope.cancel = function()
    {
        $uibModalInstance.dismiss();
    };
});