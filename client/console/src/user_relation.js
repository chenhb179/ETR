app.controller("user_relation", function($scope, $rootScope, $location)
{
    $scope.showTree = function()
    {
        $('#org').html("");
        $('#chart').html("");

        var tpl = '<li isLeft="${isLeft}">' +
            '<div class="member">' +
            '<div>${username}</div>' +
            '<div>${leftInvest} 总 ${rightInvest}</div>' +
            '<div>姓名: ${name}</div>' +
            '<div>等级: ${level}</div>' +
            '<div>信用分: ${points}</div>' +
            '</div>' +
            '<ul id="org_node_${userId}"></ul>' +
            '</li>';

        var subUserCounter = {};
        for(var i = 0; i < $scope.userList.length; i++)
        {
            var it = $scope.userList[i];

            subUserCounter["#org_node_" + it.userId] = 0;
            if(it.parentId > 0)
            {
                subUserCounter["#org_node_" + it.parentId] = subUserCounter["#org_node_" + it.parentId] + 1;
            }

            var html = juicer(tpl, it);
            if(i === 0)
            {
                $('#org').html(html);
            }
            else
            {
                $('#org_node_' + it.parentId).append(html);
            }
        }

        // 加入快速注册
        for(var key in subUserCounter)
        {
            var userId = key.split("_")[2];
            var count = subUserCounter[key];
            if(count !== 2)
            {
                var tplreg = '<li>' +
                    '<div class="member">' +
                    '<div style="background-color: #ffffff;border-radius: 4px 4px 0px 0px;">&nbsp;</div>' +
                    '<div style="color: red;"><button parentId="' + userId + '" class="btn btn-success">快速注册</button></div>' +
                    '</div>' +
                    '</li>';

                if(count === 0)
                {
                    $(key).append(tplreg);
                }
                else
                {
                    var isLeft = $($(key).children()[0]).attr("isLeft");
                    if(isLeft === "1")
                    {
                        $(key).append(tplreg);
                    }
                    else
                    {
                        $(key).prepend(tplreg);
                    }
                }
            }
        }

        $("#org").jOrgChart({
            chartElement: '#chart',
        });

        $("#chart button").bind("click", function()
        {
            var parentId = parseInt($(this).attr("parentId"));
            for(var i = 0; i < $scope.userList.length; i++)
            {
                var user = $scope.userList[i];
                if(user.userId === parentId)
                {
                    $location.url("/user_add?parent=" + user.username);
                    $scope.$apply();
                    return;
                }
            }
        });
    };

    $scope.search = function()
    {
        var param = {
            username: $scope.account
        };
        var cfg = {
            mask: true,
            care: true
        };
        T.common.ajax.request(Api.admin_team_v1, param, cfg, function(data, code, msg)
        {
            switch(code)
            {
                case 200 :
                {
                    $scope.userList = data.userList;
                    $scope.showTree();
                    break;
                }
                default:
                {
                    T.common.ui.toast(msg);
                    break;
                }
            }
        });
    };
});