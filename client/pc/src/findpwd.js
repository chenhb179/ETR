findpwdApp.controller("findpwd", function($scope, $rootScope, $location)
{
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
            T.common.ajax.request(Api.code_findPwd_v1, param, cfg, function(data, code, msg)
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

    $scope.submitForm = function(isValid)
    {
        if(isValid)
        {
            $scope.formdata.password = T.common.util.md5($scope.formdata.passwd);
            var cfg = {
                mask: true,
                care: true
            };
            T.common.ajax.request(Api.user_findPwd_v1, $scope.formdata, cfg, function(data, code, msg)
            {
                switch(code)
                {
                    case 200:
                    {
                        $scope.formdata = {};
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