app.controller("maintab1", function($scope, $rootScope, $location, $uibModal)
{
    $scope.getInfo = function()
    {
        var cfg = {
            mask: false,
        };
        T.common.ajax.request(Api.user_userInfo_v1, null, cfg, function(data, code, msg)
        {
            $rootScope.CacheMainTab1 = data.user;
            $scope.user = data.user;
            $scope.$apply();
        });
    };

    $scope.submitForm = function(isValid)
    {
        if(isValid)
        {
            $scope.formdata.pointAmount = $scope.formdata.pointAmountTmp * 20;
            $scope.formdata.password = T.common.util.md5($scope.formdata.operatePasswd);
            if(confirm("确定要挂单出售" + $scope.formdata.pointAmount + "积分?"))
            {
                var cfg = {
                    mask: true,
                    care: true,
                };
                T.common.ajax.request(Api.order_create_v1, $scope.formdata, cfg, function(data, code, msg)
                {
                    switch(code)
                    {
                        case 200:
                        {
                            $scope.formdata = {};
                            $scope.$apply();
                            T.common.ui.toast("成功挂单");
                            $scope.getInfo();
                            break;
                        }
                        default:
                        {
                            T.common.ui.toast(msg);
                            break;
                        }
                    }
                });
            }
        }
    };

    if($rootScope.CacheMainTab1)
    {
        $scope.user = $rootScope.CacheMainTab1;
    }

    $scope.getInfo();
});