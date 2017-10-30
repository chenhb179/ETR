app.controller("main", function($scope, $rootScope, $location, $uibModal)
{
    $rootScope.back = function()
    {
        history.back();
    };

    T.common.ajax.request(Api.admin_settingInfo_v1, null, null, function(ddata, code, msg)
    {
        // 维护中
        if(ddata.setting.WangZhanWeiHu.ShiFouWeiHu)
        {
            location.href = "maintain.html";
        }
    });
});