app.controller("notice_add", function($scope, $rootScope, $location, $uibModal)
{
	$scope.ue = UE.getEditor('editor');
	$scope.admin_username=localStorage.getItem(T.common.cfg.key + ".username");
    $scope.submitForm = function(isValid)
    {
        if(isValid)
        {
			$scope.formdata.content=UE.getEditor('editor').getContent();
            var cfg = {
                mask: true
            };
            T.common.ajax.request(Api.admin_noticeCreate_v1, $scope.formdata, cfg, function(data, code, msg)
            {
                T.common.ui.toast("发布成功");
                $scope.formdata = {};
                $scope.$apply();
            });
        }
    };
});