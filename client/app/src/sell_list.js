app.controller("sell_list", function($scope, $rootScope, $location, $uibModal)
{
    $scope.isFinish = false;

    $scope.listdata = {
        pageNo: 1,
        pageSize: 1000,
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
        T.common.ajax.request(Api.order_saleList_v1, param, cfg, function(data, code, msg)
        {
            for(var i = 0; i < data.orderList.length; i++)
            {
                var it = data.orderList[i];
                it.createTime = T.common.ui.formatTime(it.createTime);
                switch(it.status)
                {
                    case "new":
                    {
                        it.status = "出售中";
                        it.canCancel = true;
                        break;
                    }
                    case "cancel":
                    {
                        it.status = "已撤销";
                        break;
                    }
                    case "timeout":
                    {
                        it.status = "已过期";
                        break;
                    }
                    case "sale":
                    {
                        it.status = "待确认收款";
                        it.canConfirm = true;
                        break;
                    }
                }
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

    $scope.onListItemClick = function($event)
    {
        var index = $($event.target).attr("index");
        if(index)
        {
            switch($($event.target).html())
            {
                case "确认收款":
                {
                    T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
                    {
                        if(operatePasswd)
                        {
                            var id = $scope.listdata.notFinishOrderList[index].orderId;
                            var param = {
                                orderId: id,
                                password: operatePasswd
                            };
                            var cfg = {
                                mask: true,
                                care: true
                            };
                            T.common.ajax.request(Api.order_confirmPay_v1, param, cfg, function(data, code, msg)
                            {
                                switch(code)
                                {
                                    case 200:
                                    {
                                        T.common.ui.toast("成功确认收款");
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
                    break;
                }
                case "撤销出售":
                {
                    T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
                    {
                        if(operatePasswd)
                        {
                            var id = $scope.listdata.notFinishOrderList[index].orderId;
                            var param = {
                                orderId: id,
                                password: operatePasswd
                            };
                            var cfg = {
                                mask: true,
                                care: true
                            };
                            T.common.ajax.request(Api.order_cancel_v1, param, cfg, function(data, code, msg)
                            {
                                switch(code)
                                {
                                    case 200:
                                    {
                                        T.common.ui.toast("成功撤销挂单");
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
                    break;
                }
            }
        }
    };

    $scope.getData();
});