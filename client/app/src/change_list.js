app.controller("change_list", function($scope, $rootScope, $location)
{
    $scope.listdata = {
        pageNo: 1,
        pageSize: 100,
        changeList: [],
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
        T.common.ajax.request(Api.change_getList_v1, param, cfg, function(data, code, msg)
        {
            for(var i = 0; i < data.changeList.length; i++)
            {
                var it = data.changeList[i];
                it.createTime = T.common.ui.formatTime(it.createTime);
            }
            $scope.listdata.changeList = data.changeList;
            $scope.$apply();
        });
    };

    $scope.getData();
});