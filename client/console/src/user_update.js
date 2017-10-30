app.controller("user_update", function($scope, $rootScope, $location, $uibModal)
{
    $scope.getUserInfo = function()
    {
        var cfg = {
            mask: true,
        };
        var param = {
            userId: T.common.util.getParameter("userId")
        };
        T.common.ajax.request(Api.admin_userInfo_v1, param, cfg, function(data, code, msg)
        {
            $scope.formdata = data.userinfo;
            $scope.$apply();
        });
    };

    $scope.submitForm = function(isValid)
    {
        if(isValid)
        {
            $scope.formdata.userId = T.common.util.getParameter("userId");
            if($scope.formdata.pwd1)
            {
                $scope.formdata.passwd = T.common.util.md5($scope.formdata.pwd1);
            }
            if($scope.formdata.pwd2)
            {
                $scope.formdata.operatePasswd = T.common.util.md5($scope.formdata.pwd2);
            }

            var cfg = {
                mask: true,
                care: true,
            };
            T.common.ajax.request(Api.admin_updateUser_v1, $scope.formdata, cfg, function(data, code, msg)
            {
                switch(code)
                {
                    case 200:
                    {
                        T.common.ui.toast("修改成功");
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