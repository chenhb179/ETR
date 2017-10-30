app.controller("upgrade", function($scope, $rootScope, $location, $uibModal)
{

    $scope.getCardInfo = function()
    {
        var cfg = {
            mask: true,
        };
        T.common.ajax.request(Api.user_upgradeCard_v1, null, cfg, function(data, code, msg)
        {
            var cards = [
                {
                    name: "普卡",
                    points: data.cards.PuKa,
                    icon: "drawable/img_upgrade_vip1-min.png",
                    level: 1
                }, {
                    name: "金卡",
                    points: data.cards.JinKa,
                    icon: "drawable/img_upgrade_vip2-min.png",
                    level: 2
                }, {
                    name: "白金卡",
                    points: data.cards.BaiJinKa,
                    icon: "drawable/img_upgrade_vip3-min.png",
                    level: 3,
                }
                // , {
                //     name: "钻石卡",
                //     points: data.cards.ZuanShiKa,
                //     icon: "drawable/img_upgrade_vip4-min.png",
                //     level: 4
                // }, {
                //     name: "黑钻卡",
                //     points: data.cards.HeiZuanKa,
                //     icon: "drawable/img_upgrade_vip5-min.png",
                //     level: 5
                // }
            ];
            $scope.cards = cards;
            $scope.user = data.user;
            $scope.$apply();
        });
    };

    $scope.upgradeCard = function($event)
    {
        T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
        {
            if(operatePasswd)
            {
                var param = {
                    levelCard: $scope.cards[parseInt($event.target.getAttribute("index"))].level,
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

    $scope.getCardInfo();
});