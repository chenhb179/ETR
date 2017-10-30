app.controller("transfer_point", function($scope, $rootScope, $location)
{
    $scope.getPoints = function()
    {
        var cfg = {
            mask: true,
        };
        T.common.ajax.request(Api.user_userInfo_v1, null, cfg, function(data, code, msg)
        {
            $scope.user = data.user;
            $scope.$apply();
        });
    };

    $scope.submitForm = function(isValid)
    {
        if(isValid)
        {
            $scope.formdata.password = T.common.util.md5($scope.formdata.operatePasswd);
            var cfg = {
                mask: true,
                care: true,
            };
            T.common.ajax.request(Api.transfer_transferPoint_v1, $scope.formdata, cfg, function(data, code, msg)
            {
                switch(code)
                {
                    case 200:
                    {
                        $scope.formdata = {};
                        $scope.$apply();
                        T.common.ui.toast("转让成功");
                        $scope.getPoints();
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

    $scope.getPoints();
});