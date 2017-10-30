app.controller("active", function($scope, $rootScope, $location, $uibModalInstance, items)
{
    $scope.submitForm = function(isValid)
    {
        if(isValid)
        {
            $scope.formdata.userId = items;
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
                        $uibModalInstance.close(true);
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