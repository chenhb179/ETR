signupApp.controller("signup", function($scope, $rootScope, $location)
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
            T.common.ajax.request(Api.code_signup_v1, param, cfg, function(data, code, msg)
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
            $scope.formdata.inviter = T.common.util.getParameter("inviter");
            if($scope.formdata.inviter && $scope.formdata.inviter !== "")
            {
                var cfg = {
                    mask: true,
                    care: true
                };
                T.common.ajax.request(Api.user_signup_v1, $scope.formdata, cfg, function(data, code, msg)
                {
                    switch(code)
                    {
                        case 200:
                        {
                            alert("注册成功");
                            location.href = "signin.html";
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
        }
    };
});