app.controller("transfer_list", function($scope, $rootScope, $location)
{
    $scope.listdata = {
        pageNo: 1,
        pageSize: 10,
        totalPages: 1,
        transferList: [],
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
        T.common.ajax.request(Api.transfer_getList_v1, param, cfg, function(data, code, msg)
        {
            for(var i = 0; i < data.transferList.length; i++)
            {
                var it = data.transferList[i];
                it.createTime = T.common.ui.formatTime(it.createTime);
            }
            $scope.listdata.totalPages = data.totalPages;
            $scope.listdata.transferList = data.transferList;
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