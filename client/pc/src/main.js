app.controller("main", function($scope, $rootScope, $location, $uibModal)
{
    T.common.ajax.request(Api.admin_settingInfo_v1, null, null, function(ddata, code, msg)
    {
        // 维护中
        if(ddata.setting.WangZhanWeiHu.ShiFouWeiHu)
        {
            location.href = "maintain.html";
            return;
        }

        var cfg = {
            mask: true,
        };
        T.common.ajax.request(Api.user_userInfo_v1, null, cfg, function(data, code, msg)
        {
            $("#creditLevel").html("");
            for(var i = 0; i < data.user.level; i++)
            {
                var dom = $('<img src="drawable/icon_credit_star.png">');
                $("#creditLevel").append(dom);
            }

            var cards = ["", "普通卡", "金卡", "白金卡", "钻石卡", "黑钻卡"];
            data.user.level = cards[data.user.level];
            $scope.user = data.user;
            $scope.$apply();
            $('#profile').html("用户: " + data.user.username);

            if(!data.user.name || data.user.name === "")
            {
                location.href = "main.html#/updateinfo";
                $rootScope.completeUserInfo = true;
            }
            else
            {
                $rootScope.completeUserInfo = false;
            }
        });

        // 读取最新公告
        var showNotice = localStorage.getItem(T.common.cfg.key + ".showNotice");
        if(showNotice !== null && showNotice === "true")
        {
            T.common.ajax.request(Api.notice_latest_v1, null, null, function(data, code, msg)
            {
                if(data.notice)
                {
                    data.notice.createTime = T.common.ui.formatTime(data.notice.createTime);

                    var modalInstance = $uibModal.open({
                        animation: true,
                        templateUrl: "dialog_notice.html?t=" + new Date().getTime(),
                        controller: "dialog_notice",
                        resolve: {
                            items: function()
                            {
                                return data.notice;
                            }
                        }
                    });
                    modalInstance.opened.then(function() {// 模态窗口打开之后执行的函数  
	                    console.log('modal is opened');  
	               	  }); 
                    modalInstance.result.then(function(operatePasswd)
                    {
                    }, function()
                    {
                        console.log("dialog dismiss");
                    });
										
										
                    localStorage.setItem(T.common.cfg.key + ".showNotice", "false");
                }
            });
        }
    });
});