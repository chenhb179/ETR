app.controller("order_buy_all", function($scope, $rootScope, $location, $uibModal)
{
    $scope.listdata = {
        pageNo: 1,
        pageSize: 20,
        totalPages: 1,
    };

    $scope.getData = function()
    {
        var param = {
            pageNo: $scope.listdata.pageNo,
            pageSize: $scope.listdata.pageSize,
            orderStatus: "all"
        };
        var cfg = {
            mask: true
        };
        T.common.ajax.request(Api.admin_orderBuyList_v1, param, cfg, function(data, code, msg)
        {
            $scope.orderList = data.orderBuyList;
            $scope.listdata.totalPages = data.totalPages;
			$scope.$apply();
            $scope.showPages();
        });
    };

	$scope.onListItemClick = function($event, index)
    {
        var btn = $event.target.innerHTML;
        switch(btn)
        {
            case "充值到账":
            {
                if(confirm("确定要充值到账吗?"))
                {
                    var param = {
                        orderId: $scope.orderList[index].orderId
                    };
                    var cfg = {
                        mask: true,
                        care: true
                    };
                    T.common.ajax.request(Api.admin_orderBuyFinish_v1, param, cfg, function(data, code, msg)
                    {
                        switch(code)
                        {
                            case 200:
                            {
                                T.common.ui.toast("到账成功");
                                $scope.getData();
                                break;
                            }
                            default:
                            {
                                T.common.ui.toast(msg);
                            }
                        }
                    });
                }
                break;
            }
        }
    };
	
	$scope.exportOut = function(fileName,data)
	{
		if(!angular.isArray(data)){
			console.log("文件出错!");
			return;
		}
		return alasql('SELECT * INTO XLSX("'+fileName+'.xlsx",{header:true}) FROM ?',[data]);
	}
	
	//导出excel:当前页
	$scope.exportExcelForPage = function()
	{
		var orderData=[];
		if($scope.orderList&&$scope.orderList.length>0){
			for(var i=0;i<$scope.orderList.length;i++){
				var order=$scope.orderList[i];
				orderData.push({
					'账号':order.username,
						'姓名':order.name,
						'手机号':order.mobile,
						'银行卡':order.bankcard,
						'开户行':order.bankAddress,
						'信用分':order.pointAmount,
						'人民币':order.pointAmount*7,
						'手续费':order.fee,
						'出售时间':order.createTime,
						'购买时间':order.buyTime,
				});
			}
		}
		$scope.exportOut('全部充值记录-第'+$scope.listdata.pageNo+"页",orderData);
	}
	//导出excel:全部
	$scope.exportExcelForAll = function()
	{
		var param = {
            pageNo: 1,
            pageSize: 9999,
            orderStatus: "all"
        };
        var cfg = {
            mask: true
        };
        T.common.ajax.request(Api.admin_orderBuyList_v1, param, cfg, function(data, code, msg)
        {
            var orderData=[];
			if(data.orderBuyList&&data.orderBuyList.length>0){
				for(var i=0;i<data.orderBuyList.length;i++){
					var order=data.orderBuyList[i];
					orderData.push({
						'账号':order.username,
						'姓名':order.name,
						'手机号':order.mobile,
						'银行卡':order.bankcard,
						'开户行':order.bankAddress,
						'信用分':order.pointAmount,
						'人民币':order.pointAmount*7,
						'手续费':order.fee,
						'出售时间':order.createTime,
						'购买时间':order.buyTime,
					});
				}
			}
			$scope.exportOut('全部充值记录',orderData);
        });
	}
	
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
	
    /*$scope.onListItemClick = function($event)
    {
        var index = $($event.target).attr("index");
        if(index)
        {
            var btn = $($event.target).html();
            switch(btn)
            {
                case "查看":
                {
                    break;
                }
                case "删除":
                {
                    break;
                }
            }
        }
    };*/

    $scope.getData();
});