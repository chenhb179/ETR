app.controller("reward_list", function($scope, $rootScope, $location)
{
    $scope.type = "分享奖励";

    $scope.listdata = {
        pageNo: 1,
        pageSize: 1000,
    };

    $scope.tab = function($event)
    {
        var target = $($event.target);
        $(".app-list-tab>div").removeClass("app-list-tab-height");
        $scope.type = target.html();
        target.addClass("app-list-tab-height");
        $scope.getData();
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
            $scope.listdata.rewardList = data.rewardList;
            $scope.$apply();
        });
    };

    $scope.getData();
});