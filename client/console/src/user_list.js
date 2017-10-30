app.controller("user_list", function($scope, $rootScope, $location, $uibModal)
{
    $scope.listdata = {
        pageNo: 1,
        pageSize: 20,
        totalPages: 1,
        orderList: [],
    };
	$scope.admin_username=localStorage.getItem(T.common.cfg.key + ".username");
    $scope.getData = function()
    {
        var param = {
            pageNo: $scope.listdata.pageNo,
            pageSize: $scope.listdata.pageSize
        };
        var cfg = {
            mask: true
        };
        T.common.ajax.request(Api.admin_userList_v1, param, cfg, function(data, code, msg)
        {
            $scope.listdata.totalPages = data.totalPages;
            $scope.listdata.userList = data.userList;
            $scope.$apply();
            $scope.showPages();
        });
    };

	$scope.showInviter = function(inviter)
    {
		if(inviter==0){alert("系统账号，没有推荐人");}
        var param = {
            userId: inviter
        };
        var cfg = {
            mask: false,
        };
        T.common.ajax.request(Api.admin_userInfo_v1, param, cfg, function(data, code, msg)
        {
            var info = "";
			info += "账号: " + data.userinfo.username + "\n";
            info += "姓名: " + data.userinfo.name + "\n";
            info += "手机号: " + data.userinfo.mobile + "\n";
            info += "银行卡: " + data.userinfo.bankcard + "\n";
            info += "开户行: " + data.userinfo.bankAddress + "\n";
            info += "支付宝: " + data.userinfo.alipay + "\n";
            info += "微信: " + data.userinfo.wechat + "\n";
            alert(info);
        });
    };
	
    $scope.onListItemClick = function($event, index)
    {
        var btn = $event.target.innerHTML;
        switch(btn)
        {
            case "直推人数":
            {
                var param = {
                    userId: $scope.listdata.userList[index].userId
                };
                var cfg = {
                    mask: true
                };
                T.common.ajax.request(Api.admin_inviterCount_v1, param, cfg, function(data, code, msg)
                {
                    var msg = "各星级直推人数:\n";
                    msg += "一星级: " + data.json["1"] + "\n";
                    msg += "二星级: " + data.json["2"] + "\n";
                    msg += "三星级: " + data.json["3"] + "\n";
                    msg += "四星级: " + data.json["4"] + "\n";
                    msg += "五星级: " + data.json["5"] + "\n";
                    alert(msg);
                });
                break;
            }
            case "删除":
            {
                if(confirm("确定要删除该用户吗?"))
                {
                    var param = {
                        userId: $scope.listdata.userList[index].userId
                    };
                    var cfg = {
                        mask: true,
                        care: true
                    };
                    T.common.ajax.request(Api.admin_userDelete_v1, param, cfg, function(data, code, msg)
                    {
                        switch(code)
                        {
                            case 200:
                            {
                                T.common.ui.toast("删除成功");
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
            case "奖励设置":
            {
                $rootScope.cacheUserList = $scope.listdata;

                var userId = $scope.listdata.userList[index].userId;
                $location.url("/setting_reward?userId=" + userId);
                break;
            }
            case "修改":
            {
                $rootScope.cacheUserList = $scope.listdata;

                var userId = $scope.listdata.userList[index].userId;
                $location.url("/user_update?userId=" + userId);
                break;
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

    if($rootScope.cacheUserList)
    {
        $scope.listdata = $rootScope.cacheUserList;
        $scope.showPages();
        $rootScope.cacheUserList = null;
    }
    else
    {
        $scope.getData();
    }
});