// 全局配置
window.profile = __profile__;
if(!window.T)
{
    window.T = {};
    T.common = {};
}

// 初始化angularjs
var routelist = function($routeProvider)
{
    // 自动解析路由
    var routeList = __ROUTELIST__;
    // 保存所有路由元数据
    window.routeMetadata = {};

    $routeProvider.otherwise({
        redirectTo: "/"
    });

    // 生产用template
    if(window.profile === "product")
    {
        var defaultTemplate;
        for(var i = 0; i < routeList.length; i++)
        {
            var route = routeList[i];
            $routeProvider.when(route.route, {
                template: route.template
            });
            if(route.url === "user_list.html")
            {
                defaultTemplate = route.template;
            }

            window.routeMetadata[route.route] = route.template;
        }
        $routeProvider.when("/", {
            template: defaultTemplate
        });
    }
    // 开发用tempmlateUrl
    else
    {
        for(var i = 0; i < routeList.length; i++)
        {
            var route = routeList[i];
            $routeProvider.when(route.route, {
                templateUrl: route.url
            });

            window.routeMetadata[route.route] = route.url;
        }
        $routeProvider.when("/", {
            templateUrl: "user_list.html"
        });
    }
};
window.app = angular.module("app", ["ngRoute", "ui.bootstrap"]).config(["$routeProvider", routelist]);
window.signinApp = angular.module("signinApp", []);

var server = "http://localhost:8080/credit/api";
if(window.profile === "product")
{
    server = "http://www.etr888.com/credit/api";
}

var api = {
    // 用户
    admin_signin_v1: server + "/admin/signin/v1",
    admin_userList_v1: server + "/admin/userList/v1",
    admin_userListInactive_v1: server + "/admin/userListInactive/v1",
    admin_userAdd_v1: server + "/admin/userAdd/v1",
    admin_team_v1: server + "/admin/team/v1",
    admin_inviterCount_v1: server + "/admin/inviterCount/v1",
    admin_userDelete_v1: server + "/admin/userDelete/v1",
    admin_userInfo_v1: server + "/admin/userInfo/v1",
    admin_updateUser_v1: server + "/admin/updateUser/v1",

    // 信用分
    admin_transferList_v1: server + "/admin/transferList/v1",
    admin_changeList_v1: server + "/admin/changeList/v1",

    // 订单
    admin_orderSaleList_v1: server + "/admin/orderSaleList/v1",
    admin_orderBuyList_v1: server + "/admin/orderBuyList/v1",
	admin_orderSaleFinish_v1: server + "/admin/orderSaleFinish/v1",
	admin_orderBuyFinish_v1: server + "/admin/orderBuyFinish/v1",

    // 公告
    admin_noticeList_v1: server + "/admin/noticeList/v1",
    admin_noticeInfo_v1: server + "/admin/noticeInfo/v1",
    admin_noticeCreate_v1: server + "/admin/noticeCreate/v1",
    admin_noticeDelete_v1: server + "/admin/noticeDelete/v1",

    // 反馈
    admin_feedbackList_v1: server + "/admin/feedbackList/v1",
    admin_feedbackDelete_v1: server + "/admin/feedbackDelete/v1",
    admin_feedbackDeal_v1: server + "/admin/feedbackDeal/v1",

    // 日志
    admin_logList_v1: server + "/admin/logList/v1",

    // 设置
    admin_settingInfo_v1: server + "/admin/settingInfo/v1",
    admin_updateSetting_v1: server + "/admin/updateSetting/v1",
    admin_pointSum_v1: server + "/admin/pointSum/v1",
	
	//数据统计
		count_staticCount_v1: server + "/count/staticCount/v1",//每日新生静态奖励数据接口
		count_dynamicCount_v1: server + "/count/dynamicCount/v1",//每日新生全部动态奖励数据接口
		count_showCount_v1: server + "/count/showCount/v1",//每日新生分享奖励数据接口
		count_teamCount_v1: server + "/count/teamCount/v1",//每日新生团队津贴数据接口
		count_balanceCount_v1: server + "/count/balanceCount/v1",//每日新生平衡奖励数据接口
		count_manageCount_v1: server + "/count/manageCount/v1",//每日新生管理津贴数据接口
		count_withdrawalsCount_v1: server + "/count/withdrawalsCount/v1",//每日新生提现数据接口
		count_registerCount_v1: server + "/count/registerCount/v1",//每日新生会员（二维码和快速注册）数据接口
};
window.Api = api;

/**
 * 全局配置, 允许修改
 */
T.common.cfg = {
    key: "credit.console",

    // ajax请求回调
    ajaxSuccess: function(cfg, data, code, msg, callback)
    {
        switch(code)
        {
            // 成功
            case 200:
            {
                callback(data, code, msg);
                break;
            }
            // 未登录
            case 301:
            // 参数错误
            case 400:
            // 请求认证错误
            case 401:
            // 无权限
            case 403:
            // 接口不存在
            case 404:
            {
                alert("登录信息过期请重新登录");
                console.log(msg);
                location.href = "signin.html";
                break;
            }
            // 服务器异常
            case 503:
            {
                alert("系统异常请稍后重试");
                break;
            }
            // 业务异常
            default:
            {
                if(cfg.care)
                {
                    callback(data, code, msg);
                }
                else
                {
                    console.log(msg);
                }
                break;
            }
        }
    },

    // ajax 处理失败
    ajaxHandleFail: function(e)
    {
        var info = "请求success, 回调错误:\n\n";
        info += "message :" + e.message + "\n\n";
        info += "lineNumber :" + e.lineNumber + "\n\n";
        info += "name :" + e.name + "\n\n";
        info += "number :" + e.number + "\n\n";
        info += "description :" + e.description + "\n\n";
        info += "fileName :" + e.fileName + "\n\n";
        info += "stack :\n" + e.stack + "\n\n";
        console(info);
    },

    // ajax 请求失败
    ajaxFail: function(XMLHttpRequest, textStatus, errorThrown)
    {
        var info = "";
        info += "请求error, 网络请求错误:\n\n";
        info += "status :" + XMLHttpRequest.status + "\n\n";
        info += "textStatus :" + textStatus + "\n\n";
        console(info);
    }
};

T.common.ui = {

    /**
     * 提示
     * @param msg
     */
    toast: function(msg)
    {
        var tpl = "<div id=\"${id}\" style=\"position: absolute; z-index: 100000; right: 50px; top: 100px; width: 250px; height: 70px;display: none;border-radius: 4px;box-shadow: 0px 0px 5px #000000;\">" +
            "<div style=\"position: absolute; left: 0px; top: 0px;right: 0px; bottom: 0px;background-color: #000000; opacity: 0.8; border-radius: 4px;\">&nbsp;</div>" +
            "<div style=\"position: absolute; left: 0px; top: 0px;right: 0px; bottom: 0px;text-align: center; line-height: 70px;color: #eeeeee;font-size: 14px;\">${msg}</div>" +
            "</div>";
        var data = {
            id: "_toast",
            msg: msg
        };
        var html = juicer(tpl, data);
        $("body").append(html);
        $("#" + data.id).fadeIn(300, function()
        {
            setTimeout(function()
            {
                $("#" + data.id).fadeOut(300, function()
                {
                    $("#" + data.id).remove();
                });
            }, 1500);
        });
    },

    /**
     * 格式化时间
     */
    formatTime: function(yyyyMMddHHmmss)
    {
        return T.common.time.format(T.common.time.parse(yyyyMMddHHmmss + "", "yyyyMMddHHmmss"), "yyyy-MM-dd HH:mm:ss");
    },
};