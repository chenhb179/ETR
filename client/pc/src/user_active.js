app.controller("user_active", function($scope, $rootScope, $location, $uibModal)
{
    $scope.getUserInfo = function()
    {
        var cfg = {
            mask: true,
        };
        T.common.ajax.request(Api.user_userInfo_v1, null, cfg, function(data, code, msg)
        {
            $scope.user = data.user;
            $scope.userId = T.common.util.getParameter("userId");
            $scope.account = T.common.util.getParameter("account");
            $scope.$apply();
        });
    };

    $scope.submitForm = function(isValid)
    {
        if(isValid)
        {
            $scope.formdata.userId = $scope.userId;
            var cfg = {
                mask: true,
                care: true,
            };
            T.common.ajax.request(Api.user_active_v1, $scope.formdata, cfg, function(data, code, msg)
            {
                switch(code)
                {
                    case 200:
                    {
                        $scope.formdata = {
                            levelCard: 1
                        };
                        $scope.$apply();
                        T.common.ui.toast("激活成功");
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