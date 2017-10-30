app.controller("notice_list", function($scope, $rootScope, $location, $uibModal)
{
    var pageNo = 1;
    var pageSize = 20;
	$scope.admin_username=localStorage.getItem(T.common.cfg.key + ".username");
    $scope.getData = function()
    {
        var param = {
            pageNo: pageNo,
            pageSize: pageSize
        };
        var cfg = {
            mask: true
        };
        T.common.ajax.request(Api.admin_noticeList_v1, param, cfg, function(data, code, msg)
        {
            $scope.noticeList = data.noticeList;
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
                case "查看":
                {
                    $location.url("/notice_info?id=" + $scope.noticeList[index].noticeId);
                    break;
                }
                case "删除":
                {
                    if(confirm("确定要删除吗?"))
                    {
                        var param = {
                            id: $scope.noticeList[index].noticeId
                        };
                        var cfg = {
                            mask: true
                        };
                        T.common.ajax.request(Api.admin_noticeDelete_v1, param, cfg, function()
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