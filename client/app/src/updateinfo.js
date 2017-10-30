app.controller("updateinfo", function($scope, $rootScope, $location, $uibModal)
{
    $scope.getUserInfo = function()
    {
        var cfg = {
            mask: true,
        };
        T.common.ajax.request(Api.user_userInfo_v1, null, cfg, function(data, code, msg)
        {
            $scope.formdata = data.user;
            $scope.$apply();
        });
    };
	
	$scope.sendcode = function(isValid)
    {
		//alert(isValid);
        //if(isValid)
        //{
			if(!$scope.formdata.mobile || $scope.formdata.mobile === "")
            {
				T.common.ui.toast("请输入手机号码");
                return;
            }
            var param = {
                mobile: $scope.formdata.mobile
            };
            var cfg = {
                mask: true,
                care: true
            };
            T.common.ajax.request(Api.code_updateInfo_v1, param, cfg, function(data, code, msg)
            {
                switch(code)
                {
                    case 200:
                    {
                        T.common.ui.toast("短信发送成功");
                        break;
                    }
                    default:
                    {
                        T.common.ui.toast(msg);
                        break;
                    }
                }
            });
        //}
    };

    $scope.upload = function()
    {
        $("#uploadFile").click();
        document.getElementById('uploadFile').addEventListener('change', function(e)
        {
            var file = e.target.files[0];
            var size = file.size / 1024 / 1024;
            if(size > 3)
            {
                T.common.ui.toast("文件不得超过3M");
                return;
            }

            var ext = "." + file.name.split(".")[file.name.split(".").length - 1];
            var exts = $("#uploadFile").attr("accept").split(",");
            var valid = false;
            for(var i = 0; i < exts.length; i++)
            {
                if(ext === exts[i])
                {
                    valid = true;
                    break;
                }
            }

            if(valid)
            {
                T.common.oss.upload(file, function(osskey)
                {
                    $scope.formdata.idcardUrl = "http://etr.oss-ap-southeast-1.aliyuncs.com/" + osskey;
                    T.common.ui.toast("上传成功");
                    $("#focus1").get(0).focus();
                });
            }
            else
            {
                T.common.ui.toast("该文件不允许上传");
            }
        });
    };

    $scope.submitForm = function(isValid)
    {
        if(isValid)
        {
            T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
            {
                if(operatePasswd)
                {
                    $scope.formdata.operatePasswd = operatePasswd;
                    var cfg = {
                        mask: true,
                        care: true,
                    };
                    T.common.ajax.request(Api.user_updateUser_v1, $scope.formdata, cfg, function(data, code, msg)
                    {
                        switch(code)
                        {
                            case 200:
                            {
                                $rootScope.completeUserInfo = false;
                                $scope.formdata = data.user;
                                $scope.$apply();
                                T.common.ui.toast("修改成功");
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
        }
    };

    $scope.getUserInfo();
});