app.controller("data_daily_show", function($scope, $rootScope, $location, $uibModal)
{
    $scope.getData = function()
    {
        var param = {
        };
        var cfg = {
            mask: true
        };
        T.common.ajax.request(Api.count_showCount_v1, param, cfg, function(data, code, msg)
        {
			//趋势图
			//转数组
			var value=eval("("+data.value+")");
			var times_str=value.times.substring(1,value.times.length-1);
			var xData=times_str.split(",");
			var values=eval(value.values);
			//组装Y轴数据
			var yData=[];
			for(var i=0;i<values.length;i++){
				yData.push(values[i]);
			}
			//画曲线图
			var ctx = document.getElementById("chart").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'line',
				data: {
					datasets: [{
						label: '每日分享奖励数据(默认显示最近30天)',
						data: yData,
						backgroundColor:'#fff',
						borderColor: '#008000',
						pointBackgroundColor:'#008000',
						pointBorderColor:'#008000',
					}],
					labels: xData
				},
				options: {
					scales: {
						yAxes: [{
							ticks:{
								autoSkip:true,
								autoSkipPadding:10,
								labelOffset:10,
								padding:10
							}
						}]
					}
				}
			});
			//列表
			$scope.dateList=xData;
			$scope.valueList=yData;
			$scope.$apply();
        });
    };

    $scope.getData();
});