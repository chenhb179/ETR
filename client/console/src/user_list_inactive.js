app.controller("user_list_inactive", function($scope, $rootScope, $location, $uibModal)
{
    $scope.listdata = {
        pageNo: 1,
        pageSize: 20,
        totalPages: 1,
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
        T.common.ajax.request(Api.admin_userListInactive_v1, param, cfg, function(data, code, msg)
        {
            $scope.userList = data.userList;
            $scope.listdata.totalPages = data.totalPages;
			$scope.$apply();
            $scope.showPages();
        });
    };

    $scope.onListItemClick = function($event)
    {
        var index = $($event.target).attr("index");
        if(index)
        {
            var btn = $($event.target).html();
            switch(btn)
            {
                case "查看":
                {
                    break;
                }
                case "删除":
                {
                    break;
                }
            }
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

    $scope.getData();
});