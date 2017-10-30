app.controller("notice", function($scope, $rootScope, $location)
{
    $scope.listdata = {
        pageNo: 1,
        pageSize: 10,
        totalPages: 1,
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
            $scope.listdata.totalPages = data.totalPages;
            $scope.listdata.noticeList = data.noticeList;
            $scope.$apply();
            $scope.showPages();
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

    $scope.showPages = function()
    {
        if($scope.listdata.totalPages > 0)
        {
            var options = {
                currentPage: $scope.listdata.pageNo,
                totalPages: $scope.listdata.totalPages,
                onPageChanged: function(event, oldPage, newPage)
                {
                    if($scope.listdata.pageNo !== newPage)
                    {
                        $scope.listdata.pageNo = newPage;
                        $scope.getData();
                    }
                }
            };
            $(".pagination").bootstrapPaginator(options);
        }
    };

    if($rootScope.cacheNoticeList)
    {
        $scope.listdata = $rootScope.cacheNoticeList;
        $scope.showPages();
        $rootScope.cacheNoticeList = null;
    }
    else
    {
        $scope.getData();
    }
});