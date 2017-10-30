app.controller("game", function($scope, $rootScope, $location)
{
    $scope.getInfo = function()
    {
        var cfg = {
            mask: true,
        };
        T.common.ajax.request(Api.game_info_v1, null, cfg, function(data, code, msg)
        {
            var shopIndex = parseInt(Math.random() * 10000000000) % 5 + 1;
            var shop = [
                {},
                {
                    name: "食杂店",
                    img: "./drawable/img_game_house_1.png",
                    level: 1
                },
                {
                    name: "大超市",
                    img: "./drawable/img_game_house_2.png",
                    level: 2
                },
                {
                    name: "休闲会所",
                    img: "./drawable/img_game_house_3.png",
                    level: 3
                },
                {
                    name: "大酒店",
                    img: "./drawable/img_game_house_4.png",
                    level: 4
                },
                {
                    name: "奢侈品商圈",
                    img: "./drawable/img_game_house_5.png",
                    level: 5
                },
            ];

            $scope.shop = shop[shopIndex];
            $scope.split = data.split;
            $scope.todayPoint = data.todayPoint;
            $scope.userinfo = data.userinfo;
            $scope.$apply();
        });
    };

    $scope.brush = function()
    {
        var cfg = {
            mask: true,
            care: true,
        };
        T.common.ajax.request(Api.game_brush_v1, null, cfg, function(data, code, msg)
        {
            switch(code)
            {
                case 200:
                {
                    $scope.brushInfo = data.brush;
                    $scope.$apply();
                    $('#app_brush_success').fadeIn(500);
                    document.getElementById("bgmusic").play();
                    break;
                }
                default:
                {
                    T.common.ui.toast(msg);
                }
            }
        });
    };

    $scope.brushSuccessClose = function()
    {
        $('#app_brush_success').fadeOut(300, function()
        {
            $scope.getInfo();
        });
    };

    $scope.getInfo();
});