app.controller("quicksignup", function($scope, $rootScope, $location)
{
    $scope.getUserInfo = function()
    {
        var cfg = {
            mask: true,
        };
        T.common.ajax.request(Api.user_userInfo_v1, null, cfg, function(data, code, msg)
        {
            $scope.user = data.user;
            $scope.formdata = {
                parentAccount: T.common.util.getParameter("parent"),
                levelCard: "1",
                signupType: "1",
                isLeft: "1"
            };

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
        //}
    };
	
    $scope.submitForm = function(isValid)
    {
        if(isValid)
        {
            if($scope.formdata.signupType === "1")
            {
                if(!$scope.formdata.mobile || $scope.formdata.mobile === "")
                {
                    T.common.ui.toast("请输入手机号码");
                    return;
                }
            }
            else
            {
                $scope.formdata.mobile = $scope.user.mobile;
            }

            var cfg = {
                mask: true,
                care: true,
            };
            T.common.ajax.request(Api.user_quickSignup_v1, $scope.formdata, cfg, function(data, code, msg)
            {
                switch(code)
                {
                    case 200:
                    {
                        T.common.ui.toast("注册成功");
                        $scope.getUserInfo();
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

    $scope.getUserInfo();
});