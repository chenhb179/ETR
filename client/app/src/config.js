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
            if(route.url === "game.html")
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
            templateUrl: "game.html"
        });
    }
};
window.app = angular.module("app", ["ngRoute", "ui.bootstrap"]).config(["$routeProvider", routelist]);
window.signinApp = angular.module("signinApp", []);
window.signupApp = angular.module("signupApp", []);
window.findpwdApp = angular.module("findpwdApp", []);

var server = "http://localhost:8080/credit/api";
var websocket = "ws://localhost:8080/credit";
if(window.profile === "product")
{
    server = "http://www.etr888.com/credit/api";
    websocket = "ws://www.etr888.com/credit";
}

var api = {
    // websocket
    ws_signin_v1: websocket + "/ws/signin/v1",

    // 用户接口
    user_signup_v1: server + "/user/signup/v1",
    user_signin_v1: server + "/user/signin/v1",
    user_findPwd_v1: server + "/user/findPwd/v1",
    user_userInfo_v1: server + "/user/userInfo/v1",
    user_updateUser_v1: server + "/user/updateUser/v1",
    user_updatePwd_v1: server + "/user/updatePwd/v1",
    user_updateOperatePwd_v1: server + "/user/updateOperatePwd/v1",
    user_updateMobile_v1: server + "/user/updateMobile/v1",
    user_team_v1: server + "/user/team/v1",
    user_upgrade_v1: server + "/user/upgrade/v1",
    user_quickSignup_v1: server + "/user/quickSignup/v1",
    user_myUserList_v1: server + "/user/myUserList/v1",
    user_active_v1: server + "/user/active/v1",
    user_upgradeCard_v1: server + "/user/upgradeCard/v1",
    user_pointToJidian_v1: server + "/user/pointToJidian/v1",
    user_reActive_v1: server + "/user/reActive/v1",

    // 公告
    notice_getList_v1: server + "/notice/getList/v1",
    notice_info_v1: server + "/notice/info/v1",
    notice_latest_v1: server + "/notice/latest/v1",

    // 反馈
    feedback_add_v1: server + "/feedback/add/v1",

    // 订单
    order_create_v1: server + "/order/create/v1",
    order_newList_v1: server + "/order/newList/v1",
    order_buy_v1: server + "/order/buy/v1",
    order_saleList_v1: server + "/order/saleList/v1",
    order_buyList_v1: server + "/order/buyList/v1",
    order_cancel_v1: server + "/order/cancel/v1",
    order_confirmPay_v1: server + "/order/confirmPay/v1",

    // 转让
    transfer_transferPoint_v1: server + "/transfer/transferPoint/v1",
    transfer_transferJidian_v1: server + "/transfer/transferJidian/v1",
    transfer_getList_v1: server + "/transfer/getList/v1",

    // 积分变更
    change_getList_v1: server + "/change/getList/v1",

    // 奖励
    reward_getList_v1: server + "/reward/getList/v1",

    // 游戏
    game_info_v1: server + "/game/info/v1",
    game_brush_v1: server + "/game/brush/v1",

    // 验证码
    code_findPwd_v1: server + "/code/findPwd/v1",
    code_updatePwd_v1: server + "/code/updatePwd/v1",
    code_signup_v1: server + "/code/signup/v1",
	code_updateInfo_v1: server + "/code/updateInfo/v1",

    // 配置
    admin_settingInfo_v1: server + "/admin/settingInfo/v1",
};
window.Api = api;

/**
 * 全局配置, 允许修改
 */
T.common.cfg = {
    key: "credit.app",

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
        console.log(info);
    },

    // ajax 请求失败
    ajaxFail: function(XMLHttpRequest, textStatus, errorThrown)
    {
        var info = "";
        info += "请求error, 网络请求错误:\n\n";
        info += "status :" + XMLHttpRequest.status + "\n\n";
        info += "textStatus :" + textStatus + "\n\n";
        console.log(info);
    }
};

T.common.ui = {

    /**
     * 提示
     * @param msg
     */
    toast: function(msg)
    {
        var tpl = "<div id=\"${id}\" style=\"position: absolute; z-index: 100000;left: 40px; right: 40px; bottom: 60px; height: 40px;display: none;border-radius: 4px;box-shadow: 0px 0px 5px #000000;\">" +
            "<div style=\"position: absolute; left: 0px; top: 0px;right: 0px; bottom: 0px;background-color: #000000; opacity: 0.7; border-radius: 4px;\">&nbsp;</div>" +
            "<div style=\"position: absolute; left: 0px; top: 0px;right: 0px; bottom: 0px;text-align: center; line-height: 40px;color: #eeeeee;font-size: 14px;\">${msg}</div>" +
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
     * 读取操作密码
     */
    getOperatePasswd: function($uibModal, callback)
    {
        var modal = {
            animation: true,
            controller: "dialog_passwd",
            resolve: {
                items: function()
                {
                    return null;
                }
            }
        };
        if(window.profile === "product")
        {
            modal.template = window.routeMetadata["/dialog_passwd"];
        }
        else
        {
            modal.templateUrl = window.routeMetadata["/dialog_passwd"];
        }
        var modalInstance = $uibModal.open(modal);
        modalInstance.result.then(function(operatePasswd)
        {
            callback(operatePasswd);
        }, function()
        {
            console.log("dialog dismiss");
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

T.common.oss = {
    /**
     * 上传文件
     * @param file
     * @param callback
     */
    upload: function(file, callback)
    {
        var client = new OSS.Wrapper({
            region: "oss-ap-southeast-1",
            accessKeyId: "LTAIC9T1EiMapPI2",
            accessKeySecret: "OVLwlJUaO9osabCjLBPamALCruv9GZ",
            bucket: "etr"
        });

        // 生成osskey
        var tmp = file.name.split(".");
        var osskey = T.common.user.getSid() + "_" + new Date().getTime() + "." + tmp[tmp.length - 1];

        console.log("上传文件: " + file.name + " -> " + osskey);

        var loadingDom = "<div id=\"_upload_loading\">" +
            "<div style=\"position: fixed; left: 0px; top: 0px; right: 0px; bottom: 0px;z-index: 10000;background-color: #000000; opacity: 0;\"></div>" +
            "<table style=\"z-index: 10000;position: fixed; left: 0px; right: 0px; top: 0px; bottom: 0px;width: 100%; height: 100%;\">" +
            "<tr>" +
            "<td>" +
            "<div style=\"width: 200px;margin: auto;background-color: #000000; opacity: 0.7;color: #cccccc;border-radius: 4px;padding: 24px 0px 24px 0px;text-align: center;font-size: 16px;box-shadow: 0px 0px 5px #000000;\">正在上传文件请稍后</div>" +
            "</td>" +
            "</tr>" +
            "</table>" +
            "</div>";
        $("body").append($(loadingDom));

        client.multipartUpload(osskey, file).then(function(result)
        {
            $("#_upload_loading").remove();
            callback(osskey);
        }).catch(function(err)
        {
            $("#_upload_loading").remove();
            alert("上传失败请重试");
        });
    },
};