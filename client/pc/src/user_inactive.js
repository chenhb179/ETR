app.controller("user_inactive", function($scope, $rootScope, $location)
{
    $scope.listdata = {
        pageNo: 1,
        pageSize: 10,
        totalPages: 1,
        userList: [],
    };

    $scope.getData = function()
    {
        var param = {
            pageNo: $scope.listdata.pageNo,
            pageSize: $scope.listdata.pageSize,
            isActive: 0
        };
        var cfg = {
            mask: true
        };
        T.common.ajax.request(Api.user_myUserList_v1, param, cfg, function(data, code, msg)
        {
            for(var i = 0; i < data.userList.length; i++)
            {
                var it = data.userList[i];
                it.createTime = T.common.ui.formatTime(it.createTime);
                if(!it.name)
                {
                    it.name = "未完善个人信息";
                }
            }
            $scope.listdata.totalPages = data.totalPages;
            $scope.listdata.userList = data.userList;
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
            $rootScope.cacheInactiveUserList = $scope.listdata;

            var user = $scope.listdata.userList[index];
            $location.url("/user_active?userId=" + user.userId + "&account=" + user.username);
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

    if($rootScope.cacheInactiveUserList)
    {
        $scope.listdata = $rootScope.cacheInactiveUserList;
        $scope.showPages();
        $rootScope.cacheInactiveUserList = null;
    }
    else
    {
        $scope.getData();
    }
});