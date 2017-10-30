app.controller("maintab4", function($scope, $rootScope, $location, $uibModal)
{
    if($rootScope.CacheMainTab4)
    {
        $scope.user = $rootScope.CacheMainTab4;
    }
    else
    {
        var cfg = {
            mask: false,
        };
        T.common.ajax.request(Api.user_userInfo_v1, null, cfg, function(data, code, msg)
        {
            var cards = ["", "普通卡", "金卡", "白金卡", "钻石卡", "黑钻卡"];
            $rootScope.CacheMainTab4 = data.user;
            data.user.level = cards[data.user.level];
            $scope.user = $rootScope.CacheMainTab4;
            $scope.$apply();
        });
    }
});