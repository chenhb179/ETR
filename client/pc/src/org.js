app.controller("org", function($scope, $rootScope, $location)
{
    $scope.filter = function(isValid)
    {
        if(isValid)
        {
            $scope.showTree($scope.filterAccount);
        }
    };

    $scope.restore = function()
    {
        $scope.filterAccount = null;
        $scope.showTree(null);
    };

    $scope.showTree = function(filterAccount)
    {
        $('#org').html("");
        $('#chart').html("");

        var tpl = '<li isLeft="${isLeft}">' +
            '<div class="member">' +
            '<div>${username}</div>' +
            '<div>${leftInvest} 总 ${rightInvest}</div>' +
            // '<div>${leftPerformance} 总 ${rightPerformance}</div>' +
            '<div>等级: ${level}</div>' +
            '<div>信用分: ${points}</div>' +
            '</div>' +
            '<ul id="org_node_${userId}"></ul>' +
            '</li>';

        var start = 0;
        for(var i = 0; i < $scope.userList.length; i++)
        {
            var it = $scope.userList[i];
            if(it.username === filterAccount)
            {
                start = i;
                break;
            }
        }

        var subUserCounter = new Object();
        for(var i = start; i < $scope.userList.length; i++)
        {
            var it = $scope.userList[i];

            subUserCounter["#org_node_" + it.userId] = 0;
            if(it.parentId > 0)
            {
                subUserCounter["#org_node_" + it.parentId] = subUserCounter["#org_node_" + it.parentId] + 1;
            }

            var html = juicer(tpl, it);
            if(i === start)
            {
                $('#org').html(html);
            }
            else
            {
                $('#org_node_' + it.parentId).append(html);
            }
        }

         //加入快速注册
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

		//默认显示2层
		var node_c=$(".jOrgChart").find(".node-container:eq(0)");
		node_c.find("tr:eq(0)").attr("class","node-cells contracted");
		node_c.find("tr:eq(1)").css("visibility","hidden");
		node_c.find("tr:eq(2)").css("visibility","hidden");
		node_c.find("tr:eq(3)").css("visibility","hidden");
        $("#chart button").bind("click", function()
        {
            var parentId = parseInt($(this).attr("parentId"));
            for(var i = 0; i < $scope.userList.length; i++)
            {
                var user = $scope.userList[i];
                if(user.userId === parentId)
                {
                    $location.url("/quicksignup?parent=" + user.username);
                    $scope.$apply();
                    return;
                }
            }
        });
    };

    var cfg = {
        mask: true
    };
    T.common.ajax.request(Api.user_team_v1, null, cfg, function(data, code, msg)
    {
        $scope.userList = data.userList;
        $scope.showTree();
    });
});