app.controller("active_list", function($scope, $rootScope, $location, $uibModal)
{
    $scope.listdata = {
        pageNo: 1,
        pageSize: 1000,
    };

    $scope.getData = function()
    {
        var param = {
            pageNo: $scope.listdata.pageNo,
            pageSize: $scope.listdata.pageSize,
            isActive: 1
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

    $scope.getData();
});