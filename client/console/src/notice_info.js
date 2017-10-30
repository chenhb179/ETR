app.controller("notice_info", function($scope, $rootScope, $location)
{
    var param = {
        id: T.common.util.getParameter("id")
    };
    var cfg = {
        mask: true
    };
    T.common.ajax.request(Api.admin_noticeInfo_v1, param, cfg, function(data, code, msg)
    {
        $scope.data = data.notice;
        $scope.$apply();
    });
});