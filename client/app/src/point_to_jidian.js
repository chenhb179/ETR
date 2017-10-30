app.controller("point_to_jidian", function($scope, $rootScope, $location)
{
    $scope.getPoints = function()
    {
        var cfg = {
            mask: true,
        };
        T.common.ajax.request(Api.user_userInfo_v1, null, cfg, function(data, code, msg)
        {
            $scope.points = data.user.points;
            $scope.$apply();
        });
    };

    $scope.submitForm = function(isValid)
    {
        if(isValid)
        {
            $scope.formdata.operatePasswd = T.common.util.md5($scope.formdata.operatePasswd1);
            var cfg = {
                mask: true,
                care: true,
            };
            T.common.ajax.request(Api.user_pointToJidian_v1, $scope.formdata, cfg, function(data, code, msg)
            {
                switch(code)
                {
                    case 200:
                    {
                        $scope.formdata = {};
                        $scope.$apply();
                        T.common.ui.toast("转换成功");
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