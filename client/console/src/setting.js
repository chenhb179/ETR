app.controller("setting", function($scope, $rootScope, $location)
{
    var param = {
        userId: T.common.util.getParameter("userId")
    };
    var cfg = {
        mask: true
    };
    T.common.ajax.request(Api.admin_settingInfo_v1, param, cfg, function(data, code, msg)
    {
        $scope.setting = data.setting;
        $scope.$apply();
    });
	$scope.admin_username=localStorage.getItem(T.common.cfg.key + ".username");
    $scope.submitForm = function(isValid)
    {
        if(isValid)
        {
            var param = {
                userId: T.common.util.getParameter("userId"),
                content: JSON.stringify($scope.setting)
            };
            var cfg = {
                mask: true
            };
            T.common.ajax.request(Api.admin_updateSetting_v1, param, cfg, function(data, code, msg)
            {
                T.common.ui.toast("保存成功");
            });
        }
    };
});