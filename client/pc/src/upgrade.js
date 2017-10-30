app.controller("upgrade", function($scope, $rootScope, $location, $uibModal)
{
    $scope.upgradeCard = function(levelCard)
    {
        T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
        {
            if(operatePasswd)
            {
                var param = {
                    levelCard: levelCard,
                    password: operatePasswd
                };
                var cfg = {
                    mask: true,
                    care: true
                };
                T.common.ajax.request(Api.user_upgrade_v1, param, cfg, function(data, code, msg)
                {
                    switch(code)
                    {
                        case 200:
                        {
                            T.common.ui.toast("升级成功请刷新查看");
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
        });
    };

    $scope.reActive = function()
    {
        T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
        {
            var param = {
                operatePasswd: operatePasswd
            };
            var cfg = {
                mask: true,
                care: true
            };
            T.common.ajax.request(Api.user_reActive_v1, param, cfg, function(data, code, msg)
            {
                switch(code)
                {
                    case 200:
                    {
                        T.common.ui.toast("激活成功");
                        $scope.getCardInfo();
                        break;
                    }
                    default:
                    {
                        T.common.ui.toast(msg);
                        break;
                    }
                }
            });
        });
    };

    $scope.getCardInfo = function()
    {
        var cfg = {
            mask: true,
        };
        T.common.ajax.request(Api.user_upgradeCard_v1, null, cfg, function(data, code, msg)
        {
            $scope.cards = data.cards;
            $scope.user = data.user;
            $scope.$apply();
        });
    };

    $scope.getCardInfo();
});