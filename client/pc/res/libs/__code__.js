/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(29);
	__webpack_require__(30);
	__webpack_require__(31);
	__webpack_require__(32);
	__webpack_require__(33);
	__webpack_require__(34);
	module.exports = __webpack_require__(35);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// 全局配置
	window.profile = ("product");
	if(!window.T)
	{
	    window.T = {};
	    T.common = {};
	}

	// 初始化angularjs
	var routelist = function($routeProvider)
	{
	    // 自动解析路由
	    var routeList = ([{"url":"buy_finish.html","route":"/buy_finish","template":"<style>\n    th {\n        background-color: #5864AE;\n        color: #ffffff;\n    }\n\n    .app-body {\n        margin: 20px 30px 20px 30px;\n        width: 980px;\n    }\n\n    .app-panel {\n        background-color: #ffffff;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        line-height: 40px;\n        font-size: 18px;\n    }\n</style>\n\n<div ng-controller=\"buy_finish\" class=\"app-body\">\n    <div class=\"app-title\">已完成充值列表</div>\n    <div class=\"app-panel\">\n        <table class=\"table table-hover\">\n            <thead>\n            <tr>\n                <th>序号</th>\n                <th>出售账号</th>\n                <th>信用积分</th>\n                <th>时间</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"it in listdata.orderList\">\n                <td>{{it.orderId}}</td>\n                <td>{{it.username}}</td>\n                <td>{{it.pointAmount}}</td>\n                <td>{{it.createTime}}</td>\n            </tr>\n            </tbody>\n        </table>\n        <div>\n            <ul class=\"pagination\" style=\"margin: 0px 0px 14px 14px;\"></ul>\n        </div>\n    </div>\n</div>"},{"url":"buy_notfinish.html","route":"/buy_notfinish","template":"<style>\n    th {\n        background-color: #5864AE;\n        color: #ffffff;\n    }\n\n    .app-body {\n        margin: 20px 30px 20px 30px;\n        width: 980px;\n    }\n\n    .app-panel {\n        background-color: #ffffff;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        line-height: 40px;\n        font-size: 18px;\n    }\n</style>\n\n<div ng-controller=\"buy_notfinish\" class=\"app-body\">\n    <div class=\"app-title\">未完成充值列表</div>\n    <div class=\"app-panel\">\n        <table class=\"table table-hover\">\n            <thead>\n            <tr>\n                <th>序号</th>\n                <th>出售账号</th>\n                <th>信用积分</th>\n                <th>时间</th>\n                <th>状态</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"it in listdata.orderList\">\n                <td>{{it.orderId}}</td>\n                <td>{{it.username}}</td>\n                <td>{{it.pointAmount}}</td>\n                <td>{{it.createTime}}</td>\n                <td>待确认收款</td>\n            </tr>\n            </tbody>\n        </table>\n        <div>\n            <ul class=\"pagination\" style=\"margin: 0px 0px 14px 14px;\"></ul>\n        </div>\n    </div>\n</div>"},{"url":"buy_sure.html","route":"/buy_sure","template":"<style>\n    .app-panel {\n        width: 700px;\n        background-color: #ffffff;\n        margin: 40px 50px 40px 50px;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        text-align: center;\n        line-height: 40px;\n        background-color: #5864AE;\n        font-size: 18px;\n        color: #ffffff;\n    }\n\n    .app-subtitle {\n        line-height: 30px;\n        text-align: center;\n        color: #ffffff;\n        background-color: #4D59A1;\n    }\n\n    .app-form {\n        width: 380px;\n        margin: auto;\n        padding: 30px 0px 30px 0px;\n    }\n\n    .app-form > div {\n        margin-top: 20px;\n    }\n\n    .app-form > div > div:nth-child(1) {\n        width: 80px;\n        display: inline-block;\n        text-align: right;\n        margin-right: 20px;\n    }\n\n    .app-form > div > div:nth-child(3) {\n        width: 10px;\n        text-align: right;\n        display: inline-block;\n    }\n\n    .app-form > div > input {\n        width: 250px;\n        height: 32px;\n        background-color: #eeeeee;\n        padding: 0px 8px 0px 8px;\n        border: none;\n    }\n\t\n\t.head > h4{\n\t\tfont-weight:bold;\n\t}\n</style>\n\n<div ng-controller=\"buy_sure\" class=\"app-panel\">\n    <div class=\"app-title\">收款信息</div>\n\t<form class=\"app-form\" name=\"form\" class=\"form-horizontal\" novalidate>\n\t\t<div class=\"head\">\n            <h4>二维码充值</h4>\n            <img src=\"drawable/qrcode_3.png\"/>\n        </div>\n\t\t<div class=\"head\">\n            <h4>转账充值</h4>\n        </div>\n        <div>\n            <div>收款姓名</div>\n            <input disabled=\"true\" value=\"邱京君\"/>\n        </div>\n\t\t\n        <div>\n            <div>收款人银行开户行</div>\n            <input disabled=\"true\" value=\"中国工商银行福建省宁德市东侨支行\"/>\n        </div>\n\t\t<div>\n            <div>收款人银行账号</div>\n            <input disabled=\"true\" value=\"6222081407000539539\"/>\n        </div>\n\t\t<div>\n            <div>收款人银行开户行</div>\n            <input disabled=\"true\" value=\"中国农业银行福建省福州支行\"/>\n        </div>\n\t\t<div>\n            <div>收款人银行账号</div>\n            <input disabled=\"true\" value=\"6228480068600507872\"/>\n        </div>\n\t\t<div>\n            <div>收款人银行开户行</div>\n            <input disabled=\"true\" value=\"招商银行福建省福州市东门支行\"/>\n        </div>\n\t\t<div>\n            <div>收款人银行账号</div>\n            <input disabled=\"true\" value=\"6214866003339887\"/>\n        </div>\n        <div>\n            <div>&nbsp;</div>\n            <button ng-click=\"buy_sure()\" class=\"btn btn-success\">确认充值</button>\n        </div>>\n\t</form>\n</div>"},{"url":"buy.html","route":"/buy","template":"<style>\n    th {\n        background-color: #5864AE;\n        color: #ffffff;\n    }\n\n    .app-body {\n        margin: 20px 30px 20px 30px;\n        width: 980px;\n    }\n\n    .app-panel {\n        background-color: #ffffff;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        line-height: 40px;\n        font-size: 18px;\n    }\n</style>\n\n<div ng-controller=\"buy\" class=\"app-body\">\n    <div class=\"app-title\">充值</div>\n    <div class=\"app-panel\">\n        <table class=\"table table-hover\">\n            <thead>\n            <tr>\n                <th>序号</th>\n                <th>出售账号</th>\n                <th>信用积分</th>\n\t\t\t\t<th>人民币</th>\n                <th>时间</th>\n                <th>操作</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"it in listdata.orderList\">\n                <td>{{it.orderId}}</td>\n                <td>\n                    <div style=\"color: blue;cursor: pointer;\">{{it.username}}</div>\n                </td>\n                <td>{{it.pointAmount}}</td>\n\t\t\t\t<td>{{it.pointAmount*7}}</td>\n                <td>{{it.createTime}}</td>\n                <td>\n                    <button class=\"btn btn-success btn-xs\" ng-click=\"buy($index)\">充值</button>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n        <div>\n            <ul class=\"pagination\" style=\"margin: 0px 0px 14px 14px;\"></ul>\n        </div>\n    </div>\n</div>"},{"url":"change_list.html","route":"/change_list","template":"<style>\n    th {\n        background-color: #5864AE;\n        color: #ffffff;\n    }\n\n    .app-body {\n        margin: 20px 30px 20px 30px;\n        width: 980px;\n    }\n\n    .app-panel {\n        background-color: #ffffff;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        line-height: 40px;\n        font-size: 18px;\n    }\n</style>\n\n<div ng-controller=\"change_list\" class=\"app-body\">\n    <div class=\"app-title\">信用分变更记录</div>\n    <div class=\"app-panel\">\n        <table class=\"table table-hover\">\n            <thead>\n            <tr>\n                <th>序号</th>\n                <th>说明</th>\n                <th>数量</th>\n                <th>类型</th>\n                <th>时间</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"it in listdata.changeList\">\n                <td>{{it.changeId}}</td>\n                <td>{{it.descr}}</td>\n                <td>{{it.amount}}</td>\n                <td>{{it.type}}</td>\n                <td>{{it.createTime}}</td>\n            </tr>\n            </tbody>\n        </table>\n        <div>\n            <ul class=\"pagination\" style=\"margin: 0px 0px 14px 14px;\"></ul>\n        </div>\n    </div>\n</div>"},{"url":"customer.html","route":"/customer","template":"<style>\n    .app-panel {\n        width: 500px;\n        background-color: #ffffff;\n        margin: 40px 50px 40px 50px;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        text-align: center;\n        line-height: 40px;\n        background-color: #5864AE;\n        font-size: 18px;\n        color: #ffffff;\n    }\n\n    .app-customer {\n        background-color: #ffffff;\n    }\n\n    .app-customer > div {\n        display: inline-block;\n        width: 248px;\n        text-align: center;\n        padding: 20px 0px 20px 0px;\n    }\n\n    .app-customer > div > img {\n        width: 150px;\n        height: 150px;\n        margin-top: 20px;\n    }\n</style>\n\n<div ng-controller=\"customer\" class=\"app-panel\">\n    <div class=\"app-title\">联系客服</div>\n    <div class=\"app-customer\">\n        <div>\n            <div>客服微信1</div>\n            <img src=\"drawable/qrcode_1.png\"/>\n        </div>\n        <div>\n            <div>客服微信2</div>\n            <img src=\"drawable/qrcode_2.png\"/>\n        </div>\n    </div>\n</div>"},{"url":"dialog_notice.html","route":"/dialog_notice","template":"<style>\n    .app-notice-title {\n        color: #4157B0;\n        padding: 8px 14px 0px 14px;\n        font-size: 18px;\n        line-height: 40px;\n    }\n\n    .app-notice-type {\n        color: gray;\n        padding: 0px 14px 8px 14px;\n        font-size: 13px;\n        border-bottom: solid 1px #dddddd;\n    }\n\n    .app-notice-content {\n        padding: 14px;\n    }\n\n    .app-notice-btn {\n        line-height: 60px;\n        text-align: right;\n        padding-right: 14px;\n    }\n</style>\n\n<div class=\"app-dialog\">\n    <div class=\"app-notice-title\">{{notice.title}}</div>\n    <div class=\"app-notice-type\">{{notice.type}}&nbsp;&nbsp;{{notice.createTime}}</div>\n    <div class=\"app-notice-content\"><notice></>{{notice.content}}</notice></div>\n    <div class=\"app-notice-btn\">\n        <button class=\"btn btn-default\" ng-click=\"ok()\">关闭</button>\n    </div>\n</div>"},{"url":"dialog_passwd.html","route":"/dialog_passwd","template":"<style>\n    .app-dialog {\n    }\n\n    .app-dialog > div {\n        text-align: center;\n    }\n\n    .app-dialog input {\n        width: 250px;\n        height: 32px;\n        background-color: #eeeeee;\n        padding: 0px 8px 0px 8px;\n        border: none;\n    }\n\n    .app-dialog > div:nth-child(1) {\n        line-height: 40px;\n        background-color: #5864AE;\n        color: #ffffff;\n        text-align: center;\n        font-size: 16px;\n    }\n\n    .app-dialog > div:nth-child(2) {\n        line-height: 80px;\n    }\n\n    .app-dialog > div:nth-child(3) {\n        line-height: 60px;\n        background-color: #ffffff;\n    }\n</style>\n\n<div class=\"app-dialog\">\n    <div class=\"app-dialog-title\">确认</div>\n    <div>\n        <span>二级密码</span>\n        <input ng-model=\"passwd\" type=\"password\">\n    </div>\n    <div>\n        <button class=\"btn btn-default\" ng-click=\"cancel()\" style=\"margin-right: 14px;\">取消</button>\n        <button class=\"btn btn-success\" ng-click=\"ok()\">完成</button>\n    </div>\n</div>"},{"url":"feedback.html","route":"/feedback","template":"<style>\n    .app-panel {\n        width: 700px;\n        background-color: #ffffff;\n        margin: 40px 50px 40px 50px;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        text-align: center;\n        line-height: 40px;\n        background-color: #5864AE;\n        font-size: 18px;\n        color: #ffffff;\n    }\n\n    .app-form {\n        width: 500px;\n        margin: auto;\n        padding: 30px 0px 30px 0px;\n    }\n\n    .app-form > div {\n        margin-top: 20px;\n    }\n\n    .app-form > div > div {\n        width: 150px;\n        display: inline-block;\n        text-align: right;\n        margin-right: 20px;\n    }\n\n    .app-form > div > input {\n        width: 250px;\n        height: 32px;\n        background-color: #eeeeee;\n        padding: 0px 8px 0px 8px;\n        border: none;\n    }\n\n    .app-form > div > textarea {\n        width: 250px;\n        height: 200px;\n        background-color: #eeeeee;\n        padding: 0px 8px 0px 8px;\n        border: none;\n    }\n</style>\n\n<div ng-controller=\"feedback\" class=\"app-panel\">\n    <div class=\"app-title\">留言反馈</div>\n\n    <form class=\"app-form\" name=\"form\" class=\"form-horizontal\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n        <div>\n            <div>留言反馈标题</div>\n            <input ng-model=\"formdata.title\" required/>\n        </div>\n        <div>\n            <div>请留下您的联系方式</div>\n            <input ng-model=\"formdata.contact\" required/>\n        </div>\n        <div>\n            <div style=\"vertical-align: top;\">留言内容</div>\n            <textarea ng-model=\"formdata.content\" required></textarea>\n        </div>\n        <div>\n            <div>&nbsp;</div>\n            <button class=\"btn btn-success\" type=\"submit\" ng-disabled=\"form.$invalid\">保存反馈</button>\n        </div>\n    </form>\n</div>"},{"url":"findpwd.html","route":"/findpwd","template":"<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <title>找回密码</title>\n        <link href=\"libs/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n        <link href=\"style/style.css\" rel=\"stylesheet\">\n        <style>\n            body {\n                background-color: #CAD9CA\n            }\n\n            .app-body {\n                width: 1024px;\n                margin: auto;\n                position: relative;\n            }\n\n            .app-body > div:nth-child(1) > img {\n                width: 350px;\n                height: 300px;\n                position: absolute;\n                bottom: 0px;\n                right: 50px;\n            }\n\n            .app-box {\n                background-color: #ffffff;\n                box-shadow: 0px 0px 10px #aaaaaa;\n                width: 350px;\n                position: absolute;\n                bottom: 0px;\n                left: 50px;\n                padding: 30px;\n            }\n\n            .app-form {\n            }\n\n            .app-form > div {\n                margin-top: 24px;\n            }\n\n            .app-form input {\n                width: 100%;\n                height: 40px;\n                border: none;\n                border-bottom: solid 1px #dcdcdc;\n            }\n        </style>\n\n        <script src=\"libs/angular.min.js\"></script>\n        <script src=\"libs/jquery-3.2.1.min.js\"></script>\n        <script src=\"libs/jquery-md5.js\"></script>\n        <script src=\"libs/juicer-min.js\"></script>\n    </head>\n\n    <body ng-app=\"findpwdApp\" ng-controller=\"findpwd\">\n        <div class=\"app-body\">\n            <div class=\"col-sm-6\" style=\"height: 450px\">\n                <img src=\"drawable/img_find_password.png\">\n            </div>\n\n            <div class=\"col-sm-6\" style=\"height: 450px\">\n                <div class=\"app-box\">\n                    <div style=\"position: relative;\">\n                        <span style=\"font-size: 18px;\">找回密码</span>\n                        <a href=\"signin.html\" style=\"position: absolute; right: 0px;\">登录</a>\n                    </div>\n                    <form class=\"app-form\" name=\"form\" class=\"form-horizontal\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n                        <div>\n                            <input name=\"mobile\" ng-model=\"formdata.mobile\" ng-pattern=\"/^1[3578]{1}\\d{9}\\d?$/\" placeholder=\"请输入手机号码\" required>\n                        </div>\n\n                        <div>\n                            <input ng-model=\"formdata.code\" ng-pattern=\"/^\\d{6}$/\" style=\"width: 200px;margin-right: 6px;\" placeholder=\"请输入验证码\" required>\n                            <button ng-click=\"sendcode(form.mobile.$valid)\" ng-disabled=\"form.mobile.$invalid\" class=\"btn btn-primary\" style=\"width: 80px;\">发送短信</button>\n                        </div>\n\n                        <div>\n                            <input ng-model=\"formdata.passwd\" type=\"password\" placeholder=\"设置新密码\">\n                        </div>\n\n                        <div>\n                            <button type=\"submit\" ng-disabled=\"form.$invalid\" class=\"btn btn-success btn-block\" style=\"height: 40px;margin-top: 28px;\">完成</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </body>\n</html>\n\n<script src=\"libs/__code__.js\"></script>"},{"url":"game.html","route":"/game","template":"<style>\n    .app-panel {\n        width: 980px;\n        background-color: #ffffff;\n        margin: 40px 50px 40px 50px;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        text-align: center;\n        line-height: 40px;\n        background-color: #5864AE;\n        font-size: 18px;\n        color: #ffffff;\n    }\n\n    .app-game {\n        position: relative;\n        background-image: url('drawable/bg_game_scenes.png');\n        background-size: 100% 100%;\n        height: 620px;\n    }\n\n    .app-game-user {\n        position: absolute;\n        left: 20px;\n        top: 10px;\n    }\n\n    .app-game-user > img {\n        width: 100px;\n        height: 100px;\n        background-image: url('drawable/bg_icon_user.png');\n        padding: 9px;\n        background-size: 100% 100%;\n    }\n\n    .app-game-user > div {\n        display: inline-block;\n        vertical-align: middle;\n    }\n\n    .app-game-point {\n        height: 40px;\n        background-image: url('drawable/bg_game_credit_score.png');\n        width: 210px;\n        background-size: 100% 100%;\n        line-height: 40px;\n        margin-bottom: 8px;\n        padding: 0px 8px 0px 8px;\n        width: 210px;\n    }\n\n    .app-game-income {\n        height: 32px;\n        width: 90px;\n        display: inline-block;\n        padding: 0px 8px 0px 8px;\n        line-height: 32px;\n        background-image: url('drawable/bg_game_show_info.png');\n        background-size: 100% 100%;\n    }\n\n    .app-game-withdraw {\n        display: inline-block;\n        height: 32px;\n        line-height: 32px;\n        padding: 0px 14px 0px 14px;\n        background-image: url('drawable/bg_game_show_info.png');\n        background-size: 100% 100%;\n    }\n\n    .app-game-card {\n        position: absolute;\n        left: 450px;\n        bottom: 220px;\n        width: 110px;\n        height: 70px;\n    }\n\n    .app-game-sprite {\n        position: absolute;\n        bottom: 0px;\n        left: 210px;\n        height: 90px;\n        width: 380px;\n        background-image: url('drawable/bg_game_sprite.png');\n        background-size: 100% 100%;\n    }\n\n    .app-game-sprite > img {\n        width: 54px;\n        height: 114px;\n        position: absolute;\n        bottom: 5px;\n    }\n\n    .app-game-ranking {\n        position: absolute;\n        top: 30px;\n        right: 30px;\n        width: 50px;\n        height: 60px;\n    }\n\n    .app-game-shop {\n        position: absolute;\n        left: 150px;\n        bottom: 170px;\n        width: 300px;\n        height: 180px;\n    }\n\n    .app-game-level {\n        background-image: url('drawable/bg_game_show_info.png');\n        background-size: 100% 100%;\n        position: absolute;\n        bottom: 120px;\n        left: 150px;\n        width: 300px;\n        height: 40px;\n        padding: 0px 12px 0px 12px;\n        line-height: 40px;\n    }\n</style>\n\n<div ng-controller=\"game\" class=\"app-panel\">\n    <div class=\"app-title\">游戏大厅</div>\n    <div class=\"app-game\">\n\n        <!--用户信息-->\n        <div class=\"app-game-user\">\n            <!--头像-->\n            <img src=\"drawable/icon_user_default.png\">\n\n            <div>\n                <!--信用分-->\n                <div class=\"app-game-point\">\n                    <img style=\"width: 24px; height: 18px;position: relative; bottom: 2px;\" src=\"drawable/icon_game_credit_score.png\">\n                    <span style=\"color: #ffffff;\">信用分: {{userinfo.points}}</span>\n                </div>\n                <div>\n                    <!--拆分率-->\n                    <div class=\"app-game-income\">\n                        <img style=\"width: 16px; height: 16px;position: relative; bottom: 1px;\" src=\"drawable/icon_game_rate.png\">\n                        <span style=\"color: #ffffff\">{{split * 100}}%</span>\n                    </div>\n\n                    <!--提额-->\n                    <div class=\"app-game-withdraw\">\n                        <img style=\"width: 18px; height: 18px;position: relative; bottom: 1px;\" src=\"drawable/icon_game_withdraw.png\">\n                        <span style=\"color: #ffffff\">{{todayPoint}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!--刷卡-->\n        <img ng-click=\"brush()\" class=\"app-game-card\" src=\"drawable/btn_game_card.png\">\n\n        <!--人物-->\n        <div class=\"app-game-sprite\">\n            <img style=\"left: 50px;\" src=\"drawable/img_game_sprite1.png\"/>\n            <img style=\"left: 164px;\" src=\"drawable/img_game_sprite2.png\"/>\n            <img style=\"right: 50px;\" src=\"drawable/img_game_sprite3.png\"/>\n        </div>\n\n        <!--奖杯-->\n        <img class=\"app-game-ranking\" src=\"drawable/btn_game_ranking.png\">\n\n        <!--店铺-->\n        <img class=\"app-game-shop\" src=\"{{shop.img}}\">\n\n        <!--店铺等级-->\n        <div class=\"app-game-level\">\n            <img style=\"width: 20px; height: 20px;position: relative; bottom: 2px;\" src=\"drawable/icon_game_shop_title.png\">\n            <span style=\"font-size: 18px;color: #ffffff;margin: 14px;\">{{shop.name}}</span>\n            <span style=\"font-size: 16px; color: #F7F807;\">等级: {{shop.level}}</span>\n        </div>\n\n        <!--刷卡成功-->\n        <div id=\"app_brush_success\" style=\"display: none;\">\n            <div style=\"position: absolute; z-index: 1000; left: 0px; right: 0px; bottom: 0px; top: 0px;width: 100%; height: 100%;background-color: #000000; opacity: 0.6;\">&nbsp;</div>\n            <table style=\"position: absolute; z-index: 1000; left: 0px; right: 0px; bottom: 0px; top: 0px;width: 100%; height: 100%;\">\n                <tr>\n                    <td style=\"text-align: center;position: relative;\">\n                        <div ng-click=\"brushSuccessClose()\" style=\"color: #ffffff; position: absolute; right: 0px; top: 0px;padding: 14px;cursor: pointer;\">关闭</div>\n                        <img src=\"drawable/bg_game_crash_success.png\" style=\"width: 500px; height: 450px;\">\n                        <div style=\"text-align: center; color: #ffffff; font-size: 18px; position: absolute; top: 235px; left: 0px;right: 0px;\">刷卡成功!</div>\n                        <div style=\"position: absolute; top: 300px; left: 0px; right: 0px;padding: 0px 440px 0px 440px;\">\n                            <div style=\"wdith: 100px; height: 80px;color: #ffffff; font-size: 14px;text-align: left;line-height: 27px;\">\n                                <div>\n                                    <img src=\"drawable/icon_game_credit_score.png\" style=\"width: 20px; height: 20px;padding-bottom: 4px;\">\n                                    <span>+{{brushInfo.points}}</span>\n                                </div>\n                                <div style=\"display: none;\">\n                                    <img src=\"drawable/icon_game_withdraw.png\" style=\"width: 20px; height: 20px;padding-bottom: 4px;\">\n                                    <span>+{{brushInfo.points}}</span>\n                                </div>\n                                <div>\n                                    <img src=\"drawable/icon_game_shop_title.png\" style=\"width: 20px; height: 20px;padding-bottom: 4px;\">\n                                    <span>店铺更新</span>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n            </table>\n        </div>\n    </div>\n\n    <audio id=\"bgmusic\">\n        <source src=\"sound/sound_crash_card.mp3\" type=\"audio/mp3\">\n        <source src=\"sound/sound_crash_card.ogg\" type=\"audio/ogg\">\n    </audio>\n</div>"},{"url":"main.html","route":"/main","template":"<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <title>ETR国际信用社区</title>\n\n        <link href=\"libs/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n        <link href=\"libs/font-awesome/css/font-awesome.min.css\" rel=\"stylesheet\">\n        <link href=\"libs/jquery.jorgchart/jquery.jOrgChart.css\" rel=\"stylesheet\">\n\n        <script src=\"libs/angular.min.js\"></script>\n        <script src=\"libs/angular-route.js\"></script>\n        <script src=\"libs/ui-bootstrap-tpls-2.5.0.min.js\"></script>\n\n        <script src=\"libs/jquery-3.2.1.min.js\"></script>\n        <script src=\"libs/jquery-md5.js\"></script>\n        <script src=\"libs/bootstrap/js/bootstrap.min.js\"></script>\n        <script src=\"libs/bootstrap-paginator.min.js\"></script>\n        <script src=\"libs/jquery.jorgchart/jquery.jOrgChart.js\"></script>\n        <script src=\"libs/juicer-min.js\"></script>\n        <script src=\"libs/qrcode.min.js\"></script>\n        <script src=\"libs/aliyun-oss-sdk.min.js\"></script>\n\n        <style>\n            .app-actionbar {\n                background-color: #203037;\n                height: 60px;\n                line-height: 60px;\n                box-shadow: 0 0 14px #000;\n                z-index: 100;\n                position: relative;\n            }\n\n            .app-actionbar > div:nth-child(1) {\n                color: #ffffff;\n                font-size: 28px;\n                padding-left: 32px;\n            }\n\n            .app-actionbar > div:nth-child(2) {\n                position: absolute;\n                right: 80px;\n                top: 0px;\n            }\n\n            .app-actionbar li img {\n                width: 28px;\n                height: 28px;\n            }\n\n            .app-menu {\n                position: absolute;\n                left: 0x;\n                bottom:0px;\n                width:280px;\n                background-color: #4D59A1;\n                overflow-y: auto;\n                top:344px;\n            }\n\n            .app-menu img {\n                width: 28px;\n                height: 28px;\n                margin-right: 14px;\n            }\n\n            .app-menu a {\n                color: #ffffff;\n            }\n\n            .app-menu > div > div:nth-child(1) {\n                line-height: 44px;\n                height: 44px;\n                font-size: 14px;\n                padding-left: 14px;\n                color: #ffffff;\n            }\n\n            .app-menu > div > div:nth-child(2) > div {\n                line-height: 36px;\n                background-color: #424D8F;\n                font-size: 13px;\n                padding-left: 40px;\n            }\n\n            .app-userinfo {\n                background-color: #46529E;\n                padding: 14px;\n                position: absolute;\n                left: 0px;\n                width: 280px;\n                height: 284px;\n                top: 60px;\n                color: #ffffff;\n                font-size: 14px;\n                overflow: auto;\n            }\n\n            .app-userinfo > div {\n                line-height: 32px;\n                height: 32px;\n            }\n\n            .app-userinfo > div > div {\n                width: 100px;\n                display: inline-block;\n            }\n\n            .app-userinfo > div > div >img {\n                width: 16px;\n                height: 16px;\n            }\n\n            .app-completeinfo{\n                background-color: #000000;\n                opacity: 0.6;\n                width: 100%;\n                height: 100%;\n                position: fixed;\n                left:0px;\n                top:60px;\n                bottom:0px;\n                width:280px;\n                font-size: 32px;\n                color: #ffffff;\n                text-align: center;\n            }\n\n            .app-view {\n                position: absolute;\n                left: 280px;\n                right: 0px;\n                top: 60px;\n                bottom: 0px;\n                padding: 0px;\n                overflow-y: auto;\n                overflow-x: hidden;\n                background-color: #F2F2F2;\n            }\n\n\n            ::-webkit-scrollbar {width: 5px;height:6px;}\n            ::-webkit-scrollbar-track-piece{background-color: #4D59A1;margin: -2px;}\n            ::-webkit-scrollbar-thumb{background: #30365E;min-height: 150px;min-width: 150px;border-radius: 10px;}\n            ::-webkit-scrollbar-thumb:vertical:hover{background: #555555}\n            ::-webkit-scrollbar-thumb:horizontal:hover{background: #555555}\n        </style>\n    </head>\n\n    <body>\n        <!--ActionBar-->\n        <div class=\"app-actionbar\">\n            <div>ETR国际信用社区</div>\n            <div>\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#用户弹窗\" style=\"color: #ffffff;font-size: 16px;\">\n                    <span id=\"profile\">用户: 未登录</span>\n                    <i class=\"fa fa-caret-down\"></i>\n                </a>\n                <ul class=\"dropdown-menu\">\n                    <li>\n                        <a href=\"#/updateinfo\">\n                            <img src=\"drawable/icon_user_info.png\">\n                            <span>个人资料</span>\n                        </a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li>\n                        <a href=\"#/updatepwd\">\n                            <img src=\"drawable/inco_password.png\">\n                            <span>修改密码</span>\n                        </a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li>\n                        <a href=\"signin.html\">\n                            <img src=\"drawable/icon_login_out.png\">\n                            <span>退出</span>\n                        </a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li>\n                        <a href=\"#/feedback\">\n                            <img src=\"drawable/icon_feedback.png\">\n                            <span>留言反馈</span>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n\n        <!--Menu-->\n        <div class=\"app-menu\">\n            <div>\n                <div>\n                    <img src=\"drawable/icon_slider_home.png\">\n                    <a href=\"#/game\">首页</a>\n                </div>\n            </div>\n            <div>\n                <div>\n                    <img src=\"drawable/icon_slider_transaction.png\">\n                    <a data-toggle=\"collapse\" href=\"#充值提现\">充值提现</a>\n                </div>\n                <div id=\"充值提现\" class=\"panel-collapse collapse\">\n                    <div>\n                        <a href=\"#sale\">提现</a>\n                    </div>\n                    <div>\n                        <a href=\"#/buy\">充值</a>\n                    </div>\n                </div>\n            </div>\n            <div>\n                <div>\n                    <img src=\"drawable/icon_slider_transaction_manager.png\">\n                    <a data-toggle=\"collapse\" href=\"#记录明细\">记录明细</a>\n                </div>\n                <div id=\"记录明细\" class=\"panel-collapse collapse\">\n                    <div>\n                        <a href=\"#/sale_notfinish\">未完成提现列表</a>\n                    </div>\n                    <div>\n                        <a href=\"#/sale_finish\">已完成提现列表</a>\n                    </div>\n                    <div>\n                        <a href=\"#/buy_notfinish\">未完成充值列表</a>\n                    </div>\n                    <div>\n                        <a href=\"#/buy_finish\">已完成充值列表</a>\n                    </div>\n                </div>\n            </div>\n            <div>\n                <div>\n                    <img src=\"drawable/icon_slider_vip.png\">\n                    <a data-toggle=\"collapse\" href=\"#会员中心\">会员中心</a>\n                </div>\n                <div id=\"会员中心\" class=\"panel-collapse collapse\">\n                    <div>\n                        <a href=\"#/updateinfo\">个人资料</a>\n                    </div>\n                    <div>\n                        <a href=\"#/updatepwd\">密码管理</a>\n                    </div>\n                    <div>\n                        <a href=\"#/qrcode\">我的推广二维码</a>\n                    </div>\n                </div>\n            </div>\n            <div>\n                <div>\n                    <img src=\"drawable/icon_slider_vip_manager.png\">\n                    <a data-toggle=\"collapse\" href=\"#会员管理\">会员管理</a>\n                </div>\n                <div id=\"会员管理\" class=\"panel-collapse collapse\">\n                    <div>\n                        <a href=\"#upgrade\">账号升级</a>\n                    </div>\n                    <div style=\"display:none;\">\n                        <a href=\"#quicksignup\">会员快速注册</a>\n                    </div>\n                    <div>\n                        <a href=\"#/org\">团队组织结构</a>\n                    </div>\n                    <div style=\"display:none;\">\n                        <a href=\"#/user_actived\">直推会员</a>\n                    </div>\n                    <div>\n                        <a href=\"#/user_inactive\">待激活会员</a>\n                    </div>\n                </div>\n            </div>\n            <div>\n                <div>\n                    <img src=\"drawable/icon_slider_score.png\">\n                    <a data-toggle=\"collapse\" href=\"#积分管理\">积分管理</a>\n                </div>\n                <div id=\"积分管理\" class=\"panel-collapse collapse\">\n                    <div style=\"display: none;\">\n                        <a href=\"#/transfer_point\">信用分转让</a>\n                    </div>\n                    <div style=\"display: none\">\n                        <a href=\"#/point_to_jidian\">信用分转绩点</a>\n                    </div>\n                    <div style=\"display: none\">\n                        <a href=\"#/transfer_jidian\">绩点转让</a>\n                    </div>\n                    <div style=\"display: none\">\n                        <a href=\"#/transfer_list\">信用分转让记录</a>\n                    </div>\n                    <div>\n                        <a href=\"#/change_list\">信用分变更记录</a>\n                    </div>\n                    <div>\n                        <a href=\"#/reward?type=分享奖励\">分享奖励</a>\n                    </div>\n                    <div>\n                        <a href=\"#/reward?type=团队津贴\">团队津贴</a>\n                    </div>\n                    <div>\n                        <a href=\"#/reward?type=平衡奖励\">平衡奖励</a>\n                    </div>\n                    <div>\n                        <a href=\"#/reward?type=管理津贴\">管理津贴</a>\n                    </div>\n                </div>\n            </div>\n            <div>\n                <div>\n                    <img src=\"drawable/icon_slider_info_manager.png\">\n                    <a data-toggle=\"collapse\" href=\"#信息管理\">信息管理</a>\n                </div>\n                <div id=\"信息管理\" class=\"panel-collapse collapse\">\n                    <div>\n                        <a href=\"#notice\">公告列表</a>\n                    </div>\n                    <div>\n                        <a href=\"#/feedback\">留言反馈</a>\n                    </div>\n                    <div>\n                        <a href=\"#/customer\">联系客服</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!--App-->\n        <div ng-app=\"app\" ng-controller=\"main\">\n            <!-- 用户信息 -->\n            <div  class=\"app-userinfo\">\n                <div>\n                    <div>用户ID</div>\n                    <div>{{user.username}}</div>\n                </div>\n                <div>\n                    <div>姓名</div>\n                    <div>{{user.name}}</div>\n                </div>\n                <div>\n                    <div>信用分</div>\n                    <div>{{user.points}}</div>\n                </div>\n                <div style=\"display: none\">\n                    <div>绩点</div>\n                    <div>{{user.jidian}}</div>\n                </div>\n                <div>\n                    <div>股权积分</div>\n                    <div>{{user.reinvestPoints}}</div>\n                </div>\n                <div>\n                    <div>购物积分</div>\n                    <div>{{user.shopPoints}}</div>\n                </div>\n                <div>\n                    <div>会员等级</div>\n                    <div>{{user.level}}</div>\n                </div>\n                <div>\n                    <div>信用等级</div>\n                    <div id=\"creditLevel\"></div>\n                </div>\n            </div>\n\n            <table ng-show=\"completeUserInfo\" class=\"app-completeinfo\">\n                <tr>\n                    <td>\n                        <div>请</div>\n                        <div>先</div>\n                        <div>完</div>\n                        <div>善</div>\n                        <div>用</div>\n                        <div>户</div>\n                        <div>信</div>\n                        <div>息</div>\n                    </td>\n                </tr>\n            </table>\n\n            <!--内容-->\n            <div ng-view class=\"app-view\"></div>\n        </div>\n    </body>\n</html>\n\n<script src=\"libs/__code__.js\"></script>"},{"url":"maintain.html","route":"/maintain","template":"<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <title>信用社区-维护</title>\n    </head>\n\n    <body style=\"background-color: #79D1F1;\">\n        <table style=\"width: 100%; height: 100%;position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px;\">\n            <tr>\n                <td style=\"width: 100%; height: 100%;text-align: center;\">\n                    <img src=\"drawable/img_system_maintenance.png\" style=\"width: 500px;\" >\n                </td>\n            </tr>\n        </table>\n    </body>\n</html>"},{"url":"notice_info.html","route":"/notice_info","template":"<style>\n    .app-panel {\n        width: 700px;\n        background-color: #ffffff;\n        margin: 40px 50px 40px 50px;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        line-height: 40px;\n        background-color: #5864AE;\n        padding-left: 14px;\n        font-size: 18px;\n        color: #ffffff;\n    }\n\n    .app-subtitle {\n        line-height: 40px;\n        background-color: #5864AE;\n        font-size: 14px;\n        padding-left: 14px;\n        color: #ffffff;\n    }\n\n    .app-content {\n        padding: 14px;\n    }\n</style>\n\n<div ng-controller=\"notice_info\" class=\"app-panel\">\n    <div class=\"app-title\">{{notice.title}}</div>\n    <div class=\"app-subtitle\">{{notice.type}}&nbsp;{{notice.createTime}}</div>\n    <div class=\"app-content\">{{notice.content}}</div>\n</div>"},{"url":"notice.html","route":"/notice","template":"<style>\n    th {\n        background-color: #5864AE;\n        color: #ffffff;\n    }\n\n    .app-body {\n        margin: 20px 30px 20px 30px;\n        width: 980px;\n    }\n\n    .app-panel {\n        background-color: #ffffff;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        line-height: 40px;\n        font-size: 18px;\n    }\n</style>\n\n<div ng-controller=\"notice\" class=\"app-body\">\n    <div class=\"app-title\">最新公告</div>\n    <div class=\"app-panel\">\n        <table class=\"table table-hover\" ng-click=\"onListItemClick($event)\">\n            <thead>\n            <tr>\n                <th>序号</th>\n                <th>标题</th>\n                <th>公告类型</th>\n                <th>时间</th>\n                <th>查看详情</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"it in listdata.noticeList\">\n                <td>{{it.noticeId}}</td>\n                <td>{{it.title}}</td>\n                <td>{{it.type}}</td>\n                <td>{{it.createTime}}</td>\n                <td>\n                    <button index=\"{{$index}}\" class=\"btn btn-xs btn-primary\">详情</button>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n        <div>\n            <ul class=\"pagination\" style=\"margin: 0px 0px 14px 14px;\"></ul>\n        </div>\n    </div>\n</div>"},{"url":"org.html","route":"/org","template":"<style>\n    .app-org {\n        padding: 14px;\n        overflow: auto;\n        position: absolute;\n        left: 0px;\n        right: 0px;\n        top: 0px;\n        bottom: 0px;\n    }\n\n    .app-org-search {\n        background-color: #ffffff;\n        width: 290px;\n        padding: 8px;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-org-search > div {\n        height: 30px;\n    }\n\n    .app-org-search input {\n        width: 170px;\n        height: 28px;\n        background-color: #eeeeee;\n        padding: 0px 8px 0px 8px;\n        border: none;\n    }\n\n    .app-org-search button {\n        height: 28px;\n    }\n\n    .jOrgChart {\n        margin: 10px;\n        padding: 0px;\n    }\n\n    .jOrgChart .node {\n        font-size: 14px;\n        background-color: #ffffff;\n        border-radius: 5px;\n        border: 1px solid #23C36B;\n        color: #F38630;\n        box-shadow: 0px 0px 5px #23C36B;\n        height: 100px;\n    }\n\n    .member {\n    }\n\n    .member > div:nth-child(1) {\n        background-color: #23C36B;\n        color: #ffffff;\n        line-height: 30px;\n        font-size: 14px;\n    }\n\n    .member > div:nth-child(2) {\n        margin-top: 6px;\n        color: #000000;\n        font-size: 12px;\n    }\n\n    .member > div:nth-child(3) {\n        margin-top: 4px;\n        color: #000000;\n        font-size: 12px;\n    }\n\n    .member > div:nth-child(4) {\n        margin-top: 4px;\n        color: #000000;\n        font-size: 12px;\n    }\n    .member > div:nth-child(5) {\n        margin-top: 4px;\n        color: #000000;\n        font-size: 12px;\n    }\n</style>\n\n<div ng-controller=\"org\" class=\"app-org\">\n\n    <form class=\"app-org-search\" name=\"form\" class=\"form-horizontal\" ng-submit=\"filter(form.$valid)\" novalidate>\n        <div>团队组织结构</div>\n        <div>\n            <input ng-model=\"filterAccount\" placeholder=\"输入搜索账号\" required=\"\"/>\n            <button type=\"submit\" ng-disabled=\"form.$invalid\" class=\"btn btn-primary btn-sm\">搜索</button>\n            <button class=\"btn btn-default btn-sm\" ng-click=\"restore()\">还原</button>\n        </div>\n    </form>\n\n    <ul id=\"org\" style=\"display:none\"></ul>\n    <div id=\"chart\" class=\"orgChart\"></div>\n\n    <!--<li>-->\n    <!--<div class=\"member\">-->\n    <!--<div>${username}</div>-->\n    <!--<div>姓名: ${name}</div>-->\n    <!--<div>等级: ${level}</div>-->\n    <!--<div>信用分: ${points}</div>-->\n    <!--</div>-->\n    <!--<ul id=\"org_node_${userId}\"></ul>-->\n    <!--</li>-->\n</div>"},{"url":"point_to_jidian.html","route":"/point_to_jidian","template":"<style>\n    .app-panel {\n        width: 600px;\n        background-color: #ffffff;\n        margin: 40px 50px 40px 50px;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        text-align: center;\n        line-height: 40px;\n        background-color: #5864AE;\n        font-size: 18px;\n        color: #ffffff;\n    }\n\n    .app-form {\n        width: 400px;\n        margin: auto;\n        padding: 30px 0px 30px 0px;\n    }\n\n    .app-form > div {\n        margin-top: 20px;\n    }\n\n    .app-form > div > div {\n        width: 100px;\n        display: inline-block;\n        text-align: right;\n        margin-right: 20px;\n    }\n\n    .app-form > div > input {\n        width: 250px;\n        height: 32px;\n        background-color: #eeeeee;\n        padding: 0px 8px 0px 8px;\n        border: none;\n    }\n</style>\n\n<div ng-controller=\"point_to_jidian\" class=\"app-panel\">\n    <div class=\"app-title\">信用分转绩点</div>\n    <form class=\"app-form\" name=\"form\" class=\"form-horizontal\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n        <div>\n            <div>信用积分</div>\n            <span>{{points}}</span>\n        </div>\n        <div>\n            <div>转换积分</div>\n            <input ng-model=\"formdata.points\" ng-pattern=\"/^\\d*$/\" required/>\n        </div>\n        <div>\n            <div>二级密码</div>\n            <input ng-model=\"formdata.operatePasswd1\" type=\"password\" required/>\n        </div>\n        <div>\n            <div>&nbsp;</div>\n            <button type=\"submit\" ng-disabled=\"form.$invalid\" class=\"btn btn-success\">确认转出</button>\n        </div>\n    </form>\n</div>"},{"url":"qrcode.html","route":"/qrcode","template":"<style>\n    .app-panel {\n        width: 500px;\n        background-color: #ffffff;\n        margin: 40px 50px 40px 50px;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        text-align: center;\n        line-height: 40px;\n        background-color: #5864AE;\n        font-size: 18px;\n        color: #ffffff;\n    }\n</style>\n\n<div ng-controller=\"qrcode\" class=\"app-panel\">\n    <div class=\"app-title\">我的推广二维码</div>\n    <div style=\"background-color: #ffffff; padding: 28px 0px 28px 0px;text-align: center;\">\n        <div id=\"qrcode\" style=\"width: 150px; height: 150px; margin: auto;\"></div>\n    </div>\n</div>"},{"url":"quicksignup.html","route":"/quicksignup","template":"<style>\n    .app-panel {\n        width: 700px;\n        background-color: #ffffff;\n        margin: 40px 50px 40px 50px;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        text-align: center;\n        line-height: 40px;\n        background-color: #5864AE;\n        font-size: 18px;\n        color: #ffffff;\n    }\n\n    .app-subtitle {\n        line-height: 30px;\n        text-align: center;\n        color: #ffffff;\n        background-color: #4D59A1;\n    }\n\n    .app-form {\n        width: 360px;\n        margin: auto;\n        padding: 30px 0px 30px 0px;\n    }\n\n    .app-form > div {\n        margin-top: 20px;\n    }\n\n    .app-form > div > div:nth-child(1) {\n        width: 60px;\n        display: inline-block;\n        text-align: right;\n        margin-right: 20px;\n    }\n\n    .app-form > div > div:nth-child(3) {\n        width: 10px;\n        text-align: right;\n        display: inline-block;\n    }\n\n    .app-form > div > input {\n        width: 250px;\n        height: 32px;\n        background-color: #eeeeee;\n        padding: 0px 8px 0px 8px;\n        border: none;\n    }\n\n    .app-form > div > select {\n        width: 250px;\n        height: 32px;\n        background-color: #eeeeee;\n        padding: 0px 8px 0px 8px;\n        border: none;\n    }\n</style>\n\n<div ng-controller=\"quicksignup\" class=\"app-panel\">\n    <div class=\"app-title\">会员快速注册</div>\n    <div class=\"app-subtitle\">友情提示: 带星号为必填信息，请输入准确信息</div>\n\n    <form class=\"app-form\" name=\"form\" class=\"form-horizontal\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n        <div>\n            <div>信用分</div>\n            <span>{{user.points}}</span>\n            <div>&nbsp;</div>\n        </div>\n        <div>\n            <div>币种选择</div>\n            <select ng-model=\"formdata.signupType\" ng-init=\"formdata.signupType='1'\" required>\n                <option value=\"1\">信用分</option>\n                <!--<option value=\"2\">复投币</option>-->\n            </select>\n            <div>*</div>\n        </div>\n        <div>\n            <div>用户名</div>\n            <input placeholder=\"填写用户名\" ng-model=\"formdata.username\" required/>\n            <div>*</div>\n        </div>\n        <div>\n            <div>推荐人</div>\n            <input placeholder=\"填写推荐人\" ng-model=\"formdata.inviterAccount\" required/>\n            <div>*</div>\n        </div>\n        <div ng-show=\"formdata.signupType==='1'\">\n            <div>手机号码</div>\n            <input placeholder=\"请输入有效手机号码\" ng-model=\"formdata.mobile\" ng-pattern=\"/^1[3578]{1}\\d{9}\\d?$/\"/>\n            <div>*</div>\n        </div>\n\t\t<div>\n            <div>验证码</div>\n            <input ng-model=\"formdata.code\" ng-pattern=\"/^\\d{6}$/\" style=\"width:150px;\" required/>\n\t\t\t<button ng-click=\"sendcode(form.mobile.$valid)\" ng-disabled=\"form.mobile.$invalid\" class=\"btn btn-warning\">发送验证码</button>\n            <div>*</div>\n        </div>\n        <div>\n            <div>放置位置</div>\n            <input placeholder=\"请输入放置位置\" ng-model=\"formdata.parentAccount\" required/>\n            <div>*</div>\n        </div>\n        <div>\n            <div>放置节点</div>\n            <select ng-model=\"formdata.isLeft\" ng-init=\"formdata.isLeft='1'\" required>\n                <option value=\"1\">左边</option>\n                <option value=\"0\">右边</option>\n            </select>\n            <div>*</div>\n        </div>\n        <div>\n            <div>会员等级</div>\n            <select ng-model=\"formdata.levelCard\" ng-init=\"formdata.levelCard='1'\" required>\n                <option value=\"1\">普通卡</option>\n                <option value=\"2\">金卡</option>\n                <option value=\"3\">白金卡</option>\n                <!--<option value=\"4\">钻石卡</option>-->\n                <!--<option value=\"5\">黑钻卡</option>-->\n            </select>\n            <div>*</div>\n        </div>\n        <div>\n            <div>&nbsp;</div>\n            <button type=\"submit\" ng-disabled=\"form.$invalid\" class=\"btn btn-success\">提交注册</button>\n        </div>\n    </form>\n</div>"},{"url":"reward.html","route":"/reward","template":"<style>\n    th {\n        background-color: #5864AE;\n        color: #ffffff;\n    }\n\n    .app-body {\n        margin: 20px 30px 20px 30px;\n        width: 980px;\n    }\n\n    .app-panel {\n        background-color: #ffffff;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        line-height: 40px;\n        font-size: 18px;\n    }\n</style>\n\n<div ng-controller=\"reward\" class=\"app-body\">\n    <div class=\"app-title\">{{type}}</div>\n    <div class=\"app-panel\">\n        <table class=\"table table-hover\">\n            <thead>\n            <tr>\n                <th>序号</th>\n                <th>说明</th>\n                <th>数量</th>\n                <th>时间</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"it in listdata.rewardList\">\n                <td>{{it.rewardId}}</td>\n                <td>{{it.descr}}</td>\n                <td>{{it.points}}</td>\n                <td>{{it.createTime}}</td>\n            </tr>\n            </tbody>\n        </table>\n        <div>\n            <ul class=\"pagination\" style=\"margin: 0px 0px 14px 14px;\"></ul>\n        </div>\n    </div>\n</div>"},{"url":"sale_finish.html","route":"/sale_finish","template":"<style>\n    th {\n        background-color: #5864AE;\n        color: #ffffff;\n    }\n\n    .app-body {\n        margin: 20px 30px 20px 30px;\n        width: 980px;\n    }\n\n    .app-panel {\n        background-color: #ffffff;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        line-height: 40px;\n        font-size: 18px;\n    }\n</style>\n\n<div ng-controller=\"sale_finish\" class=\"app-body\">\n    <div class=\"app-title\">已完成提现列表</div>\n    <div class=\"app-panel\">\n        <table class=\"table table-hover\">\n            <thead>\n            <tr>\n                <th>序号</th>\n                <th>出售账号</th>\n                <th>信用积分</th>\n                <th>时间</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"it in listdata.orderList\">\n                <td>{{it.orderId}}</td>\n                <td>{{it.username}}</td>\n                <td>{{it.pointAmount}}</td>\n                <td>{{it.createTime}}</td>\n            </tr>\n            </tbody>\n        </table>\n        <div>\n            <ul class=\"pagination\" style=\"margin: 0px 0px 14px 14px;\"></ul>\n        </div>\n    </div>\n</div>"},{"url":"sale_notfinish.html","route":"/sale_notfinish","template":"<style>\n    th {\n        background-color: #5864AE;\n        color: #ffffff;\n    }\n\n    .app-body {\n        margin: 20px 30px 20px 30px;\n        width: 980px;\n    }\n\n    .app-panel {\n        background-color: #ffffff;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        line-height: 40px;\n        font-size: 18px;\n    }\n</style>\n\n<div ng-controller=\"sale_notfinish\" class=\"app-body\">\n    <div class=\"app-title\">未完成提现列表</div>\n    <div class=\"app-panel\">\n        <table class=\"table table-hover\" ng-click=\"onListItemClick($event)\">\n            <thead>\n            <tr>\n                <th>序号</th>\n                <th>出售账号</th>\n                <th>信用积分</th>\n                <th>时间</th>\n                <th>状态</th>\n                <th>操作</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"it in listdata.orderList\">\n                <td>{{it.orderId}}</td>\n                <td>{{it.username}}</td>\n                <td>{{it.pointAmount}}</td>\n                <td>{{it.createTime}}</td>\n                <td>{{it.status}}</td>\n                <td>\n                    <span ng-show=\"it.nothing\">无</span>\n                    <button class=\"btn btn-success btn-xs\" ng-show=\"it.canConfirm\" index=\"{{$index}}\">确认收款</button>\n                    <button class=\"btn btn-danger btn-xs\" ng-show=\"it.canCancel\" index=\"{{$index}}\">撤销挂单</button>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n        <div>\n            <ul class=\"pagination\" style=\"margin: 0px 0px 14px 14px;\"></ul>\n        </div>\n    </div>\n</div>"},{"url":"sale.html","route":"/sale","template":"<style>\n    .app-panel {\n        width: 700px;\n        background-color: #ffffff;\n        margin: 40px 50px 40px 50px;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        line-height: 54px;\n        padding-left: 14px;\n    }\n\n    .app-title > img {\n        width: 24px;\n        height: 24px;\n    }\n\n    .app-form {\n        width: 600px;\n        margin: auto;\n        padding: 0px 0px 30px 0px;\n    }\n\n    .app-form > div {\n        margin-top: 20px;\n    }\n\n    .app-form > div > div:nth-child(1) {\n        width: 150px;\n        display: inline-block;\n        text-align: right;\n        margin-right: 20px;\n    }\n\n    .app-form > div > div:nth-child(3) {\n        width: 170px;\n        text-align: left;\n        padding-left: 14px;\n        display: inline-block;\n    }\n\n    .app-form > div > input {\n        width: 250px;\n        height: 32px;\n        background-color: #eeeeee;\n        padding: 0px 8px 0px 8px;\n        border: none;\n    }\n</style>\n\n<div ng-controller=\"sale\" class=\"app-panel\">\n    <div>\n        <img src=\"drawable/img_sell_photo.jpg\" style=\"width: 700px;\">\n    </div>\n    <div class=\"app-title\">\n        <img src=\"drawable/icon_sell_credit_score.png\">\n        <span>提现</span>\n    </div>\n    <form class=\"app-form\" name=\"form\" class=\"form-horizontal\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n        <div>\n            <div>请输入信用积分</div>\n            <input placeholder=\"出售积分(单位20积分)\" ng-model=\"formdata.pointAmountTmp\" ng-pattern=\"/^\\d*$/\" required/>\n            <!--<div>最低出售量100</div>-->\n        </div>\n        <div>\n            <div>请输入二级密码</div>\n            <input type=\"password\" ng-model=\"formdata.operatePasswd\" placeholder=\"二级密码\" required/>\n            <div>确保交易安全输入密码</div>\n        </div>\n        <div>\n            <div>&nbsp;</div>\n            <button class=\"btn btn-success\" type=\"submit\" ng-disabled=\"form.$invalid\">确认出售</button>\n        </div>\n    </form>\n</div>"},{"url":"signin.html","route":"/signin","template":"<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <title>登录</title>\n        <link href=\"libs/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n        <link href=\"style/style.css\" rel=\"stylesheet\">\n        <style>\n            .app-title {\n                position: absolute;\n                left: 0px;\n                top: 0px;\n                right: 0px;\n                bottom: 100px;\n            }\n\n            .app-title > div > div {\n                color: #4D59A1;\n                font-size: 32px;\n                font-weight: bold;\n                padding-top: 50px;\n            }\n\n            .app-body {\n                position: absolute;\n                left: 0px;\n                top: 100px;\n                right: 0px;\n                bottom: 100px;\n                background-color: #4D59A1;\n            }\n\n            .app-img {\n                width: 450px;\n                margin: auto;\n                margin-top: 50px;\n            }\n\n            .app-img > img {\n                width: 100%\n            }\n\n            .app-box {\n                width: 350px;\n                margin: auto;\n                background-color: #ffffff;\n                padding: 30px;\n                margin-top: 80px;\n            }\n\n            .app-form {\n            }\n\n            .app-form > div {\n                border: solid #dcdcdc 1px;\n                margin-top: 20px;\n            }\n\n            .app-form img {\n                width: 40px;\n                height: 40px;\n                background-color: #dcdcdc;\n            }\n\n            .app-form input {\n                border: none;\n                padding: 6px;\n            }\n        </style>\n\n        <script src=\"libs/angular.min.js\"></script>\n        <script src=\"libs/jquery-3.2.1.min.js\"></script>\n        <script src=\"libs/jquery-md5.js\"></script>\n        <script src=\"libs/juicer-min.js\"></script>\n    </head>\n\n    <body ng-app=\"signinApp\" ng-controller=\"signin\">\n        <div class=\"app-title\">\n            <div class=\"container\">\n                <div>ETR国际信用社区</div>\n            </div>\n        </div>\n        <div class=\"app-body\">\n            <div class=\"container\">\n                <div class=\"col-sm-6\">\n                    <div class=\"app-img\">\n                        <img src=\"drawable/img_login_city.png\">\n                    </div>\n                </div>\n\n                <div class=\"col-sm-6\">\n                    <div class=\"app-box\">\n                        <div style=\"font-size: 18px;\">账号登录</div>\n\n                        <form class=\"app-form\" name=\"form\" class=\"form-horizontal\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n                            <div>\n                                <img src=\"drawable/icon_login_username.png\"/>\n                                <input ng-model=\"formdata.username\" placeholder=\"账号\" required>\n                            </div>\n\n                            <div>\n                                <img src=\"drawable/icon_login_password.png\"/>\n                                <input ng-model=\"formdata.passwd\" type=\"password\" placeholder=\"密码\" required>\n                            </div>\n                            <div style=\"border: none;margin-top: 28px;\">\n                                <button type=\"submit\" ng-disabled=\"form.$invalid\" class=\"btn btn-primary btn-block\" style=\"height: 40px;\">登录</button>\n                            </div>\n                        </form>\n\n                        <div style=\"position: relative;padding-top: 14px;\">\n                            <a href=\"findpwd.html\">忘记密码</a>\n                            <!--<a href=\"signup.html\" style=\"position: absolute; right: 0px;\">注册会员</a>-->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </body>\n</html>\n\n<script src=\"libs/__code__.js\"></script>"},{"url":"signup.html","route":"/signup","template":"<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <title>注册会员</title>\n        <link href=\"libs/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n        <link href=\"style/style.css\" rel=\"stylesheet\">\n        <style>\n            body{\n                background-color: #6DC497;\n            }\n            .app-body {\n                width: 1024px;\n                margin: auto;\n                position: relative;\n            }\n\n            .app-body > div {\n                height: 450px;\n            }\n\n            .app-body > div:nth-child(1) > img {\n                width: 350px;\n                height: 300px;\n                position: absolute;\n                bottom: 0px;\n                right: 50px;\n            }\n\n            .app-box {\n                background-color: #ffffff;\n                box-shadow: 0px 0px 10px #aaaaaa;\n                width: 350px;\n                position: absolute;\n                bottom: 0px;\n                left: 50px;\n                padding: 30px;\n            }\n\n            .app-title {\n                position: relative;\n            }\n\n            .app-title > span {\n                font-size: 18px;\n            }\n\n            .app-title > a {\n                position: absolute;\n                right: 0px;\n            }\n\n            .app-form {\n            }\n\n            .app-form > div {\n                margin-top: 20px;\n            }\n\n            .app-form input {\n                width: 100%;\n                height: 40px;\n                border: none;\n                border-bottom: solid 1px #dcdcdc;\n            }\n        </style>\n\n        <script src=\"libs/jquery-3.2.1.min.js\"></script>\n        <script src=\"libs/jquery-md5.js\"></script>\n        <script src=\"../src/netsky-common.js\"></script>\n        <script src=\"../src/netsky-config.js\"></script>\n    </head>\n\n    <body>\n        <div class=\"app-body\">\n            <div class=\"col-sm-6\">\n                <img src=\"drawable/img_register_pic.png\">\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"app-box\">\n                    <div class=\"app-title\">\n                        <span>注册会员</span>\n                        <a href=\"signin.html\">登录</a>\n                    </div>\n                    <div class=\"app-form\">\n                        <div>\n                            <input id=\"username\" type=\"text\" placeholder=\"设置用户名\">\n                        </div>\n                        <div>\n                            <input id=\"mobile\" type=\"number\" placeholder=\"请输入手机号码\">\n                        </div>\n                        <div>\n                            <input id=\"code\" style=\"width: 200px;margin-right: 6px;\" placeholder=\"请输入验证码\">\n                            <button class=\"btn btn-info\" style=\"width: 80px\">发送短信</button>\n                        </div>\n                        <div>\n                            <span>备注: 默认登录密码666666, 二级密码888888</span>\n                        </div>\n                        <div id=\"errormsg\" style=\"color: red;text-align: center;\">&nbsp;</div>\n                        <div>\n                            <button id=\"signup\" class=\"btn btn-success btn-block\">完成</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </body>\n</html>\n\n<script>\n    $(\"#signup\").bind(\"click\", function()\n    {\n        $('#errormsg').html(\"\");\n\n        var param = {\n            username: $('#username').val(),\n            mobile: $('#mobile').val(),\n            code: $('#code').val(),\n        };\n\n        if(param.username == \"\" || param.username.length < 4)\n        {\n            $('#errormsg').html(\"请输入用户名\");\n            return;\n        }\n        if(param.mobile == \"\" || !new RegExp(\"^1[3578]{1}\\\\d{9}\\\\d?$\").test(param.mobile))\n        {\n            $('#errormsg').html(\"请输入正确手机号码\");\n            return;\n        }\n        if(param.code == \"\" || param.code.length != 6)\n        {\n            $('#errormsg').html(\"请输入正确验证码\");\n            return;\n        }\n\n        var cfg = {\n            mask: true,\n            care: true\n        };\n        T.common.ajax.request(Api.user_signup_v1, param, cfg, function(data, code, msg)\n        {\n            switch(code)\n            {\n                case 200:\n                {\n                    alert(\"注册成功\");\n                    location = \"signin.html\";\n                    break;\n                }\n                default:\n                {\n                    $('#errormsg').html(msg);\n                    break;\n                }\n            }\n        });\n    })\n</script>"},{"url":"transfer_jidian.html","route":"/transfer_jidian","template":"<style>\n    .app-panel {\n        width: 600px;\n        background-color: #ffffff;\n        margin: 40px 50px 40px 50px;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        text-align: center;\n        line-height: 40px;\n        background-color: #5864AE;\n        font-size: 18px;\n        color: #ffffff;\n    }\n\n    .app-form {\n        width: 400px;\n        margin: auto;\n        padding: 30px 0px 30px 0px;\n    }\n\n    .app-form > div {\n        margin-top: 20px;\n    }\n\n    .app-form > div > div {\n        width: 100px;\n        display: inline-block;\n        text-align: right;\n        margin-right: 20px;\n    }\n\n    .app-form > div > input {\n        width: 250px;\n        height: 32px;\n        background-color: #eeeeee;\n        padding: 0px 8px 0px 8px;\n        border: none;\n    }\n</style>\n\n<div ng-controller=\"transfer_jidian\" class=\"app-panel\">\n    <div class=\"app-title\">绩点转让</div>\n    <form class=\"app-form\" name=\"form\" class=\"form-horizontal\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n        <div>\n            <div>绩点</div>\n            <span>{{jidian}}</span>\n        </div>\n        <div>\n            <div>转出绩点</div>\n            <input ng-model=\"formdata.amount\" ng-pattern=\"/^\\d*$/\" required/>\n        </div>\n        <div>\n            <div>转入账户</div>\n            <input ng-model=\"formdata.receiverAccount\" required/>\n        </div>\n        <div>\n            <div>二级密码</div>\n            <input ng-model=\"formdata.operatePasswd\" type=\"password\" required/>\n        </div>\n        <div>\n            <div>&nbsp;</div>\n            <button type=\"submit\" ng-disabled=\"form.$invalid\" class=\"btn btn-success\">确认转出</button>\n        </div>\n    </form>\n</div>"},{"url":"transfer_list.html","route":"/transfer_list","template":"<style>\n    th {\n        background-color: #5864AE;\n        color: #ffffff;\n    }\n\n    .app-body {\n        margin: 20px 30px 20px 30px;\n        width: 980px;\n    }\n\n    .app-panel {\n        background-color: #ffffff;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        line-height: 40px;\n        font-size: 18px;\n    }\n</style>\n\n<div ng-controller=\"transfer_list\" class=\"app-body\">\n    <div class=\"app-title\">信用分转让记录</div>\n    <div class=\"app-panel\">\n        <table class=\"table table-hover\">\n            <thead>\n            <tr>\n                <th>序号</th>\n                <th>转入账号</th>\n                <th>转出积分</th>\n                <th>转让时间</th>\n                <th>转让状态</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"it in listdata.transferList\">\n                <td>{{it.transferId}}</td>\n                <td>{{it.receiverAccount}}</td>\n                <td>{{it.amount}}</td>\n                <td>{{it.createTime}}</td>\n                <td>转让成功</td>\n            </tr>\n            </tbody>\n        </table>\n        <div>\n            <ul class=\"pagination\" style=\"margin: 0px 0px 14px 14px;\"></ul>\n        </div>\n    </div>\n</div>"},{"url":"transfer_point.html","route":"/transfer_point","template":"<style>\n    .app-panel {\n        width: 600px;\n        background-color: #ffffff;\n        margin: 40px 50px 40px 50px;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        text-align: center;\n        line-height: 40px;\n        background-color: #5864AE;\n        font-size: 18px;\n        color: #ffffff;\n    }\n\n    .app-form {\n        width: 400px;\n        margin: auto;\n        padding: 30px 0px 30px 0px;\n    }\n\n    .app-form > div {\n        margin-top: 20px;\n    }\n\n    .app-form > div > div {\n        width: 100px;\n        display: inline-block;\n        text-align: right;\n        margin-right: 20px;\n    }\n\n    .app-form > div > input {\n        width: 250px;\n        height: 32px;\n        background-color: #eeeeee;\n        padding: 0px 8px 0px 8px;\n        border: none;\n    }\n</style>\n\n<div ng-controller=\"transfer_point\" class=\"app-panel\">\n    <div class=\"app-title\">信用分转让</div>\n    <form class=\"app-form\" name=\"form\" class=\"form-horizontal\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n        <div style=\"color: red; text-align: center;\">转让手续费10%, 白金卡及以上可免手续费</div>\n        <div>\n            <div>信用积分</div>\n            <span>{{points}}</span>\n        </div>\n        <div>\n            <div>转出积分</div>\n            <input ng-model=\"formdata.amount\" ng-pattern=\"/^\\d*$/\" required/>\n        </div>\n        <div>\n            <div>转入账户</div>\n            <input ng-model=\"formdata.receiverAccount\" required/>\n        </div>\n        <div>\n            <div>二级密码</div>\n            <input ng-model=\"formdata.operatePasswd\" type=\"password\" required/>\n        </div>\n        <div>\n            <div>&nbsp;</div>\n            <button type=\"submit\" ng-disabled=\"form.$invalid\" class=\"btn btn-success\">确认转出</button>\n        </div>\n    </form>\n</div>"},{"url":"updateinfo.html","route":"/updateinfo","template":"<style>\n    .app-panel {\n        width: 700px;\n        background-color: #ffffff;\n        margin: 40px 50px 40px 50px;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        text-align: center;\n        line-height: 40px;\n        background-color: #5864AE;\n        font-size: 18px;\n        color: #ffffff;\n    }\n\n    .app-subtitle {\n        line-height: 30px;\n        text-align: center;\n        color: #ffffff;\n        background-color: #4D59A1;\n    }\n\n    .app-form {\n        width: 380px;\n        margin: auto;\n        padding: 30px 0px 30px 0px;\n    }\n\n    .app-form > div {\n        margin-top: 20px;\n    }\n\n    .app-form > div > div:nth-child(1) {\n        width: 80px;\n        display: inline-block;\n        text-align: right;\n        margin-right: 20px;\n    }\n\n    .app-form > div > div:nth-child(3) {\n        width: 10px;\n        text-align: right;\n        display: inline-block;\n    }\n\n    .app-form > div > input {\n        width: 250px;\n        height: 32px;\n        background-color: #eeeeee;\n        padding: 0px 8px 0px 8px;\n        border: none;\n    }\n</style>\n\n<div ng-controller=\"updateinfo\" class=\"app-panel\">\n    <div class=\"app-title\">个人资料</div>\n    <div class=\"app-subtitle\">友情提示: 带星号为必填信息，请输入准确信息</div>\n\n    <form class=\"app-form\" name=\"form\" class=\"form-horizontal\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n        <div>\n            <div>用户名</div>\n            <input ng-model=\"formdata.username\" disabled=\"true\"/>\n            <div>*</div>\n        </div>\n        <div>\n            <div>手机号码</div>\n            <input ng-model=\"formdata.mobile\" disabled=\"true\"/>\n            <div>*</div>\n        </div>\n\t\t<div>\n            <div>验证码</div>\n            <input ng-model=\"formdata.code\" ng-pattern=\"/^\\d{6}$/\" style=\"width:150px;\" required/>\n\t\t\t<button ng-click=\"sendcode(form.mobile.$valid)\" ng-disabled=\"form.mobile.$invalid\" class=\"btn btn-warning\">发送验证码</button>\n            <div>*</div>\n        </div>\n        <div>\n            <div>姓名</div>\n            <input id=\"focus1\" ng-model=\"formdata.name\" placeholder=\"请输入真实姓名\" required/>\n            <div>*</div>\n        </div>\n        <div>\n            <div>身份证</div>\n            <input ng-model=\"formdata.idcard\" placeholder=\"请输入有效身份证\" required/>\n            <div>*</div>\n        </div>\n        <div>\n            <div>银行卡</div>\n            <input ng-model=\"formdata.bankcard\" placeholder=\"请输入有效银行卡\" required/>\n            <div>*</div>\n        </div>\n        <div>\n            <div>所在城市</div>\n            <input ng-model=\"formdata.city\" placeholder=\"请输入所在城市\" required/>\n            <div>*</div>\n        </div>\n        <div>\n            <div>开户行</div>\n            <input ng-model=\"formdata.bankAddress\" placeholder=\"请输入开户行\" required/>\n            <div>*</div>\n        </div>\n        <div>\n            <div>微信</div>\n            <input ng-model=\"formdata.wechat\" placeholder=\"请输入微信\"/>\n            <div>&nbsp;</div>\n        </div>\n        <div>\n            <div>支付宝</div>\n            <input ng-model=\"formdata.alipay\" placeholder=\"请输入支付宝\"/>\n            <div>&nbsp;</div>\n        </div>\n        <!--<div>-->\n            <!--<div style=\"vertical-align: top; padding-top: 6px;\">上传身份证</div>-->\n            <!--<div style=\"display: inline-block; width: 250px;\">-->\n                <!--<input ng-model=\"formdata.idcardUrl\" style=\"display: none;\" required>-->\n                <!--<input id=\"uploadFile\" type=\"file\" style=\"display: none;\" accept=\".png,.jpg\">-->\n                <!--<button ng-click=\"upload()\" type=\"button\" class=\"btn btn-primary\" style=\"width: 250px;\">请上传手持身份证照片</button>-->\n                <!--<div style=\"color: red; padding-top: 4px;\">图片大小不能超过3M, 仅限png,jpg格式</div>-->\n            <!--</div>-->\n            <!--<div style=\"vertical-align: top; padding-top: 6px;\">*</div>-->\n        <!--</div>-->\n        <div>\n            <div>&nbsp;</div>\n            <button type=\"submit\" ng-disabled=\"form.$invalid\" class=\"btn btn-success\">保存修改</button>\n        </div>\n    </form>\n</div>"},{"url":"updatepwd.html","route":"/updatepwd","template":"<style>\n    .app-panel {\n        width: 600px;\n        background-color: #ffffff;\n        margin: 40px 50px 40px 50px;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-tab {\n        background-color: #5864AE;\n        line-height: 40px;\n        color: #ffffff;\n    }\n\n    .app-tab > div {\n        display: inline-block;\n        width: 150px;\n        text-align: center;\n    }\n\n    .app-tab > div > img {\n        width: 30px;\n        height: 30px;\n    }\n\n    .app-tab-highlight {\n        background-color: #424D8F;\n    }\n\n    .app-form {\n        width: 340px;\n        margin: auto;\n        padding: 30px 0px 30px 0px;\n    }\n\n    .app-form > div {\n        margin-top: 20px;\n    }\n\n    .app-form > div > div {\n        width: 60px;\n        display: inline-block;\n        text-align: right;\n        margin-right: 20px;\n    }\n\n    .app-form > div > input {\n        width: 250px;\n        height: 32px;\n        background-color: #eeeeee;\n        padding: 0px 8px 0px 8px;\n        border: none;\n    }\n</style>\n\n<div ng-controller=\"updatepwd\" class=\"app-panel\">\n    <div class=\"app-tab\">\n        <div ng-click=\"toggle(0)\" ng-class=\"{true: 'app-tab-highlight', false: ''}[changePasswd]\">\n            <img src=\"drawable/icon_change_password.png\">\n            <span>修改登录密码</span>\n        </div>\n        <div ng-click=\"toggle(1)\" ng-class=\"{true: 'app-tab-highlight', false: ''}[changeOperatePasswd]\">\n            <img src=\"drawable/icon_change_safe_pw.png\">\n            <span>修改二级密码</span>\n        </div>\n        <div ng-click=\"toggle(2)\" ng-class=\"{true: 'app-tab-highlight', false: ''}[changeMobile]\">\n            <img src=\"drawable/icon_change_phone.png\">\n            <span>修改绑定手机</span>\n        </div>\n    </div>\n\n    <form class=\"app-form\" name=\"form1\" class=\"form-horizontal\" ng-submit=\"submitPasswd(form1.$valid)\" ng-show=\"changePasswd\" novalidate>\n        <div>\n            <div>原密码</div>\n            <input ng-model=\"formdata.oldpwd\" placeholder=\"首次登录密码666666\" required/>\n        </div>\n        <div>\n            <div>新密码</div>\n            <input ng-model=\"formdata.password\" type=\"password\" required/>\n        </div>\n        <div>\n            <div>确认密码</div>\n            <input ng-model=\"formdata.password1\" type=\"password\" required/>\n        </div>\n        <div>\n            <div>&nbsp;</div>\n            <button type=\"submit\" ng-disabled=\"form1.$invalid\" class=\"btn btn-success\">确定修改</button>\n        </div>\n    </form>\n\n    <form class=\"app-form\" name=\"form2\" class=\"form-horizontal\" ng-submit=\"submitOperatePasswd(form2.$valid)\" ng-show=\"changeOperatePasswd\" novalidate>\n        <div>\n            <div>原密码</div>\n            <input ng-model=\"formdata.oldpwd\" placeholder=\"首次二级密码888888\" required/>\n        </div>\n        <div>\n            <div>新密码</div>\n            <input ng-model=\"formdata.password\" type=\"password\" required/>\n        </div>\n        <div>\n            <div>确认密码</div>\n            <input ng-model=\"formdata.password1\" type=\"password\" required/>\n        </div>\n        <div>\n            <div>&nbsp;</div>\n            <button type=\"submit\" ng-disabled=\"form2.$invalid\" class=\"btn btn-success\">确定修改</button>\n        </div>\n    </form>\n\n    <form class=\"app-form\" name=\"form3\" class=\"form-horizontal\" ng-submit=\"submitMobile(form3.$valid)\" ng-show=\"changeMobile\" novalidate>\n        <div>\n            <div>新手机号</div>\n            <input name=\"mobile\" ng-model=\"formdata.mobile\" placeholder=\"输入正确手机号码\" ng-pattern=\"/^1[3578]{1}\\d{9}\\d?$/\" required/>\n        </div>\n        <div>\n            <div>验证码</div>\n            <input ng-model=\"formdata.code\" style=\"width: 166px;\" placeholder=\"输入6位数字验证码\" ng-pattern=\"/^\\d{6}$/\" required/>\n            <button ng-click=\"sendcode(form3.mobile.$valid)\" ng-disabled=\"form3.mobile.$invalid\" class=\"btn btn-primary\" style=\"width: 80px;height: 32px;\">发送短信</button>\n        </div>\n        <div>\n            <div>&nbsp;</div>\n            <button type=\"submit\" ng-disabled=\"form3.$invalid\" class=\"btn btn-success\">确定修改</button>\n        </div>\n    </form>\n</div>"},{"url":"upgrade.html","route":"/upgrade","template":"<style>\n    .app-panel {\n        width: 900px;\n        margin: 30px 50px 30px 50px;\n    }\n\n    .app-upgrade {\n        padding: 14px;\n        background-color: #ffffff;\n        margin-bottom: 28px;\n    }\n\n    .app-upgrade > div {\n        line-height: 20px;\n        position: relative;\n        margin-bottom: 10px;\n    }\n\n    .app-upgrade > div > div {\n        display: inline-block;\n    }\n\n    .app-upgrade > div > button {\n        right: 0px;\n        position: absolute;\n    }\n\n    .app-upgrade img {\n        width: 100%;\n        margin-bottom: 14px;\n    }\n</style>\n\n<div ng-controller=\"upgrade\" class=\"app-panel\">\n    <div class=\"col-sm-3\">\n        <div class=\"app-upgrade\">\n            <div>\n                <div>普通卡</div>\n                <button ng-show=\"user.level!==1\" class=\"btn btn-xs btn-danger\" ng-click=\"upgradeCard(1)\">升级</button>\n                <button ng-show=\"user.level===1\" class=\"btn btn-xs btn-primary\" ng-click=\"reActive()\">重新激活</button>\n            </div>\n            <img src=\"drawable/img_upgrade_vip1.jpg\"/>\n            <div>价格: {{cards.PuKa}}信用分</div>\n        </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <div class=\"app-upgrade\">\n            <div>\n                <div>金卡</div>\n                <button ng-show=\"user.level!==2\" class=\"btn btn-xs btn-danger\" ng-click=\"upgradeCard(2)\">升级</button>\n                <button ng-show=\"user.level===2\" class=\"btn btn-xs btn-primary\" ng-click=\"reActive()\">重新激活</button>\n            </div>\n            <img src=\"drawable/img_upgrade_vip2.jpg\"/>\n            <div>价格: {{cards.JinKa}}信用分</div>\n        </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <div class=\"app-upgrade\">\n            <div>\n                <div>白金卡</div>\n                <button ng-show=\"user.level!==3\" class=\"btn btn-xs btn-danger\" ng-click=\"upgradeCard(3)\">升级</button>\n                <button ng-show=\"user.level===3\" class=\"btn btn-xs btn-primary\" ng-click=\"reActive()\">重新激活</button>\n            </div>\n            <img src=\"drawable/img_upgrade_vip3.jpg\"/>\n            <div>价格: {{cards.BaiJinKa}}信用分</div>\n        </div>\n    </div>\n    <div class=\"col-sm-3\" style=\"display: none\">\n        <div class=\"app-upgrade\">\n            <div>\n                <div>钻石卡</div>\n                <button ng-show=\"user.level!==4\" class=\"btn btn-xs btn-danger\" ng-click=\"upgradeCard(4)\">升级</button>\n                <button ng-show=\"user.level===4\" class=\"btn btn-xs btn-primary\" ng-click=\"reActive()\">重新激活</button>\n            </div>\n            <img src=\"drawable/img_upgrade_vip4.jpg\"/>\n            <div>价格: {{cards.ZuanShiKa}}信用分</div>\n        </div>\n    </div>\n    <div class=\"col-sm-3\" style=\"display: none;\">\n        <div class=\"app-upgrade\">\n            <div>\n                <div>黑钻卡</div>\n                <button ng-show=\"user.level!==5\" class=\"btn btn-xs btn-danger\" ng-click=\"upgradeCard(5)\">升级</button>\n                <button ng-show=\"user.level===5\" class=\"btn btn-xs btn-primary\" ng-click=\"reActive()\">重新激活</button>\n            </div>\n            <img src=\"drawable/img_upgrade_vip5.jpg\"/>\n            <div>价格: {{cards.HeiZuanKa}}信用分</div>\n        </div>\n    </div>\n</div>"},{"url":"user_active.html","route":"/user_active","template":"<style>\n    .app-panel {\n        width: 700px;\n        background-color: #ffffff;\n        margin: 40px 50px 40px 50px;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        text-align: center;\n        line-height: 40px;\n        background-color: #5864AE;\n        font-size: 18px;\n        color: #ffffff;\n    }\n\n    .app-subtitle {\n        line-height: 30px;\n        text-align: center;\n        color: #ffffff;\n        background-color: #4D59A1;\n    }\n\n    .app-form {\n        width: 460px;\n        margin: auto;\n        padding: 30px 0px 30px 0px;\n    }\n\n    .app-form > div {\n        margin-top: 20px;\n    }\n\n    .app-form > div > div:nth-child(1) {\n        width: 100px;\n        display: inline-block;\n        text-align: right;\n        margin-right: 20px;\n    }\n\n    .app-form > div > div:nth-child(3) {\n        width: 10px;\n        text-align: right;\n        display: inline-block;\n    }\n\n    .app-form > div > input, select {\n        width: 250px;\n        height: 32px;\n        background-color: #eeeeee;\n        padding: 0px 8px 0px 8px;\n        border: none;\n    }\n</style>\n\n<div ng-controller=\"user_active\" class=\"app-panel\">\n    <div class=\"app-title\">会员激活</div>\n    <div class=\"app-subtitle\">友情提示: 带星号为必填信息，请输入准确信息</div>\n\n    <form class=\"app-form\" name=\"form\" class=\"form-horizontal\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n        <div>\n            <div>待激活账户</div>\n            <span>{{account}}</span>\n        </div>\n        <div>\n            <div>当前可用信用分</div>\n            <span>{{user.points}}</span>\n        </div>\n        <div>\n            <div>放置位置</div>\n            <input ng-model=\"formdata.parentAccount\" required/>\n            <div>*</div>\n        </div>\n        <div>\n            <div>放置节点</div>\n            <select ng-model=\"formdata.isLeft\" ng-init=\"formdata.isLeft='1'\" required>\n                <option value=\"1\">左边</option>\n                <option value=\"0\">右边</option>\n            </select>\n            <div>*</div>\n        </div>\n        <div>\n            <div>会员等级</div>\n            <select ng-model=\"formdata.levelCard\" ng-init=\"formdata.levelCard='1'\" required>\n                <option value=\"1\">普通卡</option>\n                <option value=\"2\">金卡</option>\n                <option value=\"3\">白金卡</option>\n                <!--<option value=\"4\">钻石卡</option>\n                <option value=\"5\">黑钻卡</option>-->\n            </select>\n            <div>*</div>\n        </div>\n        <div>\n            <div>&nbsp;</div>\n            <button type=\"submit\" ng-disabled=\"form.$invalid\" class=\"btn btn-success\">保存修改</button>\n        </div>\n    </form>\n</div>"},{"url":"user_actived.html","route":"/user_actived","template":"<style>\n    th {\n        background-color: #5864AE;\n        color: #ffffff;\n    }\n\n    .app-body {\n        margin: 20px 30px 20px 30px;\n        width: 980px;\n    }\n\n    .app-panel {\n        background-color: #ffffff;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        line-height: 40px;\n        font-size: 18px;\n    }\n</style>\n\n<div ng-controller=\"user_actived\" class=\"app-body\">\n    <div class=\"app-title\">我的直推会员</div>\n    <div class=\"app-panel\">\n        <table class=\"table table-hover\">\n            <thead>\n            <tr>\n                <th>序号</th>\n                <th>用户账号</th>\n                <th>手机号</th>\n                <th>姓名</th>\n                <th>信用分</th>\n                <th>注册时间</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"it in listdata.userList\">\n                <td>{{it.userId}}</td>\n                <td>{{it.username}}</td>\n                <td>{{it.mobile}}</td>\n                <td>{{it.name}}</td>\n                <td>{{it.points}}</td>\n                <td>{{it.createTime}}</td>\n            </tr>\n            </tbody>\n        </table>\n        <div>\n            <ul class=\"pagination\" style=\"margin: 0px 0px 14px 14px;\"></ul>\n        </div>\n    </div>\n</div>"},{"url":"user_inactive.html","route":"/user_inactive","template":"<style>\n    th {\n        background-color: #5864AE;\n        color: #ffffff;\n    }\n\n    .app-body {\n        margin: 20px 30px 20px 30px;\n        width: 980px;\n    }\n\n    .app-panel {\n        background-color: #ffffff;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-title {\n        line-height: 40px;\n        font-size: 18px;\n    }\n</style>\n\n<div ng-controller=\"user_inactive\" class=\"app-body\">\n    <div class=\"app-title\">待激活会员</div>\n    <div class=\"app-panel\">\n        <table class=\"table table-hover\" ng-click=\"onListItemClick($event)\">\n            <thead>\n            <tr>\n                <th>序号</th>\n                <th>用户账号</th>\n                <th>姓名</th>\n                <th>注册时间</th>\n                <th>激活操作</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"it in listdata.userList\">\n                <td>{{it.userId}}</td>\n                <td>{{it.username}}</td>\n                <td>{{it.name}}</td>\n                <td>{{it.createTime}}</td>\n                <td>\n                    <button class=\"btn btn-xs btn-success\" index=\"{{$index}}\">去激活</button>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n        <div>\n            <ul class=\"pagination\" style=\"margin: 0px 0px 14px 14px;\"></ul>\n        </div>\n    </div>\n</div>"}]);
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
	window.findpwdApp = angular.module("findpwdApp", []);

	var server = "http://localhost:8080/credit/api";
	if(window.profile === "product")
	{
	    server = "http://www.etr888.com/credit/api";
	}

	var api = {
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
	    key: "credit.pc",

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
	            " <div style=\"position: fixed; left: 0px; top: 0px; right: 0px; bottom: 0px;z-index: 10000;background-color: #000000; opacity: 0;\"></div>" +
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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	app.controller("buy_finish", function($scope, $rootScope, $location)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 10,
	        totalPages: 1,
	        orderList: [],
	    };

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize,
	            finish: 1
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.order_buyList_v1, param, cfg, function(data, code, msg)
	        {
	            for(var i = 0; i < data.orderList.length; i++)
	            {
	                var it = data.orderList[i];
	                it.createTime = T.common.ui.formatTime(it.createTime);
	            }
	            $scope.listdata.totalPages = data.totalPages;
	            $scope.listdata.orderList = data.orderList;
	            $scope.$apply();
	            $scope.showPages();
	        });
	    };

	    $scope.showPages = function()
	    {
	        if($scope.listdata.totalPages > 0)
	        {
	            var options = {
	                currentPage: $scope.listdata.pageNo,
	                totalPages: $scope.listdata.totalPages,
	                onPageChanged: function(event, oldPage, newPage)
	                {
	                    if($scope.listdata.pageNo !== newPage)
	                    {
	                        $scope.listdata.pageNo = newPage;
	                        $scope.getData();
	                    }
	                }
	            };
	            $(".pagination").bootstrapPaginator(options);
	        }
	    };

	    $scope.getData();
	});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	app.controller("buy_notfinish", function($scope, $rootScope, $location)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 10,
	        totalPages: 1,
	        orderList: [],
	    };

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize,
	            finish: 0
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.order_buyList_v1, param, cfg, function(data, code, msg)
	        {
	            for(var i = 0; i < data.orderList.length; i++)
	            {
	                var it = data.orderList[i];
	                it.createTime = T.common.ui.formatTime(it.createTime);
	            }
	            $scope.listdata.totalPages = data.totalPages;
	            $scope.listdata.orderList = data.orderList;
	            $scope.$apply();
	            $scope.showPages();
	        });
	    };

	    $scope.showPages = function()
	    {
	        if($scope.listdata.totalPages > 0)
	        {
	            var options = {
	                currentPage: $scope.listdata.pageNo,
	                totalPages: $scope.listdata.totalPages,
	                onPageChanged: function(event, oldPage, newPage)
	                {
	                    if($scope.listdata.pageNo !== newPage)
	                    {
	                        $scope.listdata.pageNo = newPage;
	                        $scope.getData();
	                    }
	                }
	            };
	            $(".pagination").bootstrapPaginator(options);
	        }
	    };

	    $scope.getData();
	});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	app.controller("buy_sure", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.buy_sure = function()
	    {
				var orderId = T.common.util.getParameter("orderId");
	            T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
	            {
	                if(operatePasswd)
	                {
	                    var param = {
	                        orderId: orderId,
	                        password: operatePasswd
	                    };
	                    var cfg = {
	                        mask: true,
	                        care: true
	                    };
	                    T.common.ajax.request(Api.order_buy_v1, param, cfg, function(data, code, msg)
	                    {
	                        switch(code)
	                        {
	                            case 200:
	                            {
	                                T.common.ui.toast("充值成功");
									$location.url("/buy");
	                                break;
	                            }
	                            default:
	                            {
	                                T.common.ui.toast(msg);
	                                break;
	                            }
	                        }
	                    });
	                }
	            });
	    };
	});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	app.controller("buy", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 10,
	        totalPages: 1,
	        orderList: [],
	    };

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize,
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.order_newList_v1, param, cfg, function(data, code, msg)
	        {
	            for(var i = 0; i < data.orderList.length; i++)
	            {
	                var it = data.orderList[i];
	                it.createTime = T.common.ui.formatTime(it.createTime);
	            }
	            $scope.listdata.totalPages = data.totalPages;
	            $scope.listdata.orderList = data.orderList;
	            $scope.$apply();
	            $scope.showPages();
	        });
	    };

	    $scope.showSaler = function(index, callback)
	    {
	        var item = $scope.listdata.orderList[index];
	        var param = {
	            userId: item.userId
	        };
	        var cfg = {
	            mask: false,
	        };
	        T.common.ajax.request(Api.user_userInfo_v1, param, cfg, function(data, code, msg)
	        {
	            var info = "";
	            info += "姓名: " + data.user.name + "\n";
	            info += "手机号: " + data.user.mobile + "\n";
	            info += "银行卡: " + data.user.bankcard + "\n";
	            info += "开户行: " + data.user.bankAddress + "\n";
	            info += "支付宝: " + data.user.alipay + "\n";
	            info += "微信: " + data.user.wechat + "\n";
	            alert(info);

	            if(callback)
	            {
	                callback();
	            }
	        });
	    };

	    $scope.buy = function(index)
	    {
			var item = $scope.listdata.orderList[index];
			$location.url("/buy_sure?orderId=" + item.orderId);
	        $scope.$apply();
	        /*$scope.showSaler(index, function()
	        {
	            var item = $scope.listdata.orderList[index];
	            T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
	            {
	                if(operatePasswd)
	                {
	                    var param = {
	                        orderId: item.orderId,
	                        password: operatePasswd
	                    };
	                    var cfg = {
	                        mask: true,
	                        care: true
	                    };
	                    T.common.ajax.request(Api.order_buy_v1, param, cfg, function(data, code, msg)
	                    {
	                        switch(code)
	                        {
	                            case 200:
	                            {
	                                T.common.ui.toast("购买成功");
	                                $scope.getData();
	                                break;
	                            }
	                            default:
	                            {
	                                T.common.ui.toast(msg);
	                                break;
	                            }
	                        }
	                    });
	                }
	            });
	        });*/
	    };

	    $scope.showPages = function()
	    {
	        if($scope.listdata.totalPages > 0)
	        {
	            var options = {
	                currentPage: $scope.listdata.pageNo,
	                totalPages: $scope.listdata.totalPages,
	                onPageChanged: function(event, oldPage, newPage)
	                {
	                    if($scope.listdata.pageNo !== newPage)
	                    {
	                        $scope.listdata.pageNo = newPage;
	                        $scope.getData();
	                    }
	                }
	            };
	            $(".pagination").bootstrapPaginator(options);
	        }
	    };

	    $scope.getData();
	});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	app.controller("buy", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 10,
	        totalPages: 1,
	        orderList: [],
	    };

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize,
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.order_newList_v1, param, cfg, function(data, code, msg)
	        {
	            for(var i = 0; i < data.orderList.length; i++)
	            {
	                var it = data.orderList[i];
	                it.createTime = T.common.ui.formatTime(it.createTime);
	            }
	            $scope.listdata.totalPages = data.totalPages;
	            $scope.listdata.orderList = data.orderList;
	            $scope.$apply();
	            $scope.showPages();
	        });
	    };

	    $scope.showSaler = function(index, callback)
	    {
	        var item = $scope.listdata.orderList[index];
	        var param = {
	            userId: item.userId
	        };
	        var cfg = {
	            mask: false,
	        };
	        T.common.ajax.request(Api.user_userInfo_v1, param, cfg, function(data, code, msg)
	        {
	            var info = "";
	            info += "姓名: " + data.user.name + "\n";
	            info += "手机号: " + data.user.mobile + "\n";
	            info += "银行卡: " + data.user.bankcard + "\n";
	            info += "开户行: " + data.user.bankAddress + "\n";
	            info += "支付宝: " + data.user.alipay + "\n";
	            info += "微信: " + data.user.wechat + "\n";
	            alert(info);

	            if(callback)
	            {
	                callback();
	            }
	        });
	    };

	    $scope.buy = function(index)
	    {
			var item = $scope.listdata.orderList[index];
			$location.url("/buy_sure?orderId=" + item.orderId);
	        $scope.$apply();
	    };

	    $scope.showPages = function()
	    {
	        if($scope.listdata.totalPages > 0)
	        {
	            var options = {
	                currentPage: $scope.listdata.pageNo,
	                totalPages: $scope.listdata.totalPages,
	                onPageChanged: function(event, oldPage, newPage)
	                {
	                    if($scope.listdata.pageNo !== newPage)
	                    {
	                        $scope.listdata.pageNo = newPage;
	                        $scope.getData();
	                    }
	                }
	            };
	            $(".pagination").bootstrapPaginator(options);
	        }
	    };

	    $scope.getData();
	});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	app.controller("change_list", function($scope, $rootScope, $location)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 10,
	        totalPages: 1,
	        changeList: [],
	    };

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize,
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.change_getList_v1, param, cfg, function(data, code, msg)
	        {
	            for(var i = 0; i < data.changeList.length; i++)
	            {
	                var it = data.changeList[i];
	                it.createTime = T.common.ui.formatTime(it.createTime);
	            }
	            $scope.listdata.totalPages = data.totalPages;
	            $scope.listdata.changeList = data.changeList;
	            $scope.$apply();
	            $scope.showPages();
	        });
	    };

	    $scope.showPages = function()
	    {
	        if($scope.listdata.totalPages > 0)
	        {
	            var options = {
	                currentPage: $scope.listdata.pageNo,
	                totalPages: $scope.listdata.totalPages,
	                onPageChanged: function(event, oldPage, newPage)
	                {
	                    if($scope.listdata.pageNo !== newPage)
	                    {
	                        $scope.listdata.pageNo = newPage;
	                        $scope.getData();
	                    }
	                }
	            };
	            $(".pagination").bootstrapPaginator(options);
	        }
	    };

	    $scope.getData();
	});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	app.controller("customer", function($scope, $rootScope, $location)
	{
	});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	app.controller("dialog_notice", function($scope, $rootScope, $location, $uibModalInstance, items)
	{
	    $scope.notice = items;
	    content=items.content;
	    $scope.ok = function()
	    {
	        $uibModalInstance.close();
	    };
	});

	app.directive('notice', function() {
	    return {
	        restrict: 'E',
	        template: content,
	        replace: true
	    };
	});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	app.controller("dialog_passwd", function($scope, $rootScope, $location, $uibModalInstance, items)
	{
	    $scope.ok = function()
	    {
	        if($scope.passwd && $scope.passwd !== "")
	        {
	            var operatePasswd = T.common.util.md5($scope.passwd);
	            $uibModalInstance.close(operatePasswd);
	        }
	    };
	    $scope.cancel = function()
	    {
	        $uibModalInstance.close();
	    };
	});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	app.controller("feedback", function($scope, $rootScope, $location)
	{
	    $scope.submitForm = function(isValid)
	    {
	        if(isValid)
	        {
	            var cfg = {
	                mask: true,
	            };
	            T.common.ajax.request(Api.feedback_add_v1, $scope.formdata, cfg, function(data, code, msg)
	            {
	                $scope.formdata = {};
	                $scope.$apply();
	                T.common.ui.toast("非常感谢您的反馈");
	            });
	        }
	    };
	});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	findpwdApp.controller("findpwd", function($scope, $rootScope, $location)
	{
	    $scope.sendcode = function(isValid)
	    {
	        if(isValid)
	        {
	            var param = {
	                mobile: $scope.formdata.mobile
	            };
	            var cfg = {
	                mask: true,
	                care: true
	            };
	            T.common.ajax.request(Api.code_findPwd_v1, param, cfg, function(data, code, msg)
	            {
	                switch(code)
	                {
	                    case 200:
	                    {
	                        T.common.ui.toast("短信发送成功");
	                        break;
	                    }
	                    default:
	                    {
	                        T.common.ui.toast(msg);
	                        break;
	                    }
	                }
	            });
	        }
	    };

	    $scope.submitForm = function(isValid)
	    {
	        if(isValid)
	        {
	            $scope.formdata.password = T.common.util.md5($scope.formdata.passwd);
	            var cfg = {
	                mask: true,
	                care: true
	            };
	            T.common.ajax.request(Api.user_findPwd_v1, $scope.formdata, cfg, function(data, code, msg)
	            {
	                switch(code)
	                {
	                    case 200:
	                    {
	                        $scope.formdata = {};
	                        $scope.$apply();
	                        T.common.ui.toast("修改成功");
	                        break;
	                    }
	                    default:
	                    {
	                        T.common.ui.toast(msg);
	                        break;
	                    }
	                }
	            });
	        }
	    };
	});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

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

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	app.controller("main", function($scope, $rootScope, $location, $uibModal)
	{
	    T.common.ajax.request(Api.admin_settingInfo_v1, null, null, function(ddata, code, msg)
	    {
	        // 维护中
	        if(ddata.setting.WangZhanWeiHu.ShiFouWeiHu)
	        {
	            location.href = "maintain.html";
	            return;
	        }

	        var cfg = {
	            mask: true,
	        };
	        T.common.ajax.request(Api.user_userInfo_v1, null, cfg, function(data, code, msg)
	        {
	            $("#creditLevel").html("");
	            for(var i = 0; i < data.user.level; i++)
	            {
	                var dom = $('<img src="drawable/icon_credit_star.png">');
	                $("#creditLevel").append(dom);
	            }

	            var cards = ["", "普通卡", "金卡", "白金卡", "钻石卡", "黑钻卡"];
	            data.user.level = cards[data.user.level];
	            $scope.user = data.user;
	            $scope.$apply();
	            $('#profile').html("用户: " + data.user.username);

	            if(!data.user.name || data.user.name === "")
	            {
	                location.href = "main.html#/updateinfo";
	                $rootScope.completeUserInfo = true;
	            }
	            else
	            {
	                $rootScope.completeUserInfo = false;
	            }
	        });

	        // 读取最新公告
	        var showNotice = localStorage.getItem(T.common.cfg.key + ".showNotice");
	        if(showNotice !== null && showNotice === "true")
	        {
	            T.common.ajax.request(Api.notice_latest_v1, null, null, function(data, code, msg)
	            {
	                if(data.notice)
	                {
	                    data.notice.createTime = T.common.ui.formatTime(data.notice.createTime);

	                    var modalInstance = $uibModal.open({
	                        animation: true,
	                        templateUrl: "dialog_notice.html?t=" + new Date().getTime(),
	                        controller: "dialog_notice",
	                        resolve: {
	                            items: function()
	                            {
	                                return data.notice;
	                            }
	                        }
	                    });
	                    modalInstance.opened.then(function() {// 模态窗口打开之后执行的函数  
		                    console.log('modal is opened');  
		               	  }); 
	                    modalInstance.result.then(function(operatePasswd)
	                    {
	                    }, function()
	                    {
	                        console.log("dialog dismiss");
	                    });
											
											
	                    localStorage.setItem(T.common.cfg.key + ".showNotice", "false");
	                }
	            });
	        }
	    });
	});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/**
	 * author: Sean
	 * description: common util javascript library, don't modify anything
	 * dependencies : jquery
	 */
	(function()
	{
	    if(!window.T)
	    {
	        window.T = {};
	        T.common = {};
	    }

	    /**
	     * 全局用户
	     */
	    T.common.user = {

	        // 读取sid
	        getSid: function()
	        {
	            return localStorage.getItem(T.common.cfg.key + ".sid");
	        },

	        // 验证登录
	        isSignin: function()
	        {
	            if(this.getSid() !== null)
	            {
	                return true;
	            }
	            return false;
	        },

	        // 注销
	        signout: function()
	        {
	            localStorage.removeItem(T.common.cfg.key + ".sid");
	        },
	    };

	    /**
	     * 网络请求模块
	     */
	    T.common.ajax = {

	        ajaxobj: null,

	        // 签名
	        sign: function(params)
	        {
	            params.sid = T.common.user.getSid();

	            params.seed = parseInt(Math.random() * 10000000000) + 1;
	            var keyset = [];
	            for(var name in params)
	            {
	                if(name !== "sign")
	                {
	                    keyset.push(name);
	                }
	            }
	            keyset.sort();
	            var sign = "";
	            for(var i = 0; i < keyset.length; i++)
	            {
	                var key = keyset[i];
	                var value = params[key];
	                if(value === null)
	                {
	                    sign += key + "=&";
	                }
	                else
	                {
	                    switch(typeof(value))
	                    {
	                        case "undefined":
	                            sign += key + "=&";
	                            break;
	                        default:
	                            sign += key + "=" + value + "&";
	                            break;
	                    }
	                }
	            }
	            sign += "key=bae06b5643c644e5856738d03aeb7893";

	            console.log("待签名: " + sign);
	            params.sign = T.common.util.md5(sign);
	            // console.log("签名: " + params.sign);
	        },

	        /**
	         * cfg :
	         * {
			 *    mask : false
			 *    care : false 是否关心业务异常
			 * }
	         */
	        request: function(url, params, cfg, callback)
	        {
	            if(cfg === null)
	            {
	                cfg = {
	                    mask: false,
	                    care: false
	                };
	            }

	            if(params === null)
	            {
	                params = {};
	            }
	            this.sign(params);

	            var maskId = "_loading_" + new Date().getTime();
	            if(cfg.mask)
	            {
	                var loadingDom = '<div id="' + maskId + '">' +
	                    ' <div style="position: fixed; left: 0px; top: 0px; right: 0px; bottom: 0px;z-index: 10000;background-color: #000000; opacity: 0;"></div>' +
	                    '<table style="z-index: 10000;position: fixed; left: 0px; right: 0px; top: 0px; bottom: 0px;width: 100%; height: 100%;">' +
	                    '<tr>' +
	                    '<td>' +
	                    '<div style="width: 200px;margin: auto;background-color: #000000; opacity: 0.7;color: #cccccc;border-radius: 4px;padding: 24px 0px 24px 0px;text-align: center;font-size: 16px;box-shadow: 0px 0px 5px #000000;">正在请求请稍后</div>' +
	                    '</td>' +
	                    '</tr>' +
	                    '</table>' +
	                    '</div>';
	                loadingDom = $(loadingDom);
	                $('body').append(loadingDom);
	                loadingDom.bind("click", function()
	                {
	                    $(this).remove();
	                });
	            }

	            var log = {
	                url: url,
	                params: params
	            };
	            console.log(JSON.stringify(log, null, 3));

	            ajaxobj = $.ajax({
	                url: url,
	                type: 'post',
	                data: params,
	                success: function(jsonstr)
	                {
	                    console.log(JSON.stringify(jsonstr, null, 3));

	                    if(cfg.mask)
	                    {
	                        var loading = $("#" + maskId);
	                        if(loading)
	                        {
	                            loading.remove();
	                        }
	                    }

	                    try
	                    {
	                        var jsonobj = jsonstr;
	                        var code = jsonobj.code;
	                        var msg = jsonobj.msg;
	                        var data = jsonobj.data;

	                        T.common.cfg.ajaxSuccess(cfg, data, code, msg, callback);
	                    }
	                    catch(e)
	                    {
	                        T.common.cfg.ajaxHandleFail(e);
	                    }
	                },
	                error: function(XMLHttpRequest, textStatus, errorThrown)
	                {
	                    if(cfg.mask)
	                    {
	                        var loading = $("#" + maskId);
	                        if(loading)
	                        {
	                            loading.remove();
	                        }
	                    }
	                    T.common.cfg.ajaxFail(XMLHttpRequest, textStatus, errorThrown);
	                },
	            });
	        },
	    };

	    /**
	     * 工具类
	     */
	    T.common.util = {

	        // md5加密
	        md5: function(txt)
	        {
	            return $.md5(txt);
	        },

	        // 获取url参数
	        getParameter: function(name)
	        {
	            // 如果链接没有参数，或者链接中不存在我们要获取的参数，直接返回空
	            if(location.href.indexOf("?") === -1 || location.href.indexOf(name + '=') === -1)
	            {
	                return null;
	            }
	            // 获取链接中参数部分
	            var queryString = decodeURI(location.href.substring(location.href.indexOf("?") + 1));
	            // 分离参数对 ?key=value&key2=value2
	            var parameters = queryString.split("&");
	            var pos, paraName, paraValue;
	            for(var i = 0; i < parameters.length; i++)
	            {
	                // 获取等号位置
	                pos = parameters[i].indexOf('=');
	                if(pos === -1)
	                {
	                    continue;
	                }
	                // 获取name 和 value
	                paraName = parameters[i].substring(0, pos);
	                paraValue = parameters[i].substring(pos + 1);
	                // 如果查询的name等于当前name，就返回当前值，同时，将链接中的+号还原成空格
	                if(paraName === name)
	                {
	                    return unescape(paraValue.replace(/\+/g, " "));
	                }
	            }
	            return null;
	        },
	    };

	    /**
	     * 时间工具
	     */
	    T.common.time = {
	        /**
	         * 格式化日期
	         * eg: var datestr = T.common.time.format(new Date(), "yyyy-MM-dd HH:mm:ss");
	         */
	        format: function(date, format)
	        {
	            format = format.replace("yyyy", date.getFullYear());
	            format = format.replace("MM", date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1));
	            format = format.replace("dd", date.getDate() > 9 ? date.getDate() : "0" + date.getDate());
	            format = format.replace("HH", date.getHours() > 9 ? date.getHours() : "0" + date.getHours());
	            format = format.replace("mm", date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes());
	            format = format.replace("ss", date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds());
	            return format;
	        },

	        /**
	         * 字符串转日期
	         * eg: var date = T.common.time.parse("2016-01-01 00:00:00", "yyyy-MM-dd HH:mm:ss");
	         */
	        parse: function(datestr, format)
	        {
	            datestr += "";
	            var target = [0, 0, 0, 0, 0, 0];
	            var sign = ["yyyy", "MM", "dd", "HH", "mm", "ss"];
	            for(var i = 0; i < sign.length; i++)
	            {
	                var idx = format.indexOf(sign[i]);
	                if(idx > -1)
	                {
	                    target[i] = parseInt(datestr.substr(idx, sign[i].length));
	                }
	            }
	            var date = new Date(target[0], target[1] - 1, target[2], target[3], target[4], target[5]);
	            return date;
	        },

	        /**
	         * 日期增加
	         * T.common.time.add(new Date(), "M", 2);
	         */
	        add: function(date, field, num)
	        {
	            switch(field)
	            {
	                case "y" :
	                    date.setFullYear(date.getFullYear() + num);
	                    break;
	                case "M" :
	                    date.setMonth(date.getMonth() + num);
	                    break;
	                case "d" :
	                    date.setDate(date.getDate() + num);
	                    break;
	                case "H" :
	                    date.setHours(date.getHours() + num);
	                    break;
	                case "m" :
	                    date.setMinutes(date.getMinutes() + num);
	                    break;
	                case "s" :
	                    date.setSeconds(date.getSeconds() + num);
	                    break;
	            }
	            return date;
	        },
	    };
	})();

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	app.controller("notice_info", function($scope, $rootScope, $location)
	{
	    var param = {
	        noticeId: T.common.util.getParameter("id")
	    };
	    var cfg = {
	        mask: true
	    };
	    T.common.ajax.request(Api.notice_info_v1, param, cfg, function(data, code, msg)
	    {
	        data.notice.createTime = T.common.ui.formatTime(data.notice.createTime);
	        $scope.notice = data.notice;
	        $scope.$apply();
	        $(".app-content").html(data.notice.content);
	    });
	});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	app.controller("notice", function($scope, $rootScope, $location)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 10,
	        totalPages: 1,
	        noticeList: [],
	    };

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize,
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.notice_getList_v1, param, cfg, function(data, code, msg)
	        {
	            for(var i = 0; i < data.noticeList.length; i++)
	            {
	                var it = data.noticeList[i];
	                it.createTime = T.common.ui.formatTime(it.createTime);
	            }
	            $scope.listdata.totalPages = data.totalPages;
	            $scope.listdata.noticeList = data.noticeList;
	            $scope.$apply();
	            $scope.showPages();
	        });
	    };

	    $scope.onListItemClick = function($event)
	    {
	        var index = $($event.target).attr("index");
	        if(index)
	        {
	            // 保持状态
	            $rootScope.cacheNoticeList = $scope.listdata;

	            var id = $scope.listdata.noticeList[index].noticeId;
	            $location.url("/notice_info?id=" + id);
	        }
	    };

	    $scope.showPages = function()
	    {
	        if($scope.listdata.totalPages > 0)
	        {
	            var options = {
	                currentPage: $scope.listdata.pageNo,
	                totalPages: $scope.listdata.totalPages,
	                onPageChanged: function(event, oldPage, newPage)
	                {
	                    if($scope.listdata.pageNo !== newPage)
	                    {
	                        $scope.listdata.pageNo = newPage;
	                        $scope.getData();
	                    }
	                }
	            };
	            $(".pagination").bootstrapPaginator(options);
	        }
	    };

	    if($rootScope.cacheNoticeList)
	    {
	        $scope.listdata = $rootScope.cacheNoticeList;
	        $scope.showPages();
	        $rootScope.cacheNoticeList = null;
	    }
	    else
	    {
	        $scope.getData();
	    }
	});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

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

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	app.controller("point_to_jidian", function($scope, $rootScope, $location)
	{
	    $scope.getPoints = function()
	    {
	        var cfg = {
	            mask: true,
	        };
	        T.common.ajax.request(Api.user_userInfo_v1, null, cfg, function(data, code, msg)
	        {
	            $scope.points = data.user.points;
	            $scope.$apply();
	        });
	    };

	    $scope.submitForm = function(isValid)
	    {
	        if(isValid)
	        {
	            $scope.formdata.operatePasswd = T.common.util.md5($scope.formdata.operatePasswd1);
	            var cfg = {
	                mask: true,
	                care: true,
	            };
	            T.common.ajax.request(Api.user_pointToJidian_v1, $scope.formdata, cfg, function(data, code, msg)
	            {
	                switch(code)
	                {
	                    case 200:
	                    {
	                        $scope.formdata = {};
	                        $scope.$apply();
	                        T.common.ui.toast("转换成功");
	                        $scope.getPoints();
	                        break;
	                    }
	                    default:
	                    {
	                        T.common.ui.toast(msg);
	                        break;
	                    }
	                }
	            });
	        }
	    };

	    $scope.getPoints();
	});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	app.controller("qrcode", function($scope, $rootScope, $location)
	{
	    var cfg = {
	        mask: true,
	    };
	    T.common.ajax.request(Api.user_userInfo_v1, null, cfg, function(data, code, msg)
	    {
	        new QRCode(document.getElementById("qrcode"), {
	            text: "http://www.etr888.com/app/signup.html?inviter=" + data.user.userId,
	            width: 150,
	            height: 150,
	            colorDark: "#000000",
	            colorLight: "#ffffff",
	            correctLevel: QRCode.CorrectLevel.H
	        });
	    });
	});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	app.controller("quicksignup", function($scope, $rootScope, $location)
	{
	    $scope.getUserInfo = function()
	    {
	        var cfg = {
	            mask: true,
	        };
	        T.common.ajax.request(Api.user_userInfo_v1, null, cfg, function(data, code, msg)
	        {
	            $scope.user = data.user;
	            $scope.formdata = {
	                parentAccount: T.common.util.getParameter("parent"),
	                levelCard: "1",
	                signupType: "1",
	                isLeft: "1"
	            };

	            $scope.$apply();
	        });
	    };

		$scope.sendcode = function(isValid)
	    {
			//alert(isValid);
	        //if(isValid)
	        //{
				if(!$scope.formdata.mobile || $scope.formdata.mobile === "")
	            {
					T.common.ui.toast("请输入手机号码");
	                return;
	            }
	            var param = {
	                mobile: $scope.formdata.mobile
	            };
	            var cfg = {
	                mask: true,
	                care: true
	            };
	            T.common.ajax.request(Api.code_signup_v1, param, cfg, function(data, code, msg)
	            {
	                switch(code)
	                {
	                    case 200:
	                    {
	                        T.common.ui.toast("短信发送成功");
	                        break;
	                    }
	                    default:
	                    {
	                        T.common.ui.toast(msg);
	                        break;
	                    }
	                }
	            });
	        //}
	    };
		
	    $scope.submitForm = function(isValid)
	    {
	        if(isValid)
	        {
	            if($scope.formdata.signupType === "1")
	            {
	                if(!$scope.formdata.mobile || $scope.formdata.mobile === "")
	                {
	                    T.common.ui.toast("请输入手机号码");
	                    return;
	                }
	            }
	            else
	            {
	                $scope.formdata.mobile = $scope.user.mobile;
	            }

	            var cfg = {
	                mask: true,
	                care: true,
	            };
	            T.common.ajax.request(Api.user_quickSignup_v1, $scope.formdata, cfg, function(data, code, msg)
	            {
	                switch(code)
	                {
	                    case 200:
	                    {
	                        T.common.ui.toast("注册成功");
	                        $scope.getUserInfo();
	                        break;
	                    }
	                    default:
	                    {
	                        T.common.ui.toast(msg);
	                        break;
	                    }
	                }
	            });
	        }
	    };

	    $scope.getUserInfo();
	});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	app.controller("reward", function($scope, $rootScope, $location)
	{
	    $scope.type = T.common.util.getParameter("type");

	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 10,
	        totalPages: 1,
	        rewardList: [],
	    };

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize,
	            type: $scope.type
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.reward_getList_v1, param, cfg, function(data, code, msg)
	        {
	            for(var i = 0; i < data.rewardList.length; i++)
	            {
	                var it = data.rewardList[i];
	                it.createTime = T.common.ui.formatTime(it.createTime);
	            }
	            $scope.listdata.totalPages = data.totalPages;
	            $scope.listdata.rewardList = data.rewardList;
	            $scope.$apply();
	            $scope.showPages();
	        });
	    };

	    $scope.showPages = function()
	    {
	        if($scope.listdata.totalPages > 0)
	        {
	            var options = {
	                currentPage: $scope.listdata.pageNo,
	                totalPages: $scope.listdata.totalPages,
	                onPageChanged: function(event, oldPage, newPage)
	                {
	                    if($scope.listdata.pageNo !== newPage)
	                    {
	                        $scope.listdata.pageNo = newPage;
	                        $scope.getData();
	                    }
	                }
	            };
	            $(".pagination").bootstrapPaginator(options);
	        }
	    };

	    $scope.getData();
	});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	app.controller("sale_finish", function($scope, $rootScope, $location)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 10,
	        totalPages: 1,
	        orderList: [],
	    };

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize,
	            finish: 1
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.order_saleList_v1, param, cfg, function(data, code, msg)
	        {
	            for(var i = 0; i < data.orderList.length; i++)
	            {
	                var it = data.orderList[i];
	                it.createTime = T.common.ui.formatTime(it.createTime);
	            }
	            $scope.listdata.totalPages = data.totalPages;
	            $scope.listdata.orderList = data.orderList;
	            $scope.$apply();
	            $scope.showPages();
	        });
	    };

	    $scope.showPages = function()
	    {
	        if($scope.listdata.totalPages > 0)
	        {
	            var options = {
	                currentPage: $scope.listdata.pageNo,
	                totalPages: $scope.listdata.totalPages,
	                onPageChanged: function(event, oldPage, newPage)
	                {
	                    if($scope.listdata.pageNo !== newPage)
	                    {
	                        $scope.listdata.pageNo = newPage;
	                        $scope.getData();
	                    }
	                }
	            };
	            $(".pagination").bootstrapPaginator(options);
	        }
	    };

	    $scope.getData();
	});

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	app.controller("sale_notfinish", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 10,
	        totalPages: 1,
	        orderList: [],
	    };

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize,
	            finish: 0
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.order_saleList_v1, param, cfg, function(data, code, msg)
	        {
	            for(var i = 0; i < data.orderList.length; i++)
	            {
	                var it = data.orderList[i];
	                it.createTime = T.common.ui.formatTime(it.createTime);
	                switch(it.status)
	                {
	                    case "new":
	                    {
	                        it.status = "出售中";
	                        it.canCancel = true;
	                        break;
	                    }
	                    case "cancel":
	                    {
	                        it.status = "已撤销";
	                        it.nothing = true;
	                        break;
	                    }
	                    case "timeout":
	                    {
	                        it.status = "已过期";
	                        it.nothing = true;
	                        break;
	                    }
	                    case "sale":
	                    {
	                        it.status = "待收款";
	                        it.canConfirm = true;
	                        break;
	                    }
	                }
	            }
	            $scope.listdata.totalPages = data.totalPages;
	            $scope.listdata.orderList = data.orderList;
	            $scope.$apply();
	            $scope.showPages();
	        });
	    };

	    $scope.onListItemClick = function($event)
	    {
	        var index = $($event.target).attr("index");
	        if(index)
	        {
	            switch($($event.target).html())
	            {
	                case "确认收款":
	                {
	                    T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
	                    {
	                        if(operatePasswd)
	                        {
	                            var id = $scope.listdata.orderList[index].orderId;
	                            var param = {
	                                orderId: id,
	                                password: operatePasswd
	                            };
	                            var cfg = {
	                                mask: true,
	                                care: true
	                            };
	                            T.common.ajax.request(Api.order_confirmPay_v1, param, cfg, function(data, code, msg)
	                            {
	                                switch(code)
	                                {
	                                    case 200:
	                                    {
	                                        T.common.ui.toast("成功确认收款");
	                                        $scope.getData();
	                                        break;
	                                    }
	                                    default:
	                                    {
	                                        T.common.ui.toast(msg);
	                                        break;
	                                    }
	                                }
	                            });
	                        }
	                    });
	                    break;
	                }
	                case "撤销挂单":
	                {
	                    T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
	                    {
	                        if(operatePasswd)
	                        {
	                            var id = $scope.listdata.orderList[index].orderId;
	                            var param = {
	                                orderId: id,
	                                password: operatePasswd
	                            };
	                            var cfg = {
	                                mask: true,
	                                care: true
	                            };
	                            T.common.ajax.request(Api.order_cancel_v1, param, cfg, function(data, code, msg)
	                            {
	                                switch(code)
	                                {
	                                    case 200:
	                                    {
	                                        T.common.ui.toast("成功撤销挂单");
	                                        $scope.getData();
	                                        break;
	                                    }
	                                    default:
	                                    {
	                                        T.common.ui.toast(msg);
	                                        break;
	                                    }
	                                }
	                            });
	                        }
	                    });
	                    break;
	                }
	            }
	        }
	    };

	    $scope.showPages = function()
	    {
	        if($scope.listdata.totalPages > 0)
	        {
	            var options = {
	                currentPage: $scope.listdata.pageNo,
	                totalPages: $scope.listdata.totalPages,
	                onPageChanged: function(event, oldPage, newPage)
	                {
	                    if($scope.listdata.pageNo !== newPage)
	                    {
	                        $scope.listdata.pageNo = newPage;
	                        $scope.getData();
	                    }
	                }
	            };
	            $(".pagination").bootstrapPaginator(options);
	        }
	    };

	    $scope.getData();
	});

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	app.controller("sale", function($scope, $rootScope, $location)
	{
	    $scope.submitForm = function(isValid)
	    {
	        if(isValid)
	        {
	            $scope.formdata.pointAmount = $scope.formdata.pointAmountTmp * 20;
	            $scope.formdata.password = T.common.util.md5($scope.formdata.operatePasswd);

	            if(confirm("确定挂单出售" + $scope.formdata.pointAmount + "积分?"))
	            {
	                var cfg = {
	                    mask: true,
	                    care: true,
	                };
	                T.common.ajax.request(Api.order_create_v1, $scope.formdata, cfg, function(data, code, msg)
	                {
	                    switch(code)
	                    {
	                        case 200:
	                        {
	                            $scope.formdata = {};
	                            $scope.$apply();
	                            T.common.ui.toast("成功挂单");
	                            break;
	                        }
	                        default:
	                        {
	                            T.common.ui.toast(msg);
	                            break;
	                        }
	                    }
	                });
	            }
	        }
	    };
	});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	signinApp.controller("signin", function($scope, $rootScope, $location)
	{
	    $scope.submitForm = function(isValid)
	    {
	        if(isValid)
	        {
	            $scope.formdata.password = T.common.util.md5($scope.formdata.passwd);
	            var cfg = {
	                mask: true,
	                care: true
	            };
	            T.common.ajax.request(Api.user_signin_v1, $scope.formdata, cfg, function(data, code, msg)
	            {
	                switch(code)
	                {
	                    case 200:
	                    {
	                        localStorage.setItem(T.common.cfg.key + ".sid", data.sid);
	                        localStorage.setItem(T.common.cfg.key + ".showNotice", "true");
	                        location.href = "main.html";
	                        break;
	                    }
	                    default:
	                    {
	                        T.common.ui.toast(msg);
	                        break;
	                    }
	                }
	            });
	        }
	    };
	});

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	app.controller("transfer_jidian", function($scope, $rootScope, $location)
	{
	    $scope.getPoints = function()
	    {
	        var cfg = {
	            mask: true,
	        };
	        T.common.ajax.request(Api.user_userInfo_v1, null, cfg, function(data, code, msg)
	        {
	            $scope.jidian = data.user.jidian;
	            $scope.$apply();
	        });
	    };

	    $scope.submitForm = function(isValid)
	    {
	        if(isValid)
	        {
	            $scope.formdata.password = T.common.util.md5($scope.formdata.operatePasswd);
	            var cfg = {
	                mask: true,
	                care: true,
	            };
	            T.common.ajax.request(Api.transfer_transferJidian_v1, $scope.formdata, cfg, function(data, code, msg)
	            {
	                switch(code)
	                {
	                    case 200:
	                    {
	                        $scope.formdata = {};
	                        $scope.$apply();
	                        T.common.ui.toast("转让成功");
	                        $scope.getPoints();
	                        break;
	                    }
	                    default:
	                    {
	                        T.common.ui.toast(msg);
	                        break;
	                    }
	                }
	            });
	        }
	    };

	    $scope.getPoints();
	});

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	app.controller("transfer_list", function($scope, $rootScope, $location)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 10,
	        totalPages: 1,
	        transferList: [],
	    };

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize,
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.transfer_getList_v1, param, cfg, function(data, code, msg)
	        {
	            for(var i = 0; i < data.transferList.length; i++)
	            {
	                var it = data.transferList[i];
	                it.createTime = T.common.ui.formatTime(it.createTime);
	            }
	            $scope.listdata.totalPages = data.totalPages;
	            $scope.listdata.transferList = data.transferList;
	            $scope.$apply();
	            $scope.showPages();
	        });
	    };

	    $scope.showPages = function()
	    {
	        if($scope.listdata.totalPages > 0)
	        {
	            var options = {
	                currentPage: $scope.listdata.pageNo,
	                totalPages: $scope.listdata.totalPages,
	                onPageChanged: function(event, oldPage, newPage)
	                {
	                    if($scope.listdata.pageNo !== newPage)
	                    {
	                        $scope.listdata.pageNo = newPage;
	                        $scope.getData();
	                    }
	                }
	            };
	            $(".pagination").bootstrapPaginator(options);
	        }
	    };

	    $scope.getData();
	});

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	app.controller("transfer_point", function($scope, $rootScope, $location)
	{
	    $scope.getPoints = function()
	    {
	        var cfg = {
	            mask: true,
	        };
	        T.common.ajax.request(Api.user_userInfo_v1, null, cfg, function(data, code, msg)
	        {
	            $scope.points = data.user.points;
	            $scope.$apply();
	        });
	    };

	    $scope.submitForm = function(isValid)
	    {
	        if(isValid)
	        {
	            $scope.formdata.password = T.common.util.md5($scope.formdata.operatePasswd);
	            var cfg = {
	                mask: true,
	                care: true,
	            };
	            T.common.ajax.request(Api.transfer_transferPoint_v1, $scope.formdata, cfg, function(data, code, msg)
	            {
	                switch(code)
	                {
	                    case 200:
	                    {
	                        $scope.formdata = {};
	                        $scope.$apply();
	                        T.common.ui.toast("转让成功");
	                        $scope.getPoints();
	                        break;
	                    }
	                    default:
	                    {
	                        T.common.ui.toast(msg);
	                        break;
	                    }
	                }
	            });
	        }
	    };

	    $scope.getPoints();
	});

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	app.controller("updateinfo", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.getUserInfo = function()
	    {
	        var cfg = {
	            mask: true,
	        };
	        T.common.ajax.request(Api.user_userInfo_v1, null, cfg, function(data, code, msg)
	        {
	            $scope.formdata = data.user;
	            $scope.$apply();
	        });
	    };
		
		$scope.sendcode = function(isValid)
	    {
			//alert(isValid);
	        //if(isValid)
	        //{
				if(!$scope.formdata.mobile || $scope.formdata.mobile === "")
	            {
					T.common.ui.toast("请输入手机号码");
	                return;
	            }
	            var param = {
	                mobile: $scope.formdata.mobile
	            };
	            var cfg = {
	                mask: true,
	                care: true
	            };
	            T.common.ajax.request(Api.code_updateInfo_v1, param, cfg, function(data, code, msg)
	            {
	                switch(code)
	                {
	                    case 200:
	                    {
	                        T.common.ui.toast("短信发送成功");
	                        break;
	                    }
	                    default:
	                    {
	                        T.common.ui.toast(msg);
	                        break;
	                    }
	                }
	            });
	        //}
	    };

	    $scope.upload = function()
	    {
	        $("#uploadFile").click();
	        document.getElementById('uploadFile').addEventListener('change', function(e)
	        {
	            var file = e.target.files[0];
	            var size = file.size / 1024 / 1024;
	            if(size > 3)
	            {
	                T.common.ui.toast("文件不得超过3M");
	                return;
	            }

	            var ext = "." + file.name.split(".")[file.name.split(".").length - 1];
	            var exts = $("#uploadFile").attr("accept").split(",");
	            var valid = false;
	            for(var i = 0; i < exts.length; i++)
	            {
	                if(ext === exts[i])
	                {
	                    valid = true;
	                    break;
	                }
	            }

	            if(valid)
	            {
	                T.common.oss.upload(file, function(osskey)
	                {
	                    $scope.formdata.idcardUrl = "http://etr.oss-ap-southeast-1.aliyuncs.com/" + osskey;
	                    T.common.ui.toast("上传成功");
	                    $("#focus1").get(0).focus();
	                });
	            }
	            else
	            {
	                T.common.ui.toast("该文件不允许上传");
	            }
	        });
	    };

	    $scope.submitForm = function(isValid)
	    {
	        if(isValid)
	        {
	            T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
	            {
	                if(operatePasswd)
	                {
	                    $scope.formdata.operatePasswd = operatePasswd;
	                    var cfg = {
	                        mask: true,
	                        care: true,
	                    };
	                    T.common.ajax.request(Api.user_updateUser_v1, $scope.formdata, cfg, function(data, code, msg)
	                    {
	                        switch(code)
	                        {
	                            case 200:
	                            {
	                                $rootScope.completeUserInfo = false;
	                                $scope.formdata = data.user;
	                                $scope.$apply();
	                                T.common.ui.toast("修改成功");
	                                break;
	                            }
	                            default:
	                            {
	                                T.common.ui.toast(msg);
	                                break;
	                            }
	                        }
	                    });
	                }
	            });
	        }
	    };

	    $scope.getUserInfo();
	});

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	app.controller("updatepwd", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.changePasswd = true;
	    $scope.changeOperatePasswd = false;
	    $scope.changeMobile = false;

	    $scope.toggle = function(index)
	    {
	        $scope.changePasswd = false;
	        $scope.changeOperatePasswd = false;
	        $scope.changeMobile = false;
	        switch(index)
	        {
	            case 0:
	                $scope.changePasswd = true;
	                break;
	            case 1:
	                $scope.changeOperatePasswd = true;
	                break;
	            case 2:
	                $scope.changeMobile = true;
	                break;
	        }
	    };

	    $scope.submitPasswd = function(isValid)
	    {
	        if(isValid)
	        {
	            T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
	            {
	                if(operatePasswd)
	                {
	                    if($scope.formdata.password !== $scope.formdata.password1)
	                    {
	                        T.common.ui.toast("两次密码不一致");
	                        return;
	                    }

	                    var param = {
	                        operatePasswd: operatePasswd,
	                        oldpwd: T.common.util.md5($scope.formdata.oldpwd),
	                        password: T.common.util.md5($scope.formdata.password),
	                    };
	                    var cfg = {
	                        mask: true,
	                        care: true,
	                    };
	                    T.common.ajax.request(Api.user_updatePwd_v1, param, cfg, function(data, code, msg)
	                    {
	                        switch(code)
	                        {
	                            case 200:
	                            {
	                                $scope.formdata.oldpwd = "";
	                                $scope.formdata.password = "";
	                                $scope.formdata.password1 = "";
	                                $scope.$apply();
	                                T.common.ui.toast("修改成功");
	                                break;
	                            }
	                            default:
	                            {
	                                T.common.ui.toast(msg);
	                                break;
	                            }
	                        }
	                    });
	                }
	            });
	        }
	    };

	    $scope.submitOperatePasswd = function(isValid)
	    {
	        if(isValid)
	        {
	            if($scope.formdata.password !== $scope.formdata.password1)
	            {
	                T.common.ui.toast("两次密码不一致");
	                return;
	            }

	            var param = {
	                oldpwd: T.common.util.md5($scope.formdata.oldpwd),
	                password: T.common.util.md5($scope.formdata.password),
	            };
	            var cfg = {
	                mask: true,
	                care: true,
	            };
	            T.common.ajax.request(Api.user_updateOperatePwd_v1, param, cfg, function(data, code, msg)
	            {
	                switch(code)
	                {
	                    case 200:
	                    {
	                        $scope.formdata.oldpwd = "";
	                        $scope.formdata.password = "";
	                        $scope.formdata.password1 = "";
	                        $scope.$apply();
	                        T.common.ui.toast("修改成功");
	                        break;
	                    }
	                    default:
	                    {
	                        T.common.ui.toast(msg);
	                        break;
	                    }
	                }
	            });
	        }
	    };

	    $scope.sendcode = function(isValid)
	    {
	        if(isValid)
	        {
	            var param = {
	                mobile: $scope.formdata.mobile
	            };
	            var cfg = {
	                mask: true,
	                care: true
	            };
	            T.common.ajax.request(Api.code_updatePwd_v1, param, cfg, function(data, code, msg)
	            {
	                switch(code)
	                {
	                    case 200:
	                    {
	                        T.common.ui.toast("短信发送成功");
	                        break;
	                    }
	                    default:
	                    {
	                        T.common.ui.toast(msg);
	                        break;
	                    }
	                }
	            });
	        }
	    };

	    $scope.submitMobile = function(isValid)
	    {
	        if(isValid)
	        {
	            var cfg = {
	                mask: true,
	                care: true,
	            };
	            T.common.ajax.request(Api.user_updateMobile_v1, $scope.formdata, cfg, function(data, code, msg)
	            {
	                switch(code)
	                {
	                    case 200:
	                    {
	                        $scope.formdata.mobile = "";
	                        $scope.formdata.code = "";
	                        $scope.$apply();
	                        T.common.ui.toast("修改成功");
	                        break;
	                    }
	                    default:
	                    {
	                        T.common.ui.toast(msg);
	                        break;
	                    }
	                }
	            });
	        }
	    };
	});

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	app.controller("upgrade", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.upgradeCard = function(levelCard)
	    {
	        T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
	        {
	            if(operatePasswd)
	            {
	                var param = {
	                    levelCard: levelCard,
	                    password: operatePasswd
	                };
	                var cfg = {
	                    mask: true,
	                    care: true
	                };
	                T.common.ajax.request(Api.user_upgrade_v1, param, cfg, function(data, code, msg)
	                {
	                    switch(code)
	                    {
	                        case 200:
	                        {
	                            T.common.ui.toast("升级成功请刷新查看");
	                            break;
	                        }
	                        default:
	                        {
	                            T.common.ui.toast(msg);
	                            break;
	                        }
	                    }
	                });
	            }
	        });
	    };

	    $scope.reActive = function()
	    {
	        T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
	        {
	            var param = {
	                operatePasswd: operatePasswd
	            };
	            var cfg = {
	                mask: true,
	                care: true
	            };
	            T.common.ajax.request(Api.user_reActive_v1, param, cfg, function(data, code, msg)
	            {
	                switch(code)
	                {
	                    case 200:
	                    {
	                        T.common.ui.toast("激活成功");
	                        $scope.getCardInfo();
	                        break;
	                    }
	                    default:
	                    {
	                        T.common.ui.toast(msg);
	                        break;
	                    }
	                }
	            });
	        });
	    };

	    $scope.getCardInfo = function()
	    {
	        var cfg = {
	            mask: true,
	        };
	        T.common.ajax.request(Api.user_upgradeCard_v1, null, cfg, function(data, code, msg)
	        {
	            $scope.cards = data.cards;
	            $scope.user = data.user;
	            $scope.$apply();
	        });
	    };

	    $scope.getCardInfo();
	});

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	app.controller("user_active", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.getUserInfo = function()
	    {
	        var cfg = {
	            mask: true,
	        };
	        T.common.ajax.request(Api.user_userInfo_v1, null, cfg, function(data, code, msg)
	        {
	            $scope.user = data.user;
	            $scope.userId = T.common.util.getParameter("userId");
	            $scope.account = T.common.util.getParameter("account");
	            $scope.$apply();
	        });
	    };

	    $scope.submitForm = function(isValid)
	    {
	        if(isValid)
	        {
	            $scope.formdata.userId = $scope.userId;
	            var cfg = {
	                mask: true,
	                care: true,
	            };
	            T.common.ajax.request(Api.user_active_v1, $scope.formdata, cfg, function(data, code, msg)
	            {
	                switch(code)
	                {
	                    case 200:
	                    {
	                        $scope.formdata = {
	                            levelCard: 1
	                        };
	                        $scope.$apply();
	                        T.common.ui.toast("激活成功");
	                        break;
	                    }
	                    default:
	                    {
	                        T.common.ui.toast(msg);
	                        break;
	                    }
	                }
	            });
	        }
	    };

	    $scope.getUserInfo();
	});

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	app.controller("user_actived", function($scope, $rootScope, $location)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 10,
	        totalPages: 1,
	        userList: [],
	    };

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize,
	            isActive: 1
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.user_myUserList_v1, param, cfg, function(data, code, msg)
	        {
	            for(var i = 0; i < data.userList.length; i++)
	            {
	                var it = data.userList[i];
	                it.createTime = T.common.ui.formatTime(it.createTime);
	            }
	            $scope.listdata.totalPages = data.totalPages;
	            $scope.listdata.userList = data.userList;
	            $scope.$apply();
	            $scope.showPages();
	        });
	    };

	    $scope.showPages = function()
	    {
	        if($scope.listdata.totalPages > 0)
	        {
	            var options = {
	                currentPage: $scope.listdata.pageNo,
	                totalPages: $scope.listdata.totalPages,
	                onPageChanged: function(event, oldPage, newPage)
	                {
	                    if($scope.listdata.pageNo !== newPage)
	                    {
	                        $scope.listdata.pageNo = newPage;
	                        $scope.getData();
	                    }
	                }
	            };
	            $(".pagination").bootstrapPaginator(options);
	        }
	    };

	    $scope.getData();
	});

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	app.controller("user_inactive", function($scope, $rootScope, $location)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 10,
	        totalPages: 1,
	        userList: [],
	    };

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize,
	            isActive: 0
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.user_myUserList_v1, param, cfg, function(data, code, msg)
	        {
	            for(var i = 0; i < data.userList.length; i++)
	            {
	                var it = data.userList[i];
	                it.createTime = T.common.ui.formatTime(it.createTime);
	                if(!it.name)
	                {
	                    it.name = "未完善个人信息";
	                }
	            }
	            $scope.listdata.totalPages = data.totalPages;
	            $scope.listdata.userList = data.userList;
	            $scope.$apply();
	            $scope.showPages();
	        });
	    };

	    $scope.onListItemClick = function($event)
	    {
	        var index = $($event.target).attr("index");
	        if(index)
	        {
	            // 保持状态
	            $rootScope.cacheInactiveUserList = $scope.listdata;

	            var user = $scope.listdata.userList[index];
	            $location.url("/user_active?userId=" + user.userId + "&account=" + user.username);
	        }
	    };

	    $scope.showPages = function()
	    {
	        if($scope.listdata.totalPages > 0)
	        {
	            var options = {
	                currentPage: $scope.listdata.pageNo,
	                totalPages: $scope.listdata.totalPages,
	                onPageChanged: function(event, oldPage, newPage)
	                {
	                    if($scope.listdata.pageNo !== newPage)
	                    {
	                        $scope.listdata.pageNo = newPage;
	                        $scope.getData();
	                    }
	                }
	            };
	            $(".pagination").bootstrapPaginator(options);
	        }
	    };

	    if($rootScope.cacheInactiveUserList)
	    {
	        $scope.listdata = $rootScope.cacheInactiveUserList;
	        $scope.showPages();
	        $rootScope.cacheInactiveUserList = null;
	    }
	    else
	    {
	        $scope.getData();
	    }
	});

/***/ })
/******/ ]);