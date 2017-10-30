app.controller("sale", function($scope, $rootScope, $location)
{
    $scope.submitForm = function(isValid)
    {
        if(isValid)
        {
            $scope.formdata.pointAmount = $scope.formdata.pointAmountTmp * 20;
            $scope.formdata.password = T.common.util.md5($scope.formdata.operatePasswd);

            if(confirm("确定挂单出售" + $scope.formdata.pointAmount + "积分?"))
            {
                var cfg = {
                    mask: true,
                    care: true,
                };
                T.common.ajax.request(Api.order_create_v1, $scope.formdata, cfg, function(data, code, msg)
                {
                    switch(code)
                    {
                        case 200:
                        {
                            $scope.formdata = {};
                            $scope.$apply();
                            T.common.ui.toast("成功挂单");
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