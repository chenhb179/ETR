app.controller("feedback_list", function($scope, $rootScope, $location, $uibModal)
{
    var pageNo = 1;
    var pageSize = 20;
	$scope.admin_username=localStorage.getItem(T.common.cfg.key + ".username");
    $scope.getData = function()
    {
        var param = {
            pageNo: pageNo,
            pageSize: pageSize,
            isDealed: T.common.util.getParameter("deal")
        };
        var cfg = {
            mask: true
        };
        T.common.ajax.request(Api.admin_feedbackList_v1, param, cfg, function(data, code, msg)
        {
            for(var i = 0; i < data.feedbackList.length; i++)
            {
                data.feedbackList[i].display = param.isDealed === 0 ? "block-inline" : "none";
            }
            $scope.feedbackList = data.feedbackList;
            $scope.$apply();

            var totalPages = data.totalrecords % pageSize === 0 ? data.totalrecords / pageSize : data.totalrecords / pageSize + 1;
            totalPages = totalPages <= 0 ? 1 : totalPages;
            var options = {
                currentPage: pageNo,
                totalPages: totalPages,
                onPageChanged: function(e, oldPage, newPage)
                {
                    pageNo = newPage;
                    $scope.getData();
                }
            };
            $(".pagination").bootstrapPaginator(options);
        });
    };

    $scope.onListItemClick = function($event)
    {
        var index = $($event.target).attr("index");
        if(index)
        {
            var btn = $($event.target).html();
            switch(btn)
            {
                case "标记已处理":
                {
                    if(confirm("确定要标记已处理吗?"))
                    {
                        var param = {
                            id: $scope.feedbackList[index].feedbackId
                        };
                        var cfg = {
                            mask: true
                        };
                        T.common.ajax.request(Api.admin_feedbackDeal_v1, param, cfg, function()
                        {
                            T.common.ui.toast("处理成功");
                            $scope.getData();
                        });
                    }
                    break;
                }
                case "删除":
                {
                    if(confirm("确定要删除吗?"))
                    {
                        var param = {
                            id: $scope.feedbackList[index].feedbackId
                        };
                        var cfg = {
                            mask: true
                        };
                        T.common.ajax.request(Api.admin_feedbackDelete_v1, param, cfg, function()
                        {
                            T.common.ui.toast("删除成功");
                            $scope.getData();
                        });
                    }
                    break;
                }
            }
        }
    };

    $scope.getData();
});