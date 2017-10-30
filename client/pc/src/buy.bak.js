app.controller("buy", function($scope, $rootScope, $location, $uibModal)
{
    $scope.listdata = {
        pageNo: 1,
        pageSize: 10,
        totalPages: 1,
        orderList: [],
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
        T.common.ajax.request(Api.order_newList_v1, param, cfg, function(data, code, msg)
        {
            for(var i = 0; i < data.orderList.length; i++)
            {
                var it = data.orderList[i];
                it.createTime = T.common.ui.formatTime(it.createTime);
            }
            $scope.listdata.totalPages = data.totalPages;
            $scope.listdata.orderList = data.orderList;
            $scope.$apply();
            $scope.showPages();
        });
    };

    $scope.showSaler = function(index, callback)
    {
        var item = $scope.listdata.orderList[index];
        var param = {
            userId: item.userId
        };
        var cfg = {
            mask: false,
        };
        T.common.ajax.request(Api.user_userInfo_v1, param, cfg, function(data, code, msg)
        {
            var info = "";
            info += "姓名: " + data.user.name + "\n";
            info += "手机号: " + data.user.mobile + "\n";
            info += "银行卡: " + data.user.bankcard + "\n";
            info += "开户行: " + data.user.bankAddress + "\n";
            info += "支付宝: " + data.user.alipay + "\n";
            info += "微信: " + data.user.wechat + "\n";
            alert(info);

            if(callback)
            {
                callback();
            }
        });
    };

    $scope.buy = function(index)
    {
		var item = $scope.listdata.orderList[index];
		$location.url("/buy_sure?orderId=" + item.orderId);
        $scope.$apply();
        /*$scope.showSaler(index, function()
        {
            var item = $scope.listdata.orderList[index];
            T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
            {
                if(operatePasswd)
                {
                    var param = {
                        orderId: item.orderId,
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
                                T.common.ui.toast("购买成功");
                                $scope.getData();
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
        });*/
    };

    $scope.showPages = function()
    {
        if($scope.listdata.totalPages > 0)
        {
            var options = {
                currentPage: $scope.listdata.pageNo,
                totalPages: $scope.listdata.totalPages,
                onPageChanged: function(event, oldPage, newPage)
                {
                    if($scope.listdata.pageNo !== newPage)
                    {
                        $scope.listdata.pageNo = newPage;
                        $scope.getData();
                    }
                }
            };
            $(".pagination").bootstrapPaginator(options);
        }
    };

    $scope.getData();
});