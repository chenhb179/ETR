app.controller("user_add", function($scope, $rootScope, $location, $uibModal)
{
    $scope.formdata = {
        place: T.common.util.getParameter("parent")
    };
	$scope.admin_username=localStorage.getItem(T.common.cfg.key + ".username");

    $scope.submitForm = function(isValid)
    {
        if(isValid)
        {
            var cfg = {
                mask: true,
                care: true
            };
            T.common.ajax.request(Api.admin_userAdd_v1, $scope.formdata, cfg, function(data, code, msg)
            {
                switch(code)
                {
                    case 200 :
                    {
                        T.common.ui.toast("添加成功");
                        $scope.formdata = {};
                        $scope.$apply();
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