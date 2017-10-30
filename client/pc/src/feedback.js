app.controller("feedback", function($scope, $rootScope, $location)
{
    $scope.submitForm = function(isValid)
    {
        if(isValid)
        {
            var cfg = {
                mask: true,
            };
            T.common.ajax.request(Api.feedback_add_v1, $scope.formdata, cfg, function(data, code, msg)
            {
                $scope.formdata = {};
                $scope.$apply();
                T.common.ui.toast("非常感谢您的反馈");
            });
        }
    };
});