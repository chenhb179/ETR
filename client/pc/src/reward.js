app.controller("reward", function($scope, $rootScope, $location)
{
    $scope.type = T.common.util.getParameter("type");

    $scope.listdata = {
        pageNo: 1,
        pageSize: 10,
        totalPages: 1,
        rewardList: [],
    };

    $scope.getData = function()
    {
        var param = {
            pageNo: $scope.listdata.pageNo,
            pageSize: $scope.listdata.pageSize,
            type: $scope.type
        };
        var cfg = {
            mask: true
        };
        T.common.ajax.request(Api.reward_getList_v1, param, cfg, function(data, code, msg)
        {
            for(var i = 0; i < data.rewardList.length; i++)
            {
                var it = data.rewardList[i];
                it.createTime = T.common.ui.formatTime(it.createTime);
            }
            $scope.listdata.totalPages = data.totalPages;
            $scope.listdata.rewardList = data.rewardList;
            $scope.$apply();
            $scope.showPages();
        });
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

    $scope.getData();
});