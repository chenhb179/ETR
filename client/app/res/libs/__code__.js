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
	module.exports = __webpack_require__(34);


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
	    var routeList = ([{"url":"active_list.html","route":"/active_list","template":"<style>\n    .app-list {\n        position: fixed;\n        left: 0px;\n        right: 0px;\n        bottom: 0px;\n        background-color: #f0f0f0;\n        top: 50px;\n        overflow-y: auto;\n        padding-bottom: 8px;\n    }\n\n    .app-list > div {\n        padding: 8px 8px 0px 8px;\n    }\n\n    .app-list > div > div {\n        border-radius: 4px;\n        background-color: #ffffff;\n        border: 1px solid #eaeaea;\n        height: 80px;\n        box-shadow: 1px 1px 5px #eaeaea;\n        position: relative;\n    }\n</style>\n\n<div ng-controller=\"active_list\">\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n        <div>直推会员</div>\n    </div>\n\n    <div class=\"app-list\">\n        <div ng-repeat=\"it in listdata.userList\">\n            <div>\n                <div style=\"position: absolute; left: 0px; top: 0px; width: 80px; height: 100%;padding: 14px;\">\n                    <img src=\"drawable/icon_user_default.png\" style=\"width: 100%\">\n                </div>\n                <div style=\"position: absolute;left: 80px; top: 0px; right: 0px; height: 100%; padding: 14px 14px 14px 0px;line-height: 26px;\">\n                    <div>{{it.name}}</div>\n                    <div>{{it.mobile}}</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"},{"url":"active.html","route":"/active","template":"<style>\n    form {\n        padding: 14px;\n        text-align: center;\n    }\n\n    form > div {\n        line-height: 40px;\n        margin-top: 8px;\n        height: 40px;\n    }\n\n    input {\n        width: 100%;\n        height: 32px;\n        background-color: #eeeeee;\n        border: none;\n        padding: 0px 14px 0px 14px;\n    }\n\n    select {\n        width: 100%;\n        height: 32px;\n        background-color: #eeeeee;\n        border: none;\n        padding: 0px 14px 0px 14px;\n    }\n</style>\n\n<div>\n    <div style=\"line-height: 40px; color: #ffffff; text-align: center; background-color: #3A8FFF; border-radius: 5px 5px 0px 0px; font-size: 16px;\">激活会员</div>\n    <form name=\"form\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n        <div>\n            <div class=\"col-xs-4\">放置位置</div>\n            <div class=\"col-xs-8\">\n                <input ng-model=\"formdata.parentAccount\" placeholder=\"请填写放置位置\" required>\n            </div>\n        </div>\n        <div>\n            <div class=\"col-xs-4\" style=\"padding: 0px;\">放置节点</div>\n            <div class=\"col-xs-8\" style=\"padding: 0px;\">\n                <select ng-model=\"formdata.isLeft\" ng-init=\"formdata.isLeft='1'\" required>\n                    <option value=\"1\">左边</option>\n                    <option value=\"0\">右边</option>\n                </select>\n            </div>\n        </div>\n        <div>\n            <div class=\"col-xs-4\">会员等级</div>\n            <div class=\"col-xs-8\">\n                <select ng-model=\"formdata.levelCard\" ng-init=\"formdata.levelCard='1'\" required>\n                    <option value=\"1\">普通卡</option>\n                    <option value=\"2\">金卡</option>\n                    <option value=\"3\">白金卡</option>\n                    <!--<option value=\"4\">钻石卡</option>\n                    <option value=\"5\">黑钻卡</option>-->\n                </select>\n            </div>\n        </div>\n        <button type=\"submit\" ng-disabled=\"form.$invalid\" class=\"btn btn-success\" style=\"margin-top: 14px;\">立即激活</button>\n    </form>\n</div>"},{"url":"buy_list.html","route":"/buy_list","template":"<style>\n    .app-list-tab {\n        background-color: #ffffff;\n        line-height: 50px;\n        border-bottom: #dcdcdc;\n        position: fixed;\n        left: 0px;\n        top: 50px;\n        text-align: center;\n        right: 0px;\n        z-index: 100;\n    }\n\n    .app-list-tab > div {\n        display: inline-block;\n        border: 1px solid #3A8FFF;\n        background-color: #3A8FFF;\n        width: 130px;\n        line-height: 28px;\n        color: #ffffff;\n        font-size: 14px;\n        text-align: center;\n        border-radius: 20px;\n        position: relative;\n    }\n\n    .app-list {\n        position: fixed;\n        left: 0px;\n        right: 0px;\n        bottom: 0px;\n        background-color: #f0f0f0;\n        top: 100px;\n        overflow-y: auto;\n        padding-bottom: 8px;\n    }\n\n    .app-list > div {\n        padding: 8px 8px 0px 8px;\n    }\n\n    .app-list > div > div {\n        border-radius: 4px;\n        background-color: #ffffff;\n        border: 1px solid #eaeaea;\n        box-shadow: 1px 1px 5px #eaeaea;\n    }\n\n    .app-list > div > div:active {\n        background-color: #f1f1f1;\n    }\n</style>\n\n<div ng-controller=\"buy_list\">\n\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n        <div>充值记录</div>\n    </div>\n\n    <div ng-click=\"tab()\" ng-show=\"isFinish\" class=\"app-list-tab\">\n        <div style=\"background-color: #ffffff; color: #3A8FFF;right: -20px;z-index: 10\">未完成</div>\n        <div style=\"left: -20px;z-index: 100\">已完成</div>\n    </div>\n    <div ng-click=\"tab()\" ng-show=\"!isFinish\" class=\"app-list-tab\">\n        <div style=\"right: -20px;z-index: 100\">未完成</div>\n        <div style=\"background-color: #ffffff; color: #3A8FFF; left: -20px;z-index: 10\">已完成</div>\n    </div>\n\n    <div class=\"app-list\">\n        <div ng-repeat=\"it in listdata.finishOrderList\">\n            <div>\n                <div style=\"line-height: 48px;padding: 0px 14px 0px 14px;\">\n                    <img src=\"drawable/icon_credit_score_buy.png\" style=\"width: 18px;margin-right: 8px;\">\n                    <span>信用分买入记录</span>\n                </div>\n                <div style=\"height: 1px; background-color: #eeeeee;\">&nbsp;</div>\n                <div style=\"line-height: 40px;height: 40px;font-size: 12px;\">\n                    <div class=\"col-xs-4\" style=\"color: gray; text-align: left\">信用分:{{it.pointAmount}}</div>\n                    <div class=\"col-xs-4\" style=\"color: dodgerblue; text-align: center;\">已完成</div>\n                    <div class=\"col-xs-4\" style=\"color: gray;text-align: right\">\n                        <div style=\"line-height: 14px; padding-top: 6px;\">{{it.createTime}}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div ng-repeat=\"it in listdata.notFinishOrderList\">\n            <div>\n                <div style=\"line-height: 48px;padding: 0px 14px 0px 14px;\">\n                    <img src=\"drawable/icon_credit_score_buy.png\" style=\"width: 18px;margin-right: 8px;\">\n                    <span>信用分买入记录</span>\n                </div>\n                <div style=\"height: 1px; background-color: #eeeeee;\">&nbsp;</div>\n                <div style=\"line-height: 40px;height: 40px;font-size: 12px;\">\n                    <div class=\"col-xs-4\" style=\"color: gray; text-align: left\">信用分:{{it.pointAmount}}</div>\n                    <div class=\"col-xs-4\" style=\"color: green; text-align: center;\">待确认收款</div>\n                    <div class=\"col-xs-4\" style=\"color: gray;text-align: right\">\n                        <div style=\"line-height: 14px; padding-top: 6px;\">{{it.createTime}}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"},{"url":"buy_sure.html","route":"/buy_sure","template":"<style>\n\n    .app-body {\n        background-color: #ffffff;\n        position: fixed;\n        left: 0px;\n        right: 0px;\n        top: 50px;\n        bottom: 0px;\n        overflow-y: auto;\n    }\n\n    form {\n        padding: 14px 0px 0px 0px;\n    }\n\n    form > div {\n        border-bottom: 1px solid #e1e1e1;\n        line-height: 40px;\n        height: 44px;\n        background-color: #ffffff;\n        padding: 0px 0px 0px 14px;\n    }\n\n    form input {\n        border: none;\n        width: 100%;\n    }\n\t\n\tform > div >h4{\n\t\tfont-weight:bold;\n\t}\n\t\n\tform > div >img{\n\t\twidth:35%;\n\t}\n</style>\n\n<div ng-controller=\"buy_sure\">\n\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n        <div>收款信息</div>\n    </div>\n\n    <div class=\"app-body\">\n\t\t<div>\n            <div class=\"col-xs-3\" style=\"padding: 0px;\"><h4>二维码充值</h4></div>\n            <div class=\"col-xs-9\" style=\"padding: 0px;width:100%;\">\n                <img src=\"drawable/qrcode_3.png\"/>\n            </div>\n\t\t</div>\n        <form name=\"form\" novalidate>\n\t\t\t<div>\n                <div class=\"col-xs-3\" style=\"padding: 0px;\"><h4>转账充值</h4></div>\n            </div>\n            <div>\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">收款姓名</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <span>邱京君</span>\n                </div>\n            </div>\n            <div>\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">银行开户行</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <span>中国工商银行福建省宁德市东侨支行</span>\n                </div>\n            </div>\n            <div>\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">银行账号</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <span>6222081407000539539</span>\n                </div>\n            </div>\n\t\t\t<div>\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">银行开户行</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <span>中国农业银行福建省福州支行</span>\n                </div>\n            </div>\n            <div>\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">银行账号</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <span>6228480068600507872</span>\n                </div>\n            </div>\n\t\t\t<div>\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">银行开户行</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <span>招商银行福建省福州市东门支行</span>\n                </div>\n            </div>\n            <div>\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">银行账号</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <span>6214866003339887</span>\n                </div>\n            </div>\n        </form>\n\n        <div style=\"padding: 14px;\">\n            <button ng-click=\"buy_sure()\" class=\"btn btn-primary btn-block\">确认充值</button>\n        </div>\n    </div>\n\n</div>"},{"url":"buy.html","route":"/buy","template":"<style>\n    .app-list {\n        position: fixed;\n        left: 0px;\n        right: 0px;\n        bottom: 0px;\n        background-color: #f0f0f0;\n        top: 50px;\n        overflow-y: auto;\n        padding-bottom: 8px;\n    }\n\n    .app-list > div {\n        padding: 8px 8px 0px 8px;\n    }\n\n    .app-list > div > div {\n        border-radius: 4px;\n        background-color: #ffffff;\n        border: 1px solid #eaeaea;\n        box-shadow: 1px 1px 5px #eaeaea;\n    }\n\n    .app-list > div > div:active {\n        background-color: #f1f1f1;\n    }\n</style>\n\n<div ng-controller=\"buy\">\n\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n        <div>充值</div>\n    </div>\n\n    <div class=\"app-list\">\n        <div ng-repeat=\"it in listdata.orderList\">\n            <div>\n                <div style=\"line-height: 48px;padding: 0px 14px 0px 14px;position: relative;\">\n                    <img src=\"drawable/icon_credit_score_buy.png\" style=\"width: 18px;margin-right: 8px;\">\n                    <span>信用分{{it.pointAmount}}</span>\n\t\t\t\t\t<span style=\"padding-left:15px;\">人民币{{it.pointAmount*7}}</span>\n                    <button index=\"{{$index}}\" class=\"btn btn-primary btn-xs\" style=\"border-radius: 20px;position: absolute; right: 14px;top: 14px; width: 60px;\" ng-click=\"buy($index)\">充值</button>\n                </div>\n                <div style=\"height: 1px; background-color: #eeeeee;\">&nbsp;</div>\n                <div style=\"line-height: 40px;height: 40px;font-size: 12px;\">\n                    <div class=\"col-xs-6\" style=\"color: dodgerblue; text-align: left;\" ng-click=\"showSaler($index)\">{{it.username}}</div>\n                    <div class=\"col-xs-6\" style=\"color: gray;text-align: right\">{{it.createTime}}</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"},{"url":"change_list.html","route":"/change_list","template":"<style>\n    .app-list {\n        position: fixed;\n        left: 0px;\n        right: 0px;\n        bottom: 0px;\n        background-color: #f0f0f0;\n        top: 50px;\n        overflow-y: auto;\n        padding-bottom: 8px;\n    }\n\n    .app-list > div {\n        padding: 8px 8px 0px 8px;\n    }\n\n    .app-list > div > div {\n        border-radius: 4px;\n        background-color: #ffffff;\n        border: 1px solid #eaeaea;\n        box-shadow: 1px 1px 5px #eaeaea;\n        position: relative;\n    }\n</style>\n\n<div ng-controller=\"change_list\">\n\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n        <div>变更记录</div>\n    </div>\n\n    <div class=\"app-list\">\n        <div ng-repeat=\"it in listdata.changeList\">\n            <div>\n                <div style=\"line-height: 48px; height: 48px;padding: 0px 14px 0px 14px;\">\n                    <img src=\"drawable/icon_credit_score_changed.png\" style=\"width: 20px;position: relative; bottom: 2px;\">\n                    <span>{{it.descr}}</span>\n                </div>\n                <div style=\"background-color: #cccccc;height: 1px;\">&nbsp;</div>\n                <div style=\"line-height: 34px; height: 34px;padding: 0px 14px 0px 14px; position: relative; color: gray;\">\n                    <span>信用分: {{it.amount}}</span>\n                    <span style=\"position: absolute;right: 14px;\">{{it.createTime}}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"},{"url":"customer.html","route":"/customer","template":"<style>\n    .app-list {\n        position: fixed;\n        left: 0px;\n        right: 0px;\n        bottom: 0px;\n        top: 50px;\n        padding: 14px;\n        overflow-y: auto;\n    }\n</style>\n\n<div ng-controller=\"customer\">\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n        <div>专业客服</div>\n    </div>\n\n    <div class=\"app-list\">\n        <div style=\"width: 60%; margin: auto; border: solid 1px #dddddd;\">\n            <img src=\"drawable/qrcode_1.png\" style=\"width: 100%;\">\n            <div style=\"background-color: #dddddd; line-height: 40px; text-align: center;\">客服微信1</div>\n        </div>\n        <div style=\"width: 60%; margin: auto; border: solid 1px #dddddd;margin-top: 28px;\">\n            <img src=\"drawable/qrcode_2.png\" style=\"width: 100%;\">\n            <div style=\"background-color: #dddddd; line-height: 40px; text-align: center;\">客服微信2</div>\n        </div>\n    </div>\n</div>"},{"url":"dialog_passwd.html","route":"/dialog_passwd","template":"<style>\n    .app-dialog {\n        text-align: center;\n    }\n\n    .app-dialog input {\n        width: 250px;\n        height: 44px;\n        border-radius: 5px;\n        background-color: #eeeeee;\n        padding: 0px 8px 0px 8px;\n        border: none;\n    }\n\n    .app-dialog > div:nth-child(1) {\n        text-align: center;\n        line-height: 50px;\n        font-size: 18px;\n        height: 50px;\n        font-weight: bold;\n        width: 250px;\n        margin: auto;\n        color: #000000;\n    }\n</style>\n\n<div class=\"app-dialog\">\n    <div>输入二次密码</div>\n    <div>\n        <input ng-model=\"passwd\" type=\"password\">\n        <div style=\"line-height: 80px;position: relative;height: 80px;width: 250px;margin: auto;\">\n            <div class=\"col-xs-6\" style=\"padding: 0px 4px 0px 0px;\">\n                <button class=\"btn btn-default\" ng-click=\"cancel()\" style=\"width: 100%;\">取消</button>\n            </div>\n            <div class=\"col-xs-6\" style=\"padding: 0px 0px 0px 4px;\">\n                <button class=\"btn btn-success\" ng-click=\"ok()\" style=\"width: 100%;\">完成</button>\n            </div>\n        </div>\n    </div>\n</div>"},{"url":"feedback.html","route":"/feedback","template":"<style>\n\n    .app-body {\n        background-color: #f1f1f1;\n        position: fixed;\n        left: 0px;\n        right: 0px;\n        padding-top: 14px;\n        top: 50px;\n        bottom: 0px;\n    }\n\n    form {\n        padding: 14px;\n        background-color: #ffffff;\n    }\n\n    form > div {\n        border-bottom: 1px solid #e1e1e1;\n        line-height: 40px;\n        margin-top: 14px;\n        height: 44px;\n    }\n\n    form input {\n        border: none;\n        width: 100%;\n        height: 40px;\n    }\n\n    form textarea {\n        width: 100%;\n        height: 100px;\n        border: none;\n    }\n</style>\n\n<div ng-controller=\"feedback\">\n\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n        <div>留言反馈</div>\n    </div>\n\n    <div class=\"app-body\">\n        <form name=\"form\" novalidate>\n            <div>\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">标题</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <input placeholder=\"填写标题\" ng-model=\"formdata.title\" required/>\n                </div>\n            </div>\n            <div>\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">联系方式</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <input placeholder=\"请留下您的联系方式\" ng-model=\"formdata.contact\" required/>\n                </div>\n            </div>\n            <div style=\"border: none; height: 100px;\">\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">留言内容</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <textarea placeholder=\"请输入反馈内容\" ng-model=\"formdata.content\" required></textarea>\n                </div>\n            </div>\n        </form>\n\n        <div style=\"padding: 14px;\">\n            <button ng-click=\"submitForm(form.$valid)\" ng-disabled=\"form.$invalid\" class=\"btn btn-primary btn-block\">提交</button>\n        </div>\n    </div>\n\n</div>"},{"url":"findpwd.html","route":"/findpwd","template":"<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <title>找回密码</title>\n        <link href=\"libs/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n        <link href=\"style/style.css\" rel=\"stylesheet\">\n        <style>\n            body{\n                background-image: url(\"drawable/bg_find_password.jpg\");\n                background-size: 100%;\n            }\n            form{\n                background-color: #ffffff;\n                border-radius: 10px;\n                box-shadow: 1px 1px 10px #cccccc;\n                border: solid 1px #cccccc;\n            }\n            input{\n                border: none;\n                width: 100%;\n                height: 40px;\n                border-bottom: solid 1px #dcdcdc;\n            }\n        </style>\n\n        <script src=\"libs/angular.min.js\"></script>\n        <script src=\"libs/jquery-3.2.1.min.js\"></script>\n        <script src=\"libs/jquery-md5.js\"></script>\n        <script src=\"libs/juicer-min.js\"></script>\n    </head>\n\n    <body ng-app=\"findpwdApp\" ng-controller=\"findpwd\">\n        <table style=\"width: 100%; height: 100%; position: absolute; left: 0px; right: 0px; top: 0px ;bottom: 0px;\">\n            <tr>\n                <td style=\"padding: 0px 28px 0px 28px;\">\n                    <form name=\"form\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n                        <div style=\"text-align: center; font-size: 18px; color: #3A8FFF;line-height: 48px;\">找回密码</div>\n                        <div style=\"background-color: #98C4FD; height: 1px;\">&nbsp;</div>\n                        <div style=\"padding: 28px;\">\n                            <input name=\"mobile\" ng-model=\"formdata.mobile\" placeholder=\"手机号码\" ng-pattern=\"/^1[3578]{1}\\d{9}\\d?$/\" required>\n                            <div style=\"margin-top: 14px;position: relative;\">\n                                <input ng-model=\"formdata.code\" placeholder=\"验证码\" style=\"width: 120px;\" ng-pattern=\"/^\\d{6}$/\" required>\n                                <button ng-click=\"sendcode(form.mobile.$valid)\" ng-disabled=\"form.mobile.$invalid\" class=\"btn btn-info\" style=\"position: absolute; right: 0px;\">发送验证码</button>\n                            </div>\n                            <input ng-model=\"formdata.passwd\" placeholder=\"设置新密码\" type=\"password\" style=\"margin-top: 14px;\" required>\n                        </div>\n                        <button ng-show=\"form.$invalid\" style=\"background-color: #95BEF3; line-height: 48px; color: #ffffff; font-size: 16px;text-align: center;border-radius: 0px 0px 10px 10px;width: 100%;border: none;\">完成</button>\n                        <button type=\"submit\" ng-show=\"form.$valid\" style=\"background-color: #3A8FFF; line-height: 48px; color: #ffffff; font-size: 16px;text-align: center;border-radius: 0px 0px 10px 10px;width: 100%;border: none;\">完成</button>\n                    </form>\n                </td>\n            </tr>\n        </table>\n    </body>\n</html>\n\n<script src=\"libs/__code__.js\"></script>"},{"url":"game.html","route":"/game","template":"<style>\n    .app-game {\n        background-image: url(\"drawable/bg_game_scene.jpg\");\n        background-size: 100% 100%;\n        position: fixed;\n        left: 0px;\n        top: 0px;\n        right: 0px;\n        bottom: 54px;\n    }\n\n    .app-game-sprite {\n        position: absolute;\n        left: 14px;\n        bottom: 0px;\n    }\n\n    .app-game-sprite > img {\n        width: 25px;\n        margin-right: 20px;\n    }\n\n    .app-game-success {\n        display: none;\n    }\n\n    .app-game-success > div {\n        position: absolute;\n        z-index: 1000;\n        left: 0px;\n        right: 0px;\n        bottom: 0px;\n        top: 0px;\n        width: 100%;\n        height: 100%;\n        background-color: #000000;\n        opacity: 0.6;\n    }\n\n    .app-game-success > table {\n        position: absolute;\n        z-index: 1000;\n        left: 0px;\n        right: 0px;\n        bottom: 0px;\n        top: 0px;\n        width: 100%;\n        height: 100%;\n    }\n\n    .app-game-success-panel {\n        width: 300px;\n        height: 450px;\n        position: relative;\n        margin: auto;\n    }\n\n    .app-game-success-panel > img {\n        width: 300px;\n        height: 450px;\n    }\n\n    .app-game-success-panel > div:nth-child(2) {\n        text-align: center;\n        color: #ffffff;\n        font-size: 18px;\n        position: absolute;\n        top: 130px;\n        left: 0px;\n        right: 0px;\n    }\n\n    .app-game-success-panel > div:nth-child(3) {\n        position: absolute;\n        top: 190px;\n        left: 0px;\n        right: 0px;\n        color: #ffffff;\n        font-size: 14px;\n        text-align: center;\n        line-height: 26px;\n    }\n\n    .app-game-success-panel > div:nth-child(3) > div {\n        width: 100px;\n        text-align: left;\n        margin: auto;\n    }\n\n    .app-game-success-panel > div:nth-child(3) > div > img {\n        width: 20px;\n        height: 20px;\n        padding-bottom: 2px;\n    }\n</style>\n\n<div ng-controller=\"game\">\n    <div class=\"app-game\">\n        <div style=\"position: relative;padding: 20px 10px 0px 10px;\">\n            <div style=\"position: absolute; left: 0px; right: 0px; top: 60px;\">\n                <div style=\"height: 30px;line-height: 20px;background-color: #ffffff; border-radius: 20px;width: 100px;margin: auto;padding-top: 10px;text-align: center;\">\n                    <img src=\"drawable/icon_game_income_rate.png\" style=\"width: 13px;position: relative; bottom: 1px;\">\n                    <span style=\"color: red; font-size: 11px;\">增值率{{split * 100}}%</span>\n                </div>\n            </div>\n\n            <div style=\"background-color: #ffffff;position: absolute;left: 60px; right:60px; top: 34px;height: 40px;line-height: 40px;\">\n                <div style=\"display: inline-block;padding-left: 20px;\">\n                    <img src=\"drawable/icon_game_credit_score.png\" style=\"width: 24px;position: relative; bottom: 2px;\">\n                    <span style=\"color: #749DEA\">{{userinfo.points}}</span>\n                </div>\n\n                <div style=\"display: inline-block;position: absolute; right: 0px;padding-right: 20px;\">\n                    <img src=\"drawable/icon_game_crash.png\" style=\"width: 20px;position: relative; bottom: 2px;\">\n                    <span style=\"color: #749DEA\">{{todayPoint}}</span>\n                </div>\n            </div>\n\n            <img src=\"drawable/icon_user_default.png\" style=\"width: 62px;position: absolute; left: 13px;top: 23px;border: solid 2px #ffffff; border-radius: 62px;\">\n\n            <div style=\"width: 62px;height: 62px;position: absolute; right: 12px;top: 23px;background-color: #AB3CDE; border-radius: 62px;text-align: center;line-height: 62px;\">\n                <img src=\"drawable/btn_game_ranking.png\" style=\"width:40px;height: 40px;position: relative;left: 5px;top: 4px;\">\n            </div>\n\n        </div>\n\n        <div class=\"app-game-sprite\">\n            <img src=\"drawable/img_game_sprite1.png\">\n            <img src=\"drawable/img_game_sprite2.png\">\n            <img src=\"drawable/img_game_sprite3.png\">\n        </div>\n\n        <img ng-click=\"brush()\" src=\"drawable/btn_credit_card.png\" style=\"width: 84px;position: absolute; right: 8px; bottom: 24%;\">\n\n        <img src=\"{{shop.img}}\" style=\"width: 65%;position: absolute; left: 25%; bottom: 28%;\">\n\n        <!--刷卡成功-->\n        <div class=\"app-game-success\">\n            <div>&nbsp;</div>\n            <table>\n                <tr>\n                    <td>\n                        <div class=\"app-game-success-panel\">\n                            <img src=\"drawable/bg_credit_success.png\">\n                            <div>刷卡成功!</div>\n                            <div>\n                                <div>\n                                    <img src=\"drawable/icon_game_credit_score_increase.png\">\n                                    <span>+{{brushInfo.points}}</span>\n                                </div>\n                                <div style=\"display: none;\">\n                                    <img src=\"drawable/icon_game_crash_increase.png\">\n                                    <span>+{{brushInfo.points}}</span>\n                                </div>\n                                <div>\n                                    <img src=\"drawable/icon_game_shop_update.png\">\n                                    <span>店铺更新</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div style=\"text-align: center;\">\n                            <img ng-click=\"brushSuccessClose()\" src=\"drawable/btn_close_success.png\" style=\"width: 40px;\">\n                        </div>\n                    </td>\n                </tr>\n            </table>\n        </div>\n    </div>\n\n    <div class=\"app-tab\">\n        <div class=\"col-xs-3\" style=\"background-color: #75B1FF;\">\n            <a href=\"#/game\">\n                <img src=\"drawable/icon_com_game.png\">\n            </a>\n        </div>\n        <div class=\"col-xs-3\">\n            <a href=\"#/maintab1\">\n                <img src=\"drawable/icon_com_trasaction.png\">\n            </a>\n        </div>\n        <div class=\"col-xs-3\">\n            <a href=\"#/maintab3\">\n                <img src=\"drawable/icon_com_credit.png\">\n            </a>\n        </div>\n        <div class=\"col-xs-3\">\n            <a href=\"#/maintab4\">\n                <img src=\"drawable/icon_com_member.png\">\n            </a>\n        </div>\n    </div>\n\n    <audio id=\"bgmusic\">\n        <source src=\"sound/sound_crash_card.mp3\" type=\"audio/mp3\">\n        <source src=\"sound/sound_crash_card.ogg\" type=\"audio/ogg\">\n    </audio>\n</div>"},{"url":"inactive_list.html","route":"/inactive_list","template":"<style>\n    .app-list {\n        position: fixed;\n        left: 0px;\n        right: 0px;\n        bottom: 0px;\n        background-color: #f0f0f0;\n        top: 50px;\n        overflow-y: auto;\n        padding-bottom: 8px;\n    }\n\n    .app-list > div {\n        padding: 8px 8px 0px 8px;\n    }\n\n    .app-list > div > div {\n        border-radius: 4px;\n        background-color: #ffffff;\n        border: 1px solid #eaeaea;\n        height: 80px;\n        box-shadow: 1px 1px 5px #eaeaea;\n        position: relative;\n    }\n</style>\n\n<div ng-controller=\"inactive_list\">\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n        <div>待激活会员</div>\n    </div>\n\n    <div class=\"app-list\">\n        <div ng-repeat=\"it in listdata.userList\" ng-click=\"onListItemClick($event)\">\n            <div>\n                <div style=\"position: absolute; left: 0px; top: 0px; width: 80px; height: 100%;padding: 14px;\">\n                    <img src=\"drawable/icon_user_default.png\" style=\"width: 100%\">\n                </div>\n                <div style=\"position: absolute;left: 80px; top: 0px; right: 0px; height: 100%; padding: 14px 14px 14px 0px;line-height: 26px;\">\n                    <div>{{it.name}}</div>\n                    <div>\n                        <span>{{it.mobile}}</span>\n                        <button index=\"{{$index}}\" class=\"btn btn-xs btn-primary\" style=\"border-radius: 10px; width: 60px;position: absolute; right: 14px;\">去激活</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"},{"url":"main.html","route":"/main","template":"<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <title>ETR国际信用社区</title>\n\n        <link href=\"libs/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n        <link href=\"libs/jquery.jorgchart/jquery.jOrgChart.css\" rel=\"stylesheet\">\n        <link href=\"style/style.css\" rel=\"stylesheet\">\n\n        <script src=\"libs/angular.min.js\"></script>\n        <script src=\"libs/angular-route.js\"></script>\n        <script src=\"libs/ui-bootstrap-tpls-2.5.0.min.js\"></script>\n\n        <script src=\"libs/jquery-3.2.1.min.js\"></script>\n        <script src=\"libs/bootstrap/js/bootstrap.min.js\"></script>\n        <script src=\"libs/bootstrap-paginator.min.js\"></script>\n        <script src=\"libs/jquery.jorgchart/jquery.jOrgChart.js\"></script>\n        <script src=\"libs/juicer-min.js\"></script>\n        <script src=\"libs/qrcode.min.js\"></script>\n        <script src=\"libs/aliyun-oss-sdk.min.js\"></script>\n\n        <script src=\"libs/jquery-md5.js\"></script>\n        <script src=\"libs/jsencrypt.min.js\"></script>\n    </head>\n\n    <body ng-app=\"app\" ng-controller=\"main\" ng-view>\n    </body>\n</html>\n\n<script src=\"libs/__code__.js\"></script>"},{"url":"maintab1.html","route":"/maintab1","template":"<style>\n    .app-tabcontent {\n        background-image: url(\"drawable/bg_transaction.jpg\");\n        background-size: 100% 100%;\n        position: fixed;\n        left: 0px;\n        top: 0px;\n        right: 0px;\n        bottom: 54px;\n    }\n\n    input {\n        background-image: url('drawable/bg_transaction_input.png');\n        background-size: 100% 100%;\n        border: none;\n        padding: 0px 14px 0px 14px;\n        height: 40px;\n        color: #ffffff;\n        width: 100%;\n        background-color: transparent;\n        margin-top: 20px;\n    }\n\n    input::-webkit-input-placeholder {\n        color: #ffffff;\n    }\n</style>\n\n<div ng-controller=\"maintab1\">\n    <div class=\"app-tabcontent\">\n        <a href=\"#/notice\">\n            <img src=\"drawable/btn_transaction_news.png\" style=\"width: 20%;position: absolute; right: 10%; bottom: 0px;\">\n        </a>\n        <img ng-click=\"submitForm(form.$valid)\" src=\"drawable/btn_transaction_sell.png\" style=\"width: 18%;position: absolute; right: 35%; bottom: 20%;\">\n        <a href=\"#/sell_list\" style=\"display:none;\">\n            <img src=\"drawable/btn_transaction_selled.png\" style=\"width: 20%;position: absolute; left: 21%; bottom: 30%;\">\n        </a>\n        <a href=\"#/buy\">\n            <img src=\"drawable/btn_transaction_buy.png\" style=\"width: 20%;position: absolute; left: 21%; bottom: 20%;\">\n        </a>\n\n        <form style=\"position: absolute; top: 25%; left: 25%; right: 25%;\" name=\"form\" novalidate>\n            <div style=\"color: #ffffff; text-align: center;\">当前可出售信用分:{{user.points}}</div>\n            <input ng-model=\"formdata.pointAmountTmp\" placeholder=\"出售信用分(单位20)\" ng-pattern=\"/^\\d*$/\" required>\n            <input ng-model=\"formdata.operatePasswd\" placeholder=\"二次密码\" type=\"password\" required>\n        </form>\n    </div>\n\n    <div class=\"app-tab\">\n        <div class=\"col-xs-3\">\n            <a href=\"#/game\">\n                <img src=\"drawable/icon_com_game.png\">\n            </a>\n        </div>\n        <div class=\"col-xs-3\" style=\"background-color: #75B1FF;\">\n            <a href=\"#/maintab1\">\n                <img src=\"drawable/icon_com_trasaction.png\">\n            </a>\n        </div>\n        <div class=\"col-xs-3\">\n            <a href=\"#/maintab3\">\n                <img src=\"drawable/icon_com_credit.png\">\n            </a>\n        </div>\n        <div class=\"col-xs-3\">\n            <a href=\"#/maintab4\">\n                <img src=\"drawable/icon_com_member.png\">\n            </a>\n        </div>\n    </div>\n</div>"},{"url":"maintab3.html","route":"/maintab3","template":"<style>\n    .app-header {\n        background-color: #3A8FFF;\n        position: fixed;\n        left: 0px;\n        top: 0px;\n        right: 0px;\n        height: 20%;\n        text-align: center;\n        padding-top: 9%;\n    }\n\n    .app-tabcontent {\n        background-image: url(\"drawable/bg_credit_score.png\");\n        background-size: 100% 100%;\n        position: fixed;\n        left: 0px;\n        top: 9%;\n        right: 0px;\n        bottom: 54px;\n        padding: 20% 5% 0% 5%;\n    }\n\n    .app-tabcontent img {\n        width: 90%;\n        margin-bottom: 50%;\n    }\n</style>\n\n<div ng-controller=\"maintab3\">\n    <div class=\"app-header\">\n        <a href=\"#\">\n            <img src=\"drawable/btn_credit_score_news.png\" style=\"width: 30%;height: 68%;\">\n        </a>\n    </div>\n\n    <div class=\"app-tabcontent\">\n        <div class=\"col-xs-4\" style=\"text-align: center;display: none;\">\n            <a href=\"#/transfer_point\">\n                <img src=\"drawable/btn_credit_score_score.png\">\n            </a>\n        </div>\n        <div class=\"col-xs-4\" style=\"text-align: center;\">\n            <a href=\"#/change_list\">\n                <img src=\"drawable/btn_credit_score_changed.png\">\n            </a>\n        </div>\n        <div class=\"col-xs-4\" style=\"text-align: center;\">\n            <a href=\"#/reward_list\">\n                <img src=\"drawable/btn_credit_score_recommend.png\">\n            </a>\n        </div>\n        <div class=\"col-xs-4\" style=\"text-align: center;\">\n            <a href=\"#/sell_list\">\n                <img src=\"drawable/btn_credit_score_sell.png\">\n            </a>\n        </div>\n        <div class=\"col-xs-4\" style=\"text-align: center;\">\n            <a href=\"#/buy_list\">\n                <img src=\"drawable/btn_credit_score_buy.png\">\n            </a>\n        </div>\n        <div class=\"col-xs-4\" style=\"text-align: center;display: none;\">\n            <a href=\"#/point_to_jidian\">\n                <img src=\"drawable/btn_credit_score_to_point.png\">\n            </a>\n        </div>\n        <div class=\"col-xs-4\" style=\"text-align: center;display: none;\">\n            <a href=\"#/transfer_jidian\">\n                <img src=\"drawable/btn_credit_score_point.png\">\n            </a>\n        </div>\n    </div>\n\n    <div class=\"app-tab\">\n        <div class=\"col-xs-3\">\n            <a href=\"#/game\">\n                <img src=\"drawable/icon_com_game.png\">\n            </a>\n        </div>\n        <div class=\"col-xs-3\">\n            <a href=\"#/maintab1\">\n                <img src=\"drawable/icon_com_trasaction.png\">\n            </a>\n        </div>\n        <div class=\"col-xs-3\" style=\"background-color: #75B1FF;\">\n            <a href=\"#/maintab3\">\n                <img src=\"drawable/icon_com_credit.png\">\n            </a>\n        </div>\n        <div class=\"col-xs-3\">\n            <a href=\"#/maintab4\">\n                <img src=\"drawable/icon_com_member.png\">\n            </a>\n        </div>\n    </div>\n</div>"},{"url":"maintab4.html","route":"/maintab4","template":"<style>\n    .app-tabcontent {\n        position: fixed;\n        left: 0px;\n        top: 0px;\n        right: 0px;\n        bottom: 54px;\n        background-color: #ffffff;\n    }\n\n    .app-button {\n        text-align: center;\n        padding: 15% 3% 0 3%;\n    }\n\n    .app-button img {\n        width: 76%;\n        margin-bottom: 2%;\n    }\n\n    .app-button > a > div > div {\n        text-align: center;\n        font-size: 14px;\n        margin-bottom: 20%;\n    }\n</style>\n\n<div ng-controller=\"maintab4\">\n    <div class=\"app-tabcontent\">\n        <div style=\"background-image: url('drawable/bg_usercenter_top.png'); background-size: 100% 100%; height: 180px;\">\n            <div style=\"position: relative;padding: 0px 14px 0px 14px; background-color: #000000;\">\n                <a href=\"#/notice\" style=\"color: #ffffff;position: absolute; top: 14px;\">公告</a>\n                <a href=\"signin.html\">\n                    <img src=\"drawable/btn_usercenter_loginout.png\" style=\"position: absolute;width: 16px; height: 16px;top: 16px;right: 14px;\">\n                </a>\n            </div>\n            <div style=\"text-align: center; padding-top: 20px;\">\n                <a href=\"#/updateinfo\">\n                    <img src=\"drawable/icon_user_default.png\" style=\"width: 70px; height: 70px;border: solid 2px #ffffff; border-radius: 70px;\"/>\n                </a>\n                <table style=\"color: #ffffff; margin-top: 8px;font-size: 14px;line-height: 18px; width: 100%;\">\n                    <tr>\n                        <td style=\"width: 35%; text-align: left;padding-left: 14px;\">信用分:{{user.points}}</td>\n                        <td style=\"width: 30%;text-align: center;\">{{user.username}}</td>\n                        <td style=\"width: 35%; text-align: right;padding-right: 14px;display: none;\">绩点:{{user.jidian}}</td>\n                    </tr>\n                    <tr>\n                        <td style=\"text-align: left;padding-left: 14px;\">购物积分:{{user.shopPoints}}</td>\n                        <td style=\"text-align: center;\">{{user.level}}</td>\n                        <td style=\"text-align: right;padding-right: 14px;\">股权积分:{{user.reinvestPoints}}</td>\n                    </tr>\n                </table>\n                <a href=\"#/upgrade\">\n                    <img src=\"drawable/btn_usercenter_upgrade.png\" style=\"width: 90px;margin-top: 8px;\">\n                </a>\n            </div>\n            <div class=\"app-button\">\n                <a href=\"#/org\">\n                    <div class=\"col-xs-4\">\n                        <img src=\"drawable/btn_usercenter_team.png\">\n                        <div>团队组织</div>\n                    </div>\n                </a>\n                <a href=\"#/active_list\" style=\"display: none;\">\n                    <div class=\"col-xs-4\">\n                        <img src=\"drawable/btn_usercenter_recommend.png\">\n                        <div>直推会员</div>\n                    </div>\n                </a>\n                <a href=\"#/inactive_list\">\n                    <div class=\"col-xs-4\">\n                        <img src=\"drawable/btn_usercenter_unactive.png\">\n                        <div>待激活会员</div>\n                    </div>\n                </a>\n                <a href=\"#/updatepwd\">\n                    <div class=\"col-xs-4\">\n                        <img src=\"drawable/btn_usercenter_change_pw.png\">\n                        <div>安全管理</div>\n                    </div>\n                </a>\n                <a href=\"#/quicksignup\" style=\"display: none;\">\n                    <div class=\"col-xs-4\">\n                        <img src=\"drawable/btn_usercenter_vip_login.png\">\n                        <div>会员注册</div>\n                    </div>\n                </a>\n                <a href=\"#/feedback\">\n                    <div class=\"col-xs-4\">\n                        <img src=\"drawable/btn_usercenter_feedback.png\">\n                        <div>留言反馈</div>\n                    </div>\n                </a>\n                <a href=\"#/customer\">\n                    <div class=\"col-xs-4\">\n                        <img src=\"drawable/btn_usercenter_service.png\">\n                        <div>专业客服</div>\n                    </div>\n                </a>\n                <a href=\"#/qrcode\">\n                    <div class=\"col-xs-4\">\n                        <img src=\"drawable/btn_usercenter_qrcode.png\">\n                        <div>推广二维码</div>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"app-tab\">\n        <div class=\"col-xs-3\">\n            <a href=\"#/game\">\n                <img src=\"drawable/icon_com_game.png\">\n            </a>\n        </div>\n        <div class=\"col-xs-3\">\n            <a href=\"#/maintab1\">\n                <img src=\"drawable/icon_com_trasaction.png\">\n            </a>\n        </div>\n        <div class=\"col-xs-3\">\n            <a href=\"#/maintab3\">\n                <img src=\"drawable/icon_com_credit.png\">\n            </a>\n        </div>\n        <div class=\"col-xs-3\" style=\"background-color: #75B1FF;\">\n            <a href=\"#/maintab4\">\n                <img src=\"drawable/icon_com_member.png\">\n            </a>\n        </div>\n    </div>\n</div>"},{"url":"maintain.html","route":"/maintain","template":"<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <title>信用社区-维护</title>\n    </head>\n\n    <body style=\"background-color: #3A8FFF;\">\n        <table style=\"width: 100%; height: 100%;position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px;\">\n            <tr>\n                <td style=\"width: 100%; height: 100%;text-align: center;\">\n                    <img src=\"drawable/img_system_maintenance.png\" style=\"width: 80%\" >\n                    <div style=\"color: #FFA606; font-size: 24px;\">系统维护中...</div>\n                </td>\n            </tr>\n        </table>\n    </body>\n</html>"},{"url":"notice_info.html","route":"/notice_info","template":"<style>\n    .app-list {\n        position: fixed;\n        left: 0px;\n        right: 0px;\n        bottom: 0px;\n        top: 50px;\n        padding: 14px;\n    }\n</style>\n\n<div ng-controller=\"notice_info\">\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n        <div>最新公告</div>\n    </div>\n\n    <div class=\"app-list\">\n        <div style=\"font-size: 18px;\">{{notice.title}}</div>\n        <div style=\"color: gray; font-size: 13px;margin-top: 14px;\">{{notice.type}}&nbsp;&nbsp;&nbsp;{{notice.createTime}}</div>\n        <div style=\"margin-top: 14px; font-size: 14px;\">{{notice.content}}</div>\n    </div>\n</div>"},{"url":"notice.html","route":"/notice","template":"<style>\n    .app-list {\n        position: fixed;\n        left: 0px;\n        right: 0px;\n        bottom: 0px;\n        top: 50px;\n    }\n\n    .app-list > div {\n        border-bottom: solid 1px #eeeeee;\n        position: relative;\n        height: 60px;\n        line-height: 60px;\n    }\n\n    .app-list > div:active {\n        background-color: #f1f1f1;\n    }\n\n    .app-list > div > img {\n        width: 36px;\n        margin-left: 14px;\n        height: 36px;\n    }\n\n    .app-list > div > div {\n        position: absolute;\n        left: 64px;\n        top: 0px;\n        right: 14px;\n        bottom: 0px;\n        line-height: 60px;\n    }\n</style>\n\n<div ng-controller=\"notice\">\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n        <div>最新公告</div>\n    </div>\n\n    <div class=\"app-list\" ng-click=\"onListItemClick($event)\">\n        <div ng-repeat=\"it in listdata.noticeList\">\n            <img index=\"{{$index}}\" src=\"drawable/icon_news.png\">\n            <div index=\"{{$index}}\" class=\"app-singleLine\">{{it.title}}</div>\n        </div>\n    </div>\n</div>"},{"url":"org.html","route":"/org","template":"<style>\n    .app-list {\n        position: fixed;\n        left: 0px;\n        right: 0px;\n        bottom: 0px;\n        background-color: #297CE9;\n        top: 50px;\n        overflow: auto;\n        padding-bottom: 8px;\n        padding-top: 50px;\n    }\n\n    .jOrgChart {\n        margin: 10px;\n        padding: 0px;\n    }\n\n    .jOrgChart .node {\n        font-size: 12px;\n        height: 42px;\n        background-color: transparent;\n    }\n\n    .member {\n        position: relative;\n    }\n\n    .member > div {\n        background-color: #ffffff;\n        border-radius: 20px;\n        width: 100px;\n        height: 34px;\n        position: absolute;\n        left: 20px;\n        top: 5px;\n        padding-left: 25px;\n        line-height: 16px;\n        text-align: left;\n    }\n\n    .member > img {\n        width: 42px;\n        height: 42px;\n        position: absolute;\n        left: 0px;\n        top: 0px;\n    }\n\n    .member > div > div {\n        width: 70px;\n        font-size: 13px;\n    }\n\n    .app-search {\n        position: fixed;\n        z-index: 1000000;\n        left: 50px;\n        right: 50px;\n        top: 60px;\n        height: 36px;\n    }\n\n    .app-search input {\n        border: none;\n        border-radius: 36px;\n        padding-left: 28px;\n        background-color: #ffffff;\n        height: 36px;\n        width: 100%;\n    }\n</style>\n\n<div ng-controller=\"org\">\n\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n        <div>团队组织</div>\n    </div>\n\n    <div class=\"app-list\">\n        <ul id=\"org\" style=\"display:none\"></ul>\n        <div id=\"chart\" class=\"orgChart\"></div>\n    </div>\n\n    <form name=\"form\" class=\"app-search\" novalidate>\n        <input ng-model=\"filterAccount\" placeholder=\"输入搜索内容\" required>\n        <img ng-click=\"filter(form.$valid)\" src=\"drawable/btn_team_search.png\" style=\"height: 34px;position: absolute; right: 1px; top: 1px;\">\n    </form>\n\n</div>"},{"url":"point_to_jidian.html","route":"/point_to_jidian","template":"<style>\n    .app-form {\n        width: 80%;\n        margin: auto;\n        background-color: #ffffff;\n        border: 1px solid #cccccc;\n        border-radius: 10px;\n        box-shadow: 1px 1px 10px #cccccc;\n        margin-top: -60px;\n        padding: 20px 28px 20px 28px;\n        color: #999999;\n    }\n\n    .app-form input {\n        border: none;\n        border-bottom: 1px solid #dcdcdc;\n        height: 30px;\n        margin-bottom: 14px;\n        width: 100%;\n    }\n</style>\n\n<div ng-controller=\"point_to_jidian\">\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n    </div>\n    <div>\n        <div style=\"background-color: #3A8FFF; text-align: center; padding-top: 50px;color: #ffffff;\">\n            <img src=\"drawable/icon_credit_to_point.png\" style=\"width: 90px;\">\n            <div style=\"font-size: 14px;\">信用分转绩点</div>\n            <div style=\"height: 1px; background-color: #ffffff; margin: 14px;\">&nbsp;</div>\n            <div style=\"text-align: left;padding: 0px 0px 70px 42px;\">当前信用分:{{points}}</div>\n        </div>\n\n        <form class=\"app-form\" name=\"form\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n            <div>\n                <div>转出积分</div>\n                <input ng-model=\"formdata.points\" ng-pattern=\"/^\\d*$/\" placeholder=\"输入数量\" required/>\n            </div>\n            <div>\n                <div>二级密码</div>\n                <input ng-model=\"formdata.operatePasswd1\" placeholder=\"输入二级密码\" type=\"password\" required/>\n            </div>\n            <div>\n                <button class=\"btn btn-primary btn-block\" type=\"submit\" ng-disabled=\"form.$invalid\">确认转出</button>\n            </div>\n        </form>\n    </div>\n</div>"},{"url":"qrcode.html","route":"/qrcode","template":"<style>\n</style>\n\n<div ng-controller=\"qrcode\">\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n        <div>我的推广二维码</div>\n    </div>\n\n    <div style=\"background-color: #ffffff; padding: 90px 0px 28px 0px;text-align: center;\">\n        <div id=\"qrcode\" style=\"width: 150px; height: 150px; margin: auto;\"></div>\n    </div>\n</div>"},{"url":"quicksignup.html","route":"/quicksignup","template":"<style>\n\n    .app-body {\n        background-color: #f1f1f1;\n        position: fixed;\n        left: 0px;\n        right: 0px;\n        padding-top: 14px;\n        top: 50px;\n        bottom: 0px;\n\t\toverflow:scroll;\n    }\n\n    form {\n        padding: 14px;\n        background-color: #ffffff;\n    }\n\n    form > div {\n        border-bottom: 1px solid #cccccc;\n        line-height: 40px;\n        margin-top: 14px;\n        height: 44px;\n    }\n\n    form input {\n        border: none;\n        width: 100%;\n        height: 40px;\n    }\n\n    form select {\n        border: none;\n        height: 30px;\n        background-color: #ffffff;\n        width: 100%;\n    }\n</style>\n\n<div ng-controller=\"quicksignup\">\n\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n        <div>会员注册</div>\n    </div>\n\n    <div class=\"app-body\">\n        <form class=\"app-form\" name=\"form\" novalidate>\n            <div>\n                <div class=\"col-xs-4\" style=\"padding: 0px;\">用户名</div>\n                <div class=\"col-xs-8\" style=\"padding: 0px;\">\n                    <input placeholder=\"填写用户名\" ng-model=\"formdata.username\" required/>\n                </div>\n            </div>\n            <div>\n                <div class=\"col-xs-4\" style=\"padding: 0px;\">推荐人</div>\n                <div class=\"col-xs-8\" style=\"padding: 0px;\">\n                    <input placeholder=\"请输入推荐人\" ng-model=\"formdata.inviterAccount\" required/>\n                </div>\n            </div>\n            <div ng-show=\"formdata.signupType==1\">\n                <div class=\"col-xs-4\" style=\"padding: 0px;\">手机号码</div>\n                <div class=\"col-xs-8\" style=\"padding: 0px;\">\n                    <input placeholder=\"请输入有效手机号码\" ng-model=\"formdata.mobile\" ng-pattern=\"/^1[3578]{1}\\d{9}\\d?$/\"/>\n                </div>\n            </div>\n\t\t\t<div>\n                <div class=\"col-xs-4\" style=\"padding: 0px;\">验证码</div>\n                <div class=\"col-xs-8\" style=\"padding: 0px;\">\n                    <input placeholder=\"请输入验证码\" ng-model=\"formdata.code\" style=\"width:45%;\" ng-pattern=\"/^\\d{6}$/\"/>\n\t\t\t\t\t<button ng-click=\"sendcode(form.mobile.$valid)\" ng-disabled=\"form.mobile.$invalid\" class=\"btn btn-warning\">发送验证码</button>\n                </div>\n            </div>\n            <div>\n                <div class=\"col-xs-4\" style=\"padding: 0px;\">放置位置</div>\n                <div class=\"col-xs-8\" style=\"padding: 0px;\">\n                    <input placeholder=\"请输入放置位置\" ng-model=\"formdata.parentAccount\" required/>\n                </div>\n            </div>\n            <div>\n                <div class=\"col-xs-4\" style=\"padding: 0px;\">放置节点</div>\n                <div class=\"col-xs-8\" style=\"padding: 0px;\">\n                    <select ng-model=\"formdata.isLeft\" ng-init=\"formdata.isLeft='1'\" required>\n                        <option value=\"1\">左边</option>\n                        <option value=\"0\">右边</option>\n                    </select>\n                </div>\n            </div>\n            <div>\n                <div class=\"col-xs-4\" style=\"padding: 0px;\">会员等级</div>\n                <div class=\"col-xs-8\" style=\"padding: 0px;\">\n                    <select ng-model=\"formdata.levelCard\" ng-init=\"formdata.levelCard='1'\" required>\n                        <option value=\"1\">普通卡</option>\n                        <option value=\"2\">金卡</option>\n                        <option value=\"3\">白金卡</option>\n                        <!--<option value=\"4\">钻石卡</option>-->\n                        <!--<option value=\"5\">黑钻卡</option>-->\n                    </select>\n                </div>\n            </div>\n            <div style=\"border: none;\">\n                <div class=\"col-xs-4\" style=\"padding: 0px;\">币种选择</div>\n                <div class=\"col-xs-8\" style=\"padding: 0px;\">\n                    <select ng-model=\"formdata.signupType\" ng-init=\"formdata.signupType='1'\" required>\n                        <option value=\"1\">信用分</option>\n                        <!--<option value=\"2\">复投币</option>-->\n                    </select>\n                </div>\n            </div>\n        </form>\n\n        <div style=\"padding: 14px;\">\n            <button ng-click=\"submitForm(form.$valid)\" ng-disabled=\"form.$invalid\" class=\"btn btn-primary btn-block btn-lg\">提交注册</button>\n        </div>\n    </div>\n\n</div>"},{"url":"reward_list.html","route":"/reward_list","template":"<style>\n    .app-list-tab {\n        background-color: #ffffff;\n        line-height: 44px;\n        border-bottom: #dcdcdc;\n        position: fixed;\n        left: 0px;\n        top: 50px;\n        text-align: center;\n        right: 0px;\n        z-index: 100;\n        color: dodgerblue;\n    }\n\n    .app-list-tab-height {\n        border-bottom: 2px solid #3A8FFF;\n    }\n\n    .app-list {\n        position: fixed;\n        left: 0px;\n        right: 0px;\n        bottom: 0px;\n        background-color: #f0f0f0;\n        top: 94px;\n        overflow-y: auto;\n        padding-bottom: 8px;\n    }\n\n    .app-list > div {\n        padding: 8px 8px 0px 8px;\n    }\n\n    .app-list > div > div {\n        border-radius: 4px;\n        background-color: #ffffff;\n        border: 1px solid #eaeaea;\n        box-shadow: 1px 1px 5px #eaeaea;\n        position: relative;\n    }\n</style>\n\n<div ng-controller=\"reward_list\">\n\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n        <div>我的奖励</div>\n    </div>\n\n    <div class=\"app-list-tab\">\n        <div ng-click=\"tab($event)\" ng-class=\"\" class=\"col-xs-3 app-list-tab-height\">分享奖励</div>\n        <div ng-click=\"tab($event)\" class=\"col-xs-3\">平衡奖励</div>\n        <div ng-click=\"tab($event)\" class=\"col-xs-3\">团队津贴</div>\n        <div ng-click=\"tab($event)\" class=\"col-xs-3\">管理津贴</div>\n    </div>\n\n    <div class=\"app-list\">\n        <div ng-repeat=\"it in listdata.rewardList\">\n            <div>\n                <div style=\"line-height: 48px; height: 48px;padding: 0px 14px 0px 14px;\">\n                    <img src=\"drawable/icon_credit_score_changed.png\" style=\"width: 20px;position: relative; bottom: 2px;\">\n                    <span>获得{{it.type}}信用分</span>\n                </div>\n                <div style=\"background-color: #cccccc;height: 1px;\">&nbsp;</div>\n                <div style=\"line-height: 34px; height: 34px;padding: 0px 14px 0px 14px; position: relative; color: gray;\">\n                    <span>信用分: {{it.points}}</span>\n                    <span style=\"position: absolute;right: 14px;\">{{it.createTime}}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"},{"url":"sell_list.html","route":"/sell_list","template":"<style>\n    .app-list-tab {\n        background-color: #ffffff;\n        line-height: 50px;\n        border-bottom: #dcdcdc;\n        position: fixed;\n        left: 0px;\n        top: 50px;\n        text-align: center;\n        right: 0px;\n        z-index: 100;\n    }\n\n    .app-list-tab > div {\n        display: inline-block;\n        border: 1px solid #3A8FFF;\n        background-color: #3A8FFF;\n        width: 130px;\n        line-height: 28px;\n        color: #ffffff;\n        font-size: 14px;\n        text-align: center;\n        border-radius: 20px;\n        position: relative;\n    }\n\n    .app-list {\n        position: fixed;\n        left: 0px;\n        right: 0px;\n        bottom: 0px;\n        top: 100px;\n        overflow-y: auto;\n        background-color: #f0f0f0;\n        padding-bottom: 8px;\n    }\n\n    .app-list > div {\n        padding: 8px 8px 0px 8px;\n    }\n\n    .app-list > div > div {\n        border-radius: 4px;\n        background-color: #ffffff;\n        border: 1px solid #eaeaea;\n        box-shadow: 1px 1px 5px #eaeaea;\n    }\n\n    .app-list > div > div:active {\n        background-color: #f1f1f1;\n    }\n</style>\n\n<div ng-controller=\"sell_list\">\n\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n        <div>提现记录</div>\n    </div>\n\n    <div ng-click=\"tab()\" ng-show=\"isFinish\" class=\"app-list-tab\">\n        <div style=\"background-color: #ffffff; color: #3A8FFF;right: -20px;z-index: 10\">未完成</div>\n        <div style=\"left: -20px;z-index: 100\">已完成</div>\n    </div>\n    <div ng-click=\"tab()\" ng-show=\"!isFinish\" class=\"app-list-tab\">\n        <div style=\"right: -20px;z-index: 100\">未完成</div>\n        <div style=\"background-color: #ffffff; color: #3A8FFF; left: -20px;z-index: 10\">已完成</div>\n    </div>\n\n    <div class=\"app-list\">\n        <div ng-repeat=\"it in listdata.finishOrderList\">\n            <div>\n                <div style=\"line-height: 48px;padding: 0px 14px 0px 14px;\">\n                    <img src=\"drawable/icon_credit_score_sm.png\" style=\"width: 18px;margin-right: 8px;\">\n                    <span>信用分出售记录</span>\n                </div>\n                <div style=\"height: 1px; background-color: #eeeeee;\">&nbsp;</div>\n                <div style=\"line-height: 40px;height: 40px;font-size: 12px;\">\n                    <div class=\"col-xs-4\" style=\"color: gray; text-align: left\">信用分:{{it.pointAmount}}</div>\n                    <div class=\"col-xs-4\" style=\"color: dodgerblue; text-align: center;\">已完成</div>\n                    <div class=\"col-xs-4\" style=\"color: gray;text-align: right\">\n                        <div style=\"line-height: 14px; padding-top: 6px;\">{{it.createTime}}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div ng-repeat=\"it in listdata.notFinishOrderList\" ng-click=\"onListItemClick($event)\">\n            <div>\n                <div style=\"line-height: 48px;padding: 0px 14px 0px 14px;position: relative;\">\n                    <img src=\"drawable/icon_credit_score_sm.png\" style=\"width: 18px;margin-right: 8px;\">\n                    <span>信用分出售记录</span>\n                    <button index=\"{{$index}}\" ng-show=\"it.canConfirm\" class=\"btn btn-primary btn-xs\" style=\"border-radius: 20px;position: absolute; right: 14px;top: 14px;\">确认收款</button>\n                    <button index=\"{{$index}}\" ng-show=\"it.canCancel\" class=\"btn btn-danger btn-xs\" style=\"border-radius: 20px;position: absolute; right: 14px;top: 14px;\">撤销出售</button>\n                </div>\n                <div style=\"height: 1px; background-color: #eeeeee;\">&nbsp;</div>\n                <div style=\"line-height: 40px;height: 40px;font-size: 12px;\">\n                    <div class=\"col-xs-4\" style=\"color: gray; text-align: left\">信用分:{{it.pointAmount}}</div>\n                    <div class=\"col-xs-4\" style=\"color: green; text-align: center;\">{{it.status}}</div>\n                    <div class=\"col-xs-4\" style=\"color: gray;text-align: right\">\n                        <div style=\"line-height: 14px; padding-top: 6px;\">{{it.createTime}}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"},{"url":"signin.html","route":"/signin","template":"<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <title>登录</title>\n        <link href=\"libs/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n        <link href=\"style/style.css\" rel=\"stylesheet\">\n\n        <style>\n            body{\n                background-image: url(\"drawable/bg_login.jpg\");\n                background-size: 100%;\n            }\n            form{\n                position: absolute;\n                bottom: 36px;\n                left:36px;\n                right:36px;\n            }\n            .app-form-panel{\n                background-color: #ffffff;\n                border-radius: 10px;\n                border: 1px solid #cccccc;\n                padding: 14px;\n                box-shadow: 1px 1px 10px #cccccc;\n            }\n            input{\n                border: none;\n                width: 100%;\n                height: 30px;\n            }\n        </style>\n\n        <script src=\"libs/angular.min.js\"></script>\n        <script src=\"libs/jquery-3.2.1.min.js\"></script>\n        <script src=\"libs/jquery-md5.js\"></script>\n        <script src=\"libs/juicer-min.js\"></script>\n    </head>\n\n    <body ng-app=\"signinApp\" ng-controller=\"signin\">\n        <form name=\"form\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n            <div class=\"app-form-panel\">\n                <div>\n                    <input ng-model=\"formdata.username\" placeholder=\"用户名\" required>\n                </div>\n                <div style=\"background-color: #dcdcdc;height: 1px;margin: 12px 0px 12px 0px;\">&nbsp;</div>\n                <div>\n                    <input ng-model=\"formdata.passwd\" type=\"password\" placeholder=\"密码\" required>\n                </div>\n            </div>\n            <div style=\"text-align: right;padding: 8px 0px 8px 0px;\">\n                <a href=\"findpwd.html\" style=\"color: #ffffff;\">找回密码</a>\n            </div>\n            <button type=\"submit\" ng-disabled=\"form.$invalid\" class=\"btn btn-block btn-lg btn-warning\" style=\"border-radius: 50px;background-color: #FFEB09;color: #EF7B3E;box-shadow: 1px 1px 10px #cccccc;\">登录</button>\n        </form>\n    </body>\n</html>\n\n<script src=\"libs/__code__.js\"></script>"},{"url":"signup.html","route":"/signup","template":"<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <title>注册</title>\n        <link href=\"libs/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n        <link href=\"style/style.css\" rel=\"stylesheet\">\n\n        <style>\n            body{\n                background-image: url(\"drawable/bg_register.png\");\n                background-size: 100%;\n            }\n            form{\n                padding: 20% 10% 10% 10%;\n            }\n            input{\n                border: none;\n                width: 100%;\n                height: 40px;\n                padding-left: 14px;\n                background-color: #ffffff;\n                border-radius: 8px;\n            }\n        </style>\n\n        <script src=\"libs/angular.min.js\"></script>\n        <script src=\"libs/jquery-3.2.1.min.js\"></script>\n        <script src=\"libs/jquery-md5.js\"></script>\n        <script src=\"libs/juicer-min.js\"></script>\n    </head>\n\n    <body ng-app=\"signupApp\" ng-controller=\"signup\">\n        <div style=\"color: #FFF338; font-size: 18px;line-height: 50px;text-align: center;\">会员注册</div>\n        <form name=\"form\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n            <div>\n                <input ng-model=\"formdata.username\" placeholder=\"用户名\" required>\n            </div>\n            <div style=\"margin-top: 14px;\">\n                <input name=\"mobile\" ng-model=\"formdata.mobile\" placeholder=\"手机号码\" ng-pattern=\"/^1[3578]{1}\\d{9}\\d?$/\" required>\n            </div>\n            <div style=\"margin-top: 14px;position: relative;\">\n                <input ng-model=\"formdata.code\" placeholder=\"验证码\" style=\"width: 150px;\" ng-pattern=\"/^\\d{6}$/\" required>\n                <button ng-click=\"sendcode(form.mobile.$valid)\" ng-disabled=\"form.mobile.$invalid\" class=\"btn btn-warning\" style=\"position: absolute; right: 0px;top: 2px;\">发送验证码</button>\n            </div>\n            <div style=\"margin-top: 28px;\">\n                <button type=\"submit\" ng-disabled=\"form.$invalid\" class=\"btn btn-block btn-lg btn-primary\">完成注册</button>\n            </div>\n        </form>\n        <div style=\"color: #ffffff;padding-left: 42px;\">\n            <div>备注:</div>\n            <div>默认登录密码: 666666</div>\n            <div>默认二级密码: 888888</div>\n        </div>\n    </body>\n</html>\n\n<script src=\"libs/__code__.js\"></script>"},{"url":"transfer_jidian.html","route":"/transfer_jidian","template":"<style>\n    .app-form {\n        width: 80%;\n        margin: auto;\n        background-color: #ffffff;\n        border: 1px solid #cccccc;\n        border-radius: 10px;\n        box-shadow: 1px 1px 10px #cccccc;\n        margin-top: -60px;\n        padding: 20px 28px 20px 28px;\n        color: #999999;\n    }\n\n    .app-form input {\n        border: none;\n        border-bottom: 1px solid #dcdcdc;\n        height: 30px;\n        margin-bottom: 14px;\n        width: 100%;\n    }\n</style>\n\n<div ng-controller=\"transfer_jidian\">\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n    </div>\n    <div>\n        <div style=\"background-color: #3A8FFF; text-align: center; padding-top: 50px;color: #ffffff;\">\n            <img src=\"drawable/icon_credit_transfer.png\" style=\"width: 90px;\">\n            <div style=\"font-size: 14px;\">绩点转让</div>\n            <div style=\"height: 1px; background-color: #ffffff; margin: 14px;\">&nbsp;</div>\n            <div style=\"text-align: left;padding: 0px 0px 70px 42px;\">当前绩点:{{user.jidian}}</div>\n        </div>\n\n        <form class=\"app-form\" name=\"form\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n            <div>\n                <div>转出绩点</div>\n                <input ng-model=\"formdata.amount\" ng-pattern=\"/^\\d*$/\" placeholder=\"输入数量\" required/>\n            </div>\n            <div>\n                <div>转入账户</div>\n                <input ng-model=\"formdata.receiverAccount\" placeholder=\"输入账户名\" required/>\n            </div>\n            <div>\n                <div>二级密码</div>\n                <input ng-model=\"formdata.operatePasswd\" placeholder=\"输入二级密码\" type=\"password\" required/>\n            </div>\n            <div>\n                <button class=\"btn btn-primary btn-block\" type=\"submit\" ng-disabled=\"form.$invalid\">确认转出</button>\n            </div>\n        </form>\n    </div>\n</div>"},{"url":"transfer_list.html","route":"/transfer_list","template":"<style>\n    .app-list {\n        position: fixed;\n        left: 0px;\n        right: 0px;\n        bottom: 0px;\n        background-color: #f0f0f0;\n        top: 50px;\n        overflow-y: auto;\n        padding-bottom: 8px;\n    }\n\n    .app-list > div {\n        padding: 8px 8px 0px 8px;\n    }\n\n    .app-list > div > div {\n        border-radius: 4px;\n        background-color: #ffffff;\n        border: 1px solid #eaeaea;\n        box-shadow: 1px 1px 5px #eaeaea;\n        position: relative;\n        padding: 14px;\n    }\n</style>\n\n<div ng-controller=\"transfer_list\">\n\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n        <div>转让记录</div>\n    </div>\n\n    <div class=\"app-list\">\n        <div ng-repeat=\"it in listdata.transferList\">\n            <div>\n                <img src=\"drawable/icon_user_default.png\" style=\"width: 50px;\">\n                <div style=\"position: absolute; left: 64px; top: 0px; right: 0px; bottom: 0px;line-height: 25px;padding: 14px;\">\n                    <div style=\"position: relative\">\n                        <span>{{it.receiverAccount}}</span>\n                        <span style=\"position: absolute; right: 0px;color: cornflowerblue\">成功</span>\n                    </div>\n                    <div style=\"position: relative\">\n                        <span>转出: {{it.amount}}</span>\n                        <span style=\"position: absolute; right: 0px; color: gray\">{{it.createTime}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"},{"url":"transfer_point.html","route":"/transfer_point","template":"<style>\n    .app-form {\n        width: 80%;\n        margin: auto;\n        background-color: #ffffff;\n        border: 1px solid #cccccc;\n        border-radius: 10px;\n        box-shadow: 1px 1px 10px #cccccc;\n        margin-top: -60px;\n        padding: 20px 28px 20px 28px;\n        color: #999999;\n    }\n\n    .app-form input {\n        border: none;\n        border-bottom: 1px solid #dcdcdc;\n        height: 30px;\n        margin-bottom: 14px;\n        width: 100%;\n    }\n</style>\n\n<div ng-controller=\"transfer_point\">\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n        <a href=\"#/transfer_list\">\n            <div style=\"height: 50px; line-height: 50px; color: #ffffff;position: absolute; right: 0px; top: 0px; width: 50px;text-align: center;\">记录</div>\n        </a>\n    </div>\n    <div>\n        <div style=\"background-color: #3A8FFF; text-align: center; padding-top: 50px;color: #ffffff;\">\n            <img src=\"drawable/icon_credit_transfer.png\" style=\"width: 90px;\">\n            <div style=\"font-size: 14px;\">信用分转让</div>\n            <div style=\"height: 1px; background-color: #ffffff; margin: 14px;\">&nbsp;</div>\n            <div style=\"text-align: left;padding: 0px 0px 70px 42px;\">当前积分:{{user.points}}</div>\n        </div>\n\n        <form class=\"app-form\" name=\"form\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n            <div>\n                <div>转出积分</div>\n                <input ng-model=\"formdata.amount\" ng-pattern=\"/^\\d*$/\" placeholder=\"输入数量\" required/>\n            </div>\n            <div>\n                <div>转入账户</div>\n                <input ng-model=\"formdata.receiverAccount\" placeholder=\"输入账户名\" required/>\n            </div>\n            <div>\n                <div>二级密码</div>\n                <input ng-model=\"formdata.operatePasswd\" placeholder=\"输入二级密码\" type=\"password\" required/>\n            </div>\n            <div>\n                <button class=\"btn btn-primary btn-block\" type=\"submit\" ng-disabled=\"form.$invalid\">确认转出</button>\n            </div>\n        </form>\n    </div>\n</div>"},{"url":"updateinfo.html","route":"/updateinfo","template":"<style>\n\n    .app-body {\n        background-color: #f1f1f1;\n        position: fixed;\n        left: 0px;\n        right: 0px;\n        top: 50px;\n        bottom: 0px;\n        overflow-y: auto;\n    }\n\n    form {\n        padding: 14px 0px 0px 0px;\n    }\n\n    form > div {\n        border-bottom: 1px solid #e1e1e1;\n        line-height: 40px;\n        height: 44px;\n        background-color: #ffffff;\n        padding: 0px 0px 0px 14px;\n    }\n\n    form input {\n        border: none;\n        width: 100%;\n    }\n</style>\n\n<div ng-controller=\"updateinfo\">\n\n    <div class=\"app-actionbar\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n        <div>个人资料</div>\n    </div>\n\n    <div class=\"app-body\">\n        <form name=\"form\" novalidate>\n            <div>\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">用户名</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <span>{{formdata.username}}</span>\n                </div>\n            </div>\n            <div>\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">姓名</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <input id=\"focus1\" placeholder=\"请填写姓名\" ng-model=\"formdata.name\" required/>\n                </div>\n            </div>\n            <div>\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">身份证</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <input placeholder=\"请填写身份证\" ng-model=\"formdata.idcard\" required/>\n                </div>\n            </div>\n\t\t\t<div>\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">手机号</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <span>{{formdata.mobile}}</span>\n                </div>\n            </div>\n            <div>\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">验证码</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <input placeholder=\"请填写验证码\" ng-model=\"formdata.code\" style=\"width:45%;\" required/>\n\t\t\t\t\t<button ng-click=\"sendcode(form.mobile.$valid)\" ng-disabled=\"form.mobile.$invalid\" class=\"btn btn-warning\">发送验证码</button>\n                </div>\n            </div>\n\n            <div style=\"margin-top: 14px;\">\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">银行卡</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <input placeholder=\"请填写银行卡\" ng-model=\"formdata.bankcard\" required/>\n                </div>\n            </div>\n            <div>\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">开户行</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <input placeholder=\"请填写开户行\" ng-model=\"formdata.bankAddress\" required/>\n                </div>\n            </div>\n            <div>\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">所在城市</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <input placeholder=\"请填写所在城市\" ng-model=\"formdata.city\" required/>\n                </div>\n            </div>\n\n            <div style=\"margin-top: 14px;\">\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">微信</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <input placeholder=\"请填写微信\" ng-model=\"formdata.wechat\"/>\n                </div>\n            </div>\n            <div>\n                <div class=\"col-xs-3\" style=\"padding: 0px;\">支付宝</div>\n                <div class=\"col-xs-9\" style=\"padding: 0px;\">\n                    <input placeholder=\"请填写支付宝\" ng-model=\"formdata.alipay\"/>\n                </div>\n            </div>\n\n            <!--<div style=\"margin-top: 14px;height: 100px;\">-->\n                <!--<input ng-model=\"formdata.idcardUrl\" style=\"display: none;\" required>-->\n                <!--<input id=\"uploadFile\" type=\"file\" style=\"display: none;\" accept=\".png,.jpg\">-->\n\n                <!--<div class=\"col-xs-3\" style=\"padding: 0px;\">证件照</div>-->\n                <!--<div class=\"col-xs-9\" style=\"padding: 10px 0px 0px 0px;\">-->\n                    <!--<img ng-click=\"upload()\" src=\"drawable/btn_add_post_card.png\" style=\"width: 50px;\">-->\n                    <!--<div style=\"color: blue;\">请上传手持身份证照片</div>-->\n                <!--</div>-->\n            <!--</div>-->\n        </form>\n\n        <div style=\"padding: 14px;\">\n            <button ng-click=\"submitForm(form.$valid)\" ng-disabled=\"form.$invalid\" class=\"btn btn-primary btn-block\">提交</button>\n        </div>\n    </div>\n\n</div>"},{"url":"updatepwd.html","route":"/updatepwd","template":"<style>\n    .app-toolbar {\n        position: fixed;\n        top: 50px;\n        left: 0px;\n        right: 0px;\n        background-color: #4B99FF;\n        color: #ffffff;\n        padding: 0px 30px 0px 30px;\n        font-size: 14px;\n    }\n\n    .app-toolbar > div {\n        border: 1px solid #ffffff;\n        border-radius: 30px;\n        height: 30px;\n    }\n\n    .app-toolbar > div > div {\n        text-align: center;\n        height: 30px;\n        line-height: 30px;\n    }\n\n    form {\n        position: fixed;\n        left: 30px;\n        right: 30px;\n        top: 120px;\n        background-color: #ffffff;\n        border: solid 1px #cccccc;\n        box-shadow: 1px 1px 5px #cccccc;\n        padding: 14px;\n        border-radius: 10px;\n    }\n\n    form > div {\n        margin-top: 14px;\n        color: gray;\n    }\n\n    input {\n        height: 40px;\n        border: none;\n        border-bottom: solid 1px #cccccc;\n        width: 100%;\n    }\n</style>\n\n<div ng-controller=\"updatepwd\">\n    <div class=\"app-actionbar\" style=\"background-color: #4B99FF;\">\n        <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\">\n        <div>安全管理</div>\n    </div>\n\n    <div class=\"app-toolbar\">\n        <div ng-show=\"changePasswd\">\n            <div ng-click=\"toggle(0)\" class=\"col-xs-4\" style=\"background-color: #ffffff;border-radius: 30px;color: #3A8FFF\">登录密码</div>\n            <div ng-click=\"toggle(1)\" class=\"col-xs-4\">二次密码</div>\n            <div ng-click=\"toggle(2)\" class=\"col-xs-4\">手机号码</div>\n        </div>\n        <div ng-show=\"changeOperatePasswd\">\n            <div ng-click=\"toggle(0)\" class=\"col-xs-4\">登录密码</div>\n            <div ng-click=\"toggle(1)\" class=\"col-xs-4\" style=\"background-color: #ffffff;border-radius: 30px;color: #3A8FFF\">二次密码</div>\n            <div ng-click=\"toggle(2)\" class=\"col-xs-4\">手机号码</div>\n        </div>\n        <div ng-show=\"changeMobile\">\n            <div ng-click=\"toggle(0)\" class=\"col-xs-4\">登录密码</div>\n            <div ng-click=\"toggle(1)\" class=\"col-xs-4\">二次密码</div>\n            <div ng-click=\"toggle(2)\" class=\"col-xs-4\" style=\"background-color: #ffffff;border-radius: 30px;color: #3A8FFF\">手机号码</div>\n        </div>\n    </div>\n\n    <div>\n        <img src=\"drawable/bg_usercenter_top.png\" style=\"width: 100%; height: 200px;\">\n    </div>\n\n    <form name=\"form1\" ng-submit=\"submitPasswd(form1.$valid)\" ng-show=\"changePasswd\" novalidate>\n        <div>\n            <div>原密码</div>\n            <input ng-model=\"formdata.oldpwd\" placeholder=\"首次登录密码666666\" required/>\n        </div>\n        <div>\n            <div>新密码</div>\n            <input ng-model=\"formdata.password\" type=\"password\" placeholder=\"输入新密码\" required/>\n        </div>\n        <div>\n            <div>确认密码</div>\n            <input ng-model=\"formdata.password1\" type=\"password\" placeholder=\"输入确认密码\" required/>\n        </div>\n        <div>\n            <button type=\"submit\" ng-disabled=\"form1.$invalid\" class=\"btn btn-primary btn-block\">确定修改</button>\n        </div>\n    </form>\n\n    <form name=\"form2\" ng-submit=\"submitOperatePasswd(form2.$valid)\" ng-show=\"changeOperatePasswd\" novalidate>\n        <div>\n            <div>原密码</div>\n            <input ng-model=\"formdata.oldpwd\" placeholder=\"首次二级密码888888\" required/>\n        </div>\n        <div>\n            <div>新密码</div>\n            <input ng-model=\"formdata.password\" type=\"password\" placeholder=\"输入新密码\" required/>\n        </div>\n        <div>\n            <div>确认密码</div>\n            <input ng-model=\"formdata.password1\" type=\"password\" placeholder=\"输入确认密码\" required/>\n        </div>\n        <div>\n            <button type=\"submit\" ng-disabled=\"form2.$invalid\" class=\"btn btn-primary btn-block\">确定修改</button>\n        </div>\n    </form>\n\n    <form name=\"form3\" class=\"form-horizontal\" ng-submit=\"submitMobile(form3.$valid)\" ng-show=\"changeMobile\" novalidate>\n        <div>\n            <div>新手机号</div>\n            <input name=\"mobile\" ng-model=\"formdata.mobile\" placeholder=\"输入正确手机号码\" ng-pattern=\"/^1[3578]{1}\\d{9}\\d?$/\" required/>\n        </div>\n        <div>\n            <div>验证码</div>\n            <div style=\"position: relative;\">\n                <input ng-model=\"formdata.code\" style=\"width: 166px;\" placeholder=\"输入6位数字验证码\" ng-pattern=\"/^\\d{6}$/\" required/>\n                <button ng-click=\"sendcode(form3.mobile.$valid)\" ng-disabled=\"form3.mobile.$invalid\" class=\"btn btn-primary\" style=\"width: 80px;height: 32px;position: absolute; right: 0px;\">发送短信</button>\n            </div>\n        </div>\n        <div>\n            <button type=\"submit\" ng-disabled=\"form3.$invalid\" class=\"btn btn-primary btn-block\">确定修改</button>\n        </div>\n    </form>\n</div>"},{"url":"upgrade.html","route":"/upgrade","template":"<style>\n    .app-upgrade {\n        background-color: #007BC1;\n        position: absolute;\n        left: 0px;\n        right: 0px;\n        top: 0px;\n        bottom: 0px;\n        overflow-y: auto;\n    }\n\n    .app-upgrade-card {\n        background-image: url('drawable/bg_upgrade_item.png');\n        background-size: 100% 100%;\n        height: 100px;\n        width: 100%;\n        margin-bottom: 8px;\n    }\n</style>\n\n<div ng-controller=\"upgrade\" class=\"app-upgrade\">\n\n    <img ng-click=\"back()\" src=\"drawable/btn_com_back.png\" style=\"width: 50px; padding: 14px; position: absolute; left: 0px;\">\n\n    <div style=\"width: 140px; margin: auto;\">\n        <img src=\"drawable/img_upgrade_title-min.png\" style=\"width: 100%;\">\n    </div>\n\n    <div style=\"padding: 14px;position: fixed; left: 0px; right: 0px; top: 50px; bottom: 0px;overflow-y: auto\">\n        <div class=\"app-upgrade-card\" ng-repeat=\"it in cards\">\n            <div class=\"col-xs-4\" style=\"text-align: center;padding-top: 5px;\">\n                <img ng-src=\"{{it.icon}}\" style=\"width: 90px;\">\n            </div>\n            <div class=\"col-xs-8\" style=\"line-height: 50px;color: #ffffff;\">\n                <div style=\"font-size: 18px;\">{{it.name}}</div>\n                <div style=\"position: relative\">\n                    <span>信用分:{{it.points}}</span>\n                    <img ng-show=\"user.level!==($index+1)\" index=\"{{$index}}\" ng-click=\"upgradeCard($event)\" src=\"drawable/btn_upgrade_config.png\" style=\"width: 80px;position: absolute; right: 0px;top: 8px;\">\n                    <img ng-show=\"user.level===($index+1)\" ng-click=\"reActive()\" index=\"{{$index}}\" ng-click=\"upgradeCard($event)\" src=\"drawable/btn_reactive.png\" style=\"width: 80px;position: absolute; right: 0px;top: 8px;\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"}]);
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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	app.controller("active_list", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 1000,
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
	                if(!it.name)
	                {
	                    it.name = "未完善个人信息";
	                }
	            }
	            $scope.listdata.userList = data.userList;
	            $scope.$apply();
	        });
	    };

	    $scope.getData();
	});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	app.controller("active", function($scope, $rootScope, $location, $uibModalInstance, items)
	{
	    $scope.submitForm = function(isValid)
	    {
	        if(isValid)
	        {
	            $scope.formdata.userId = items;
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
	                        $uibModalInstance.close(true);
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
/* 4 */
/***/ (function(module, exports) {

	app.controller("buy_list", function($scope, $rootScope, $location)
	{
	    $scope.isFinish = false;

	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 1000,
	        orderList: [],
	    };

	    $scope.tab = function()
	    {
	        $scope.isFinish = !$scope.isFinish;
	        $scope.getData();
	    };

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize,
	            finish: $scope.isFinish ? 1 : 0
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
	            if($scope.isFinish)
	            {
	                $scope.listdata.finishOrderList = data.orderList;
	                $scope.listdata.notFinishOrderList = [];
	            }
	            else
	            {
	                $scope.listdata.finishOrderList = [];
	                $scope.listdata.notFinishOrderList = data.orderList;
	            }
	            $scope.$apply();
	        });
	    };

	    $scope.getData();
	});

/***/ }),
/* 5 */
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
									$scope.$apply();
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
/* 6 */
/***/ (function(module, exports) {

	app.controller("buy", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 100,
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
	            $scope.listdata.orderList = data.orderList;
	            $scope.$apply();
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
	                    var id = $scope.listdata.orderList[index].orderId;
	                    var param = {
	                        orderId: id,
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

	    $scope.getData();
	});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	app.controller("change_list", function($scope, $rootScope, $location)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 100,
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
	            $scope.listdata.changeList = data.changeList;
	            $scope.$apply();
	        });
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
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports) {

	app.controller("game", function($scope, $rootScope, $location)
	{
	    $scope.showGameInfo = function(data, apply)
	    {
	        $scope.shop = data.shop;
	        $scope.split = data.split;
	        $scope.todayPoint = data.todayPoint;
	        $scope.userinfo = data.userinfo;
	        if(apply)
	        {
	            $scope.$apply();
	        }
	    };

	    $scope.getInfo = function()
	    {
	        var cfg = {
	            mask: false,
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
	            data.shop = shop[shopIndex];

	            if($rootScope.CacheGameInfo)
	            {
	                if(JSON.stringify($rootScope.CacheGameInfo.userinfo) !== JSON.stringify(data.userinfo))
	                {
	                    $rootScope.CacheGameInfo = data;
	                    $scope.showGameInfo(data, true);
	                }
	            }
	            else
	            {
	                $rootScope.CacheGameInfo = data;
	                $scope.showGameInfo(data, true);
	            }
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
	                    $('.app-game-success').fadeIn(500);
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
	        $('.app-game-success').fadeOut(300, function()
	        {
	            $scope.getInfo();
	        });
	    };

	    if($rootScope.CacheGameInfo)
	    {
	        $scope.showGameInfo($rootScope.CacheGameInfo, false);
	    }

	    $scope.getInfo();
	});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	app.controller("inactive_list", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 100,
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
	            $scope.listdata.userList = data.userList;
	            $scope.$apply();
	        });
	    };

	    $scope.onListItemClick = function($event)
	    {
	        var index = $($event.target).attr("index");
	        if(index)
	        {
	            var user = $scope.listdata.userList[index];

	            var modal = {
	                animation: true,
	                controller: "active",
	                resolve: {
	                    items: function()
	                    {
	                        return user.userId;
	                    }
	                }
	            }
	            if(window.profile === "product")
	            {
	                modal.template = window.routeMetadata["/active"];
	            }
	            else
	            {
	                modal.templateUrl = window.routeMetadata["/active"];
	            }

	            var modalInstance = $uibModal.open(modal);
	            modalInstance.result.then(function(result)
	            {
	                if(result)
	                {
	                    $scope.getData();
	                }
	            }, function()
	            {
	                console.log("dialog dismiss");
	            });
	        }
	    };

	    $scope.getData();
	});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	app.controller("main", function($scope, $rootScope, $location, $uibModal)
	{
	    $rootScope.back = function()
	    {
	        history.back();
	    };

	    T.common.ajax.request(Api.admin_settingInfo_v1, null, null, function(ddata, code, msg)
	    {
	        // 维护中
	        if(ddata.setting.WangZhanWeiHu.ShiFouWeiHu)
	        {
	            location.href = "maintain.html";
	        }
	    });
	});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	app.controller("maintab1", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.getInfo = function()
	    {
	        var cfg = {
	            mask: false,
	        };
	        T.common.ajax.request(Api.user_userInfo_v1, null, cfg, function(data, code, msg)
	        {
	            $rootScope.CacheMainTab1 = data.user;
	            $scope.user = data.user;
	            $scope.$apply();
	        });
	    };

	    $scope.submitForm = function(isValid)
	    {
	        if(isValid)
	        {
	            $scope.formdata.pointAmount = $scope.formdata.pointAmountTmp * 20;
	            $scope.formdata.password = T.common.util.md5($scope.formdata.operatePasswd);
	            if(confirm("确定要挂单出售" + $scope.formdata.pointAmount + "积分?"))
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
	                            $scope.getInfo();
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

	    if($rootScope.CacheMainTab1)
	    {
	        $scope.user = $rootScope.CacheMainTab1;
	    }

	    $scope.getInfo();
	});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	app.controller("maintab3", function($scope, $rootScope, $location, $uibModal)
	{
	});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	app.controller("maintab4", function($scope, $rootScope, $location, $uibModal)
	{
	    if($rootScope.CacheMainTab4)
	    {
	        $scope.user = $rootScope.CacheMainTab4;
	    }
	    else
	    {
	        var cfg = {
	            mask: false,
	        };
	        T.common.ajax.request(Api.user_userInfo_v1, null, cfg, function(data, code, msg)
	        {
	            var cards = ["", "普通卡", "金卡", "白金卡", "钻石卡", "黑钻卡"];
	            $rootScope.CacheMainTab4 = data.user;
	            data.user.level = cards[data.user.level];
	            $scope.user = $rootScope.CacheMainTab4;
	            $scope.$apply();
	        });
	    }
	});

/***/ }),
/* 18 */
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
	        window.T.common = {};
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

	            // console.log("待签名: " + sign);
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
	     * websock请求模块
	     */
	    T.common.sock = {
	        socket: null,
	        creating: false,
	        creatingHolder: [],
	        taskHolder: {},
	        heartbeatTimer: null,
	        pushListeners: {},

	        getSock: function(callback)
	        {
	            if(this.socket && this.socket.readyState === 1)
	            {
	                callback(this.socket);
	                return;
	            }

	            this.creatingHolder.push(callback);

	            if(!this.creating)
	            {
	                this.creating = true;
	                this.socket = new WebSocket(Api.ws_signin_v1 + "?terminal=web&sid=" + T.common.user.getSid());

	                this.socket.onopen = function()
	                {
	                    console.log("sock onopen");
	                    for(var i = 0; i < T.common.sock.creatingHolder.length; i++)
	                    {
	                        var callback = T.common.sock.creatingHolder[i];
	                        callback(T.common.sock.socket);
	                    }
	                    T.common.sock.creatingHolder = [];
	                    T.common.sock.creating = false;
	                };

	                this.socket.onmessage = function(event)
	                {
	                    if(event.data === "0")
	                    {
	                        T.common.sock.socket.send("1");
	                        return;
	                    }

	                    // 解密
	                    var protocol = JSON.parse(T.common.util.byteToString(Base64.decode(event.data)));
	                    console.log("response:\n" + JSON.stringify(protocol, undefined, 3));

	                    // 同步请求
	                    if(protocol.callback && protocol.callback !== "")
	                    {
	                        var task = T.common.sock.taskHolder[protocol.callback];
	                        if(task)
	                        {
	                            T.common.sock.taskHolder[protocol.callback] = null;
	                            var loading = $("#" + task.reqid);
	                            if(loading)
	                            {
	                                loading.remove();
	                            }

	                            try
	                            {
	                                var code = protocol.code;
	                                var msg = protocol.msg;
	                                var data = protocol.data;
	                                T.common.cfg.ajaxSuccess(task.cfg, data, code, msg, task.callback);
	                            }
	                            catch(e)
	                            {
	                                T.common.cfg.ajaxHandleFail(e);
	                            }
	                        }
	                    }
	                    // 异步推送
	                    else
	                    {
	                        for(var name in T.common.sock.pushListeners)
	                        {
	                            var listener = T.common.sock.pushListeners[name];
	                            if(listener && listener.url === protocol.url)
	                            {
	                                try
	                                {
	                                    listener.callback(protocol.data);
	                                }
	                                catch(e)
	                                {
	                                    console.log(JSON.stringify(e));
	                                }
	                            }
	                        }
	                    }
	                };

	                this.socket.onclose = function()
	                {
	                    T.common.sock.creating = false;
	                    console.log("sock onclose");
	                };
	            }
	        },

	        /**
	         * 发起请求
	         * @param api
	         * @param params
	         * @param cfg
	         * @param callback
	         */
	        request: function(api, params, cfg, callback)
	        {
	            if(!params)
	            {
	                params = {};
	            }
	            T.common.ajax.sign(params);

	            if(!cfg)
	            {
	                cfg = {
	                    mask: false,
	                    care: false
	                };
	            }

	            var reqid = new Date().getTime() + "" + parseInt(Math.random() * 10000000000);
	            var protocol = {
	                url: api,
	                param: params,
	                callback: reqid
	            };

	            var task = {
	                reqid: reqid,
	                cfg: cfg,
	                protocol: protocol,
	                callback: callback
	            };
	            this.taskHolder[task.reqid] = task;

	            if(cfg.mask)
	            {
	                var loadingDom =
	                    '<div id="' + task.reqid + '">' +
	                    '<div style="position: fixed; left: 0px; top: 0px; right: 0px; bottom: 0px;z-index: 10000;background-color: #000000; opacity: 0;"></div>' +
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
	                    T.common.sock.taskHolder[$(this).attr("id")] = null;
	                    $(this).remove();
	                });
	            }

	            this.getSock(function(socket)
	            {
	                // 分片加密
	                var publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCiOgBMB93gr39/dgbTPsJhOfCYrXaK3DZJQybKKRx2wFkQb9fiH+SElPISNmj54U7sIs57vXT2TmJZzentGPuS9ArTwBZReiYAjTnHj0F3NWTAbE+haxbun69aeA+cB2iXLv3MC/Gp1WuhHTl00B5KviNZXXchBbkrzqtk/naAiQIDAQAB";
	                var crypt = new JSEncrypt();
	                crypt.setKey(publicKey);

	                var json = JSON.stringify(protocol);
	                var FragmentLimit = 36;
	                var fragmentLength = json.length % FragmentLimit == 0 ? json.length / FragmentLimit : json.length / FragmentLimit + 1;
	                var buf = "";
	                for(var i = 0; i < fragmentLength; i++)
	                {
	                    var fragmentTxt = null;
	                    if(i === (fragmentLength - 1))
	                    {
	                        fragmentTxt = json.substr(i * FragmentLimit);
	                    }
	                    else
	                    {
	                        fragmentTxt = json.substr(i * FragmentLimit, FragmentLimit);
	                    }
	                    buf += crypt.encrypt(fragmentTxt) + ",";
	                }

	                buf = buf.substring(0, buf.length - 1);
	                socket.send(buf);
	                console.log("request:\n" + JSON.stringify(protocol, undefined, 3));
	            });
	        },

	        /**
	         * 注册推送监听
	         * @param name
	         * @param route
	         * @param callback
	         */
	        addPushListener: function(name, route, callback)
	        {
	            var listener = {
	                name: name,
	                route: route,
	                callback: callback
	            };
	            this.pushListeners[name] = listener;
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

	        // 字节数组转字符串
	        byteToString: function(arr)
	        {
	            if(typeof arr === 'string')
	            {
	                return arr;
	            }
	            var str = '',
	                _arr = arr;
	            for(var i = 0; i < _arr.length; i++)
	            {
	                var one = _arr[i].toString(2),
	                    v = one.match(/^1+?(?=0)/);
	                if(v && one.length == 8)
	                {
	                    var bytesLength = v[0].length;
	                    var store = _arr[i].toString(2).slice(7 - bytesLength);
	                    for(var st = 1; st < bytesLength; st++)
	                    {
	                        store += _arr[st + i].toString(2).slice(2);
	                    }
	                    str += String.fromCharCode(parseInt(store, 2));
	                    i += bytesLength - 1;
	                }
	                else
	                {
	                    str += String.fromCharCode(_arr[i]);
	                }
	            }
	            return str;
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
/* 19 */
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
	        $scope.notice = data.notice;
	        $scope.notice.createTime = T.common.ui.formatTime($scope.notice.createTime);
	        $scope.$apply();
	    });
	});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	app.controller("notice", function($scope, $rootScope, $location)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 100,
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
	            $scope.listdata.noticeList = data.noticeList;
	            $scope.$apply();
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

	    if($rootScope.cacheNoticeList)
	    {
	        $scope.listdata = $rootScope.cacheNoticeList;
	        $rootScope.cacheNoticeList = null;
	    }
	    else
	    {
	        $scope.getData();
	    }
	});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	app.controller("org", function($scope, $rootScope, $location)
	{
	    $scope.filter = function(isValid)
	    {
	        if(isValid)
	        {
	            $scope.showTree($scope.filterAccount);
	        }
	        else
	        {
	            $scope.restore();
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
	            '<div>' +
	            '<div class="app-singleLine">${username}</div>' +
	            '<div class="app-singleLine" style="color: gray;">${leftInvest} 总 ${rightInvest}</div>' +
	            '</div>' +
	            '<img src="drawable/icon_user_default.png">' +
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

	        var subUserCounter = {};
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

	        // 加入快速注册
	         for(var key in subUserCounter)
	         {
	             var userId = key.split("_")[2];
	             var count = subUserCounter[key];
	             if(count !== 2)
	             {
	                 var tplreg = '<li>' +
	                     '<button parentId="' + userId + '" class="btn btn-default" style="border-radius: 40px;">快速注册</button>' +
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports) {

	app.controller("reward_list", function($scope, $rootScope, $location)
	{
	    $scope.type = "分享奖励";

	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 1000,
	    };

	    $scope.tab = function($event)
	    {
	        var target = $($event.target);
	        $(".app-list-tab>div").removeClass("app-list-tab-height");
	        $scope.type = target.html();
	        target.addClass("app-list-tab-height");
	        $scope.getData();
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
	            $scope.listdata.rewardList = data.rewardList;
	            $scope.$apply();
	        });
	    };

	    $scope.getData();
	});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	app.controller("sell_list", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.isFinish = false;

	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 1000,
	    };

	    $scope.tab = function()
	    {
	        $scope.isFinish = !$scope.isFinish;
	        $scope.getData();
	    };

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize,
	            finish: $scope.isFinish ? 1 : 0
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
	                        break;
	                    }
	                    case "timeout":
	                    {
	                        it.status = "已过期";
	                        break;
	                    }
	                    case "sale":
	                    {
	                        it.status = "待确认收款";
	                        it.canConfirm = true;
	                        break;
	                    }
	                }
	            }

	            if($scope.isFinish)
	            {
	                $scope.listdata.finishOrderList = data.orderList;
	                $scope.listdata.notFinishOrderList = [];
	            }
	            else
	            {
	                $scope.listdata.finishOrderList = [];
	                $scope.listdata.notFinishOrderList = data.orderList;
	            }
	            $scope.$apply();
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
	                            var id = $scope.listdata.notFinishOrderList[index].orderId;
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
	                case "撤销出售":
	                {
	                    T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
	                    {
	                        if(operatePasswd)
	                        {
	                            var id = $scope.listdata.notFinishOrderList[index].orderId;
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

	    $scope.getData();
	});

/***/ }),
/* 27 */
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
/* 28 */
/***/ (function(module, exports) {

	signupApp.controller("signup", function($scope, $rootScope, $location)
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
	        }
	    };

	    $scope.submitForm = function(isValid)
	    {
	        if(isValid)
	        {
	            $scope.formdata.inviter = T.common.util.getParameter("inviter");
	            if($scope.formdata.inviter && $scope.formdata.inviter !== "")
	            {
	                var cfg = {
	                    mask: true,
	                    care: true
	                };
	                T.common.ajax.request(Api.user_signup_v1, $scope.formdata, cfg, function(data, code, msg)
	                {
	                    switch(code)
	                    {
	                        case 200:
	                        {
	                            alert("注册成功");
	                            location.href = "signin.html";
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
/* 29 */
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
	            $scope.user = data.user;
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
/* 30 */
/***/ (function(module, exports) {

	app.controller("transfer_list", function($scope, $rootScope, $location)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 100,
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
	            $scope.listdata.transferList = data.transferList;
	            $scope.$apply();
	        });
	    };

	    $scope.getData();
	});

/***/ }),
/* 31 */
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
	            $scope.user = data.user;
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
/* 32 */
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
/* 33 */
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
/* 34 */
/***/ (function(module, exports) {

	app.controller("upgrade", function($scope, $rootScope, $location, $uibModal)
	{

	    $scope.getCardInfo = function()
	    {
	        var cfg = {
	            mask: true,
	        };
	        T.common.ajax.request(Api.user_upgradeCard_v1, null, cfg, function(data, code, msg)
	        {
	            var cards = [
	                {
	                    name: "普卡",
	                    points: data.cards.PuKa,
	                    icon: "drawable/img_upgrade_vip1-min.png",
	                    level: 1
	                }, {
	                    name: "金卡",
	                    points: data.cards.JinKa,
	                    icon: "drawable/img_upgrade_vip2-min.png",
	                    level: 2
	                }, {
	                    name: "白金卡",
	                    points: data.cards.BaiJinKa,
	                    icon: "drawable/img_upgrade_vip3-min.png",
	                    level: 3,
	                }
	                // , {
	                //     name: "钻石卡",
	                //     points: data.cards.ZuanShiKa,
	                //     icon: "drawable/img_upgrade_vip4-min.png",
	                //     level: 4
	                // }, {
	                //     name: "黑钻卡",
	                //     points: data.cards.HeiZuanKa,
	                //     icon: "drawable/img_upgrade_vip5-min.png",
	                //     level: 5
	                // }
	            ];
	            $scope.cards = cards;
	            $scope.user = data.user;
	            $scope.$apply();
	        });
	    };

	    $scope.upgradeCard = function($event)
	    {
	        T.common.ui.getOperatePasswd($uibModal, function(operatePasswd)
	        {
	            if(operatePasswd)
	            {
	                var param = {
	                    levelCard: $scope.cards[parseInt($event.target.getAttribute("index"))].level,
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

	    $scope.getCardInfo();
	});

/***/ })
/******/ ]);