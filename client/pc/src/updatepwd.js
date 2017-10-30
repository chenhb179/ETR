app.controller("updatepwd", function($scope, $rootScope, $location, $uibModal)
{
    $scope.changePasswd = true;
    $scope.changeOperatePasswd = false;
    $scope.changeMobile = false;

    $scope.toggle = function(index)
    {
        $scope.changePasswd = false;
        $scope.changeOperatePasswd = false;
        $scope.changeMobile = false;
        switch(index)
        {
            case 0:
                $scope.changePasswd = true;
                break;
            case 1:
                $scope.changeOperatePasswd = true;
                break;
            case 2:
                $scope.changeMobile = true;
                break;
        }
    };

    $scope.submitPasswd = function(isValid)
    {
        if(isValid)
        {
            T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
            {
                if(operatePasswd)
                {
                    if($scope.formdata.password !== $scope.formdata.password1)
                    {
                        T.common.ui.toast("两次密码不一致");
                        return;
                    }

                    var param = {
                        operatePasswd: operatePasswd,
                        oldpwd: T.common.util.md5($scope.formdata.oldpwd),
                        password: T.common.util.md5($scope.formdata.password),
                    };
                    var cfg = {
                        mask: true,
                        care: true,
                    };
                    T.common.ajax.request(Api.user_updatePwd_v1, param, cfg, function(data, code, msg)
                    {
                        switch(code)
                        {
                            case 200:
                            {
                                $scope.formdata.oldpwd = "";
                                $scope.formdata.password = "";
                                $scope.formdata.password1 = "";
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

    $scope.submitOperatePasswd = function(isValid)
    {
        if(isValid)
        {
            if($scope.formdata.password !== $scope.formdata.password1)
            {
                T.common.ui.toast("两次密码不一致");
                return;
            }

            var param = {
                oldpwd: T.common.util.md5($scope.formdata.oldpwd),
                password: T.common.util.md5($scope.formdata.password),
            };
            var cfg = {
                mask: true,
                care: true,
            };
            T.common.ajax.request(Api.user_updateOperatePwd_v1, param, cfg, function(data, code, msg)
            {
                switch(code)
                {
                    case 200:
                    {
                        $scope.formdata.oldpwd = "";
                        $scope.formdata.password = "";
                        $scope.formdata.password1 = "";
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
    };

    $scope.sendcode = function(isValid)
    {
        if(isValid)
        {
            var param = {
                mobile: $scope.formdata.mobile
            };
            var cfg = {
                mask: true,
                care: true
            };
            T.common.ajax.request(Api.code_updatePwd_v1, param, cfg, function(data, code, msg)
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
        }
    };

    $scope.submitMobile = function(isValid)
    {
        if(isValid)
        {
            var cfg = {
                mask: true,
                care: true,
            };
            T.common.ajax.request(Api.user_updateMobile_v1, $scope.formdata, cfg, function(data, code, msg)
            {
                switch(code)
                {
                    case 200:
                    {
                        $scope.formdata.mobile = "";
                        $scope.formdata.code = "";
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
    };
});