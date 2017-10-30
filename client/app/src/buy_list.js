app.controller("buy_list", function($scope, $rootScope, $location)
{
    $scope.isFinish = false;

    $scope.listdata = {
        pageNo: 1,
        pageSize: 1000,
        orderList: [],
    };

    $scope.tab = function()
    {
        $scope.isFinish = !$scope.isFinish;
        $scope.getData();
    };

    $scope.getData = function()
    {
        var param = {
            pageNo: $scope.listdata.pageNo,
            pageSize: $scope.listdata.pageSize,
            finish: $scope.isFinish ? 1 : 0
        };
        var cfg = {
            mask: true
        };
        T.common.ajax.request(Api.order_buyList_v1, param, cfg, function(data, code, msg)
        {
            for(var i = 0; i < data.orderList.length; i++)
            {
                var it = data.orderList[i];
                it.createTime = T.common.ui.formatTime(it.createTime);
            }
            if($scope.isFinish)
            {
                $scope.listdata.finishOrderList = data.orderList;
                $scope.listdata.notFinishOrderList = [];
            }
            else
            {
                $scope.listdata.finishOrderList = [];
                $scope.listdata.notFinishOrderList = data.orderList;
            }
            $scope.$apply();
        });
    };

    $scope.getData();
});