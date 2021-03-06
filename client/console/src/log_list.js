app.controller("log_list", function($scope, $rootScope, $location, $uibModal)
{
    var pageNo = 1;
    var pageSize = 20;

    $scope.getData = function()
    {
        var param = {
            pageNo: pageNo,
            pageSize: pageSize,
            logType: T.common.util.getParameter("type")
        };
        var cfg = {
            mask: true
        };
        T.common.ajax.request(Api.admin_logList_v1, param, cfg, function(data, code, msg)
        {
            $scope.logList = data.logList;
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
                    break;
                }
                case "删除":
                {
                    break;
                }
            }
        }
    };

    $scope.getData();
});