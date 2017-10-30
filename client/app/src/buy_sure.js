app.controller("buy_sure", function($scope, $rootScope, $location, $uibModal)
{
    $scope.buy_sure = function()
    {
			var orderId = T.common.util.getParameter("orderId");
            T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
            {
                if(operatePasswd)
                {
                    var param = {
                        orderId: orderId,
                        password: operatePasswd
                    };
                    var cfg = {
                        mask: true,
                        care: true
                    };
                    T.common.ajax.request(Api.order_buy_v1, param, cfg, function(data, code, msg)
                    {
                        switch(code)
                        {
                            case 200:
                            {
                                T.common.ui.toast("充值成功");
								$location.url("/buy");
								$scope.$apply();
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
});