signinApp.controller("signin", function($scope, $rootScope, $location)
{
    $scope.submitForm = function(isValid)
    {
        if(isValid)
        {
            $scope.formdata.password = T.common.util.md5($scope.formdata.passwd);
            var cfg = {
                mask: true,
                care: true
            };
            T.common.ajax.request(Api.user_signin_v1, $scope.formdata, cfg, function(data, code, msg)
            {
                switch(code)
                {
                    case 200:
                    {
                        localStorage.setItem(T.common.cfg.key + ".sid", data.sid);
                        localStorage.setItem(T.common.cfg.key + ".showNotice", "true");
                        location.href = "main.html";
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