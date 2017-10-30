app.controller("inactive_list", function($scope, $rootScope, $location, $uibModal)
{
    $scope.listdata = {
        pageNo: 1,
        pageSize: 100,
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
            $scope.listdata.userList = data.userList;
            $scope.$apply();
        });
    };

    $scope.onListItemClick = function($event)
    {
        var index = $($event.target).attr("index");
        if(index)
        {
            var user = $scope.listdata.userList[index];

            var modal = {
                animation: true,
                controller: "active",
                resolve: {
                    items: function()
                    {
                        return user.userId;
                    }
                }
            }
            if(window.profile === "product")
            {
                modal.template = window.routeMetadata["/active"];
            }
            else
            {
                modal.templateUrl = window.routeMetadata["/active"];
            }

            var modalInstance = $uibModal.open(modal);
            modalInstance.result.then(function(result)
            {
                if(result)
                {
                    $scope.getData();
                }
            }, function()
            {
                console.log("dialog dismiss");
            });
        }
    };

    $scope.getData();
});