app.controller("notice", function($scope, $rootScope, $location)
{
    $scope.listdata = {
        pageNo: 1,
        pageSize: 100,
        noticeList: [],
    };

    $scope.getData = function()
    {
        var param = {
            pageNo: $scope.listdata.pageNo,
            pageSize: $scope.listdata.pageSize,
        };
        var cfg = {
            mask: true
        };
        T.common.ajax.request(Api.notice_getList_v1, param, cfg, function(data, code, msg)
        {
            for(var i = 0; i < data.noticeList.length; i++)
            {
                var it = data.noticeList[i];
                it.createTime = T.common.ui.formatTime(it.createTime);
            }
            $scope.listdata.noticeList = data.noticeList;
            $scope.$apply();
        });
    };

    $scope.onListItemClick = function($event)
    {
        var index = $($event.target).attr("index");
        if(index)
        {
            // 保持状态
            $rootScope.cacheNoticeList = $scope.listdata;

            var id = $scope.listdata.noticeList[index].noticeId;
            $location.url("/notice_info?id=" + id);
        }
    };

    if($rootScope.cacheNoticeList)
    {
        $scope.listdata = $rootScope.cacheNoticeList;
        $rootScope.cacheNoticeList = null;
    }
    else
    {
        $scope.getData();
    }
});