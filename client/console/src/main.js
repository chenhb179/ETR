app.controller("main", function($scope, $rootScope, $location, $uibModal)
{
    $('#username').html("管理员: " + localStorage.getItem(T.common.cfg.key + ".username"));
    $('#signout').bind("click", function()
    {
        T.common.user.signout();
        location.href = "signin.html";
    });

    // 读取平台信用分
    T.common.ajax.request(Api.admin_pointSum_v1, null, null, function(data, code, msg)
    {
        $("#pointSum").html("全平台信用分: " + data.points);
    });
});