app.controller("sale_notfinish", function($scope, $rootScope, $location, $uibModal)
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
            finish: 0
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
                        it.nothing = true;
                        break;
                    }
                    case "timeout":
                    {
                        it.status = "已过期";
                        it.nothing = true;
                        break;
                    }
                    case "sale":
                    {
                        it.status = "待收款";
                        it.canConfirm = true;
                        break;
                    }
                }
            }
            $scope.listdata.totalPages = data.totalPages;
            $scope.listdata.orderList = data.orderList;
            $scope.$apply();
            $scope.showPages();
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
                            var id = $scope.listdata.orderList[index].orderId;
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
                case "撤销挂单":
                {
                    T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
                    {
                        if(operatePasswd)
                        {
                            var id = $scope.listdata.orderList[index].orderId;
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