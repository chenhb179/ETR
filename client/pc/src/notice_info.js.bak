app.controller("notice_info", function($scope, $rootScope, $location)
{
    var param = {
        noticeId: T.common.util.getParameter("id")
    };
    var cfg = {
        mask: true
    };
    T.common.ajax.request(Api.notice_info_v1, param, cfg, function(data, code, msg)
    {
        data.notice.createTime = T.common.ui.formatTime(data.notice.createTime);
        $scope.notice = data.notice;
        $scope.$apply();
    });
});