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
	    var routeList = ([{"url":"change_list.html","route":"/change_list","template":"<div ng-controller=\"change_list\">\n    <table class=\"table table-hover\" ng-click=\"onListItemClick($event)\">\n        <thead>\n        <tr>\n            <th>用户</th>\n            <th>操作类型</th>\n            <th>操作说明</th>\n            <th>变化信用分</th>\n            <th>剩余信用分</th>\n            <th>操作时间</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr ng-repeat=\"it in changeList\">\n            <td>{{it.username}}</td>\n            <td>{{it.type}}</td>\n            <td>{{it.descr}}</td>\n            <td>{{it.amount}}</td>\n            <td>{{it.pointLeft}}</td>\n            <td>{{it.createTime}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"data_daily_balance.html","route":"/data_daily_balance","template":"<div ng-controller=\"data_daily_balance\">\n    <div class=\"\" style=\"width:70%;margin:3% 8%;\">\n\t\t<canvas id=\"chart\" width=\"400\" height=\"400\"></canvas>\n\t</div>\n    <table class=\"table table-hover\" style=\"width:70%;margin:3% 8%;\">\n        <thead>\n        <tr>\n\t\t\t<th>NO.</th>\n\t\t\t <th>日期</th>\n            <th>平衡奖励</th>\n        </tr>\n        </thead>\n        <tbody>\n\t\t<tr ng-repeat=\"it in valueList track by $index\">\n\t\t\t<td>{{$index+1}}</td>\n\t\t\t<td>{{dateList[$index]}}</td>\n            <td>{{it}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"data_daily_dymanic.html","route":"/data_daily_dymanic","template":"<div ng-controller=\"data_daily_dymanic\">\n    <div class=\"\" style=\"width:70%;margin:3% 8%;\">\n\t\t<canvas id=\"chart\" width=\"400\" height=\"400\"></canvas>\n\t</div>\n    <table class=\"table table-hover\" style=\"width:70%;margin:3% 8%;\">\n        <thead>\n        <tr>\n\t\t\t<th>NO.</th>\n\t\t\t <th>日期</th>\n            <th>动态奖励</th>\n        </tr>\n        </thead>\n        <tbody>\n\t\t<tr ng-repeat=\"it in valueList track by $index\">\n\t\t\t<td>{{$index+1}}</td>\n\t\t\t<td>{{dateList[$index]}}</td>\n            <td>{{it}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"data_daily_manage.html","route":"/data_daily_manage","template":"<div ng-controller=\"data_daily_manage\">\n    <div class=\"\" style=\"width:70%;margin:3% 8%;\">\n\t\t<canvas id=\"chart\" width=\"400\" height=\"400\"></canvas>\n\t</div>\n    <table class=\"table table-hover\" style=\"width:70%;margin:3% 8%;\">\n        <thead>\n        <tr>\n\t\t\t<th>NO.</th>\n\t\t\t <th>日期</th>\n            <th>管理津贴</th>\n        </tr>\n        </thead>\n        <tbody>\n\t\t<tr ng-repeat=\"it in valueList track by $index\">\n\t\t\t<td>{{$index+1}}</td>\n\t\t\t<td>{{dateList[$index]}}</td>\n            <td>{{it}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"data_daily_register.html","route":"/data_daily_register","template":"<div ng-controller=\"data_daily_register\">\n    <div class=\"\" style=\"width:70%;margin:3% 8%;\">\n\t\t<canvas id=\"chart\" width=\"400\" height=\"400\"></canvas>\n\t</div>\n    <table class=\"table table-hover\" style=\"width:70%;margin:3% 8%;\">\n        <thead>\n        <tr>\n\t\t\t<th>NO.</th>\n\t\t\t <th>日期</th>\n            <th>注册会员数</th>\n        </tr>\n        </thead>\n        <tbody>\n\t\t<tr ng-repeat=\"it in valueList track by $index\">\n\t\t\t<td>{{$index+1}}</td>\n\t\t\t<td>{{dateList[$index]}}</td>\n            <td>{{it}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"data_daily_show.html","route":"/data_daily_show","template":"<div ng-controller=\"data_daily_show\">\n    <div class=\"\" style=\"width:70%;margin:3% 8%;\">\n\t\t<canvas id=\"chart\" width=\"400\" height=\"400\"></canvas>\n\t</div>\n    <table class=\"table table-hover\" style=\"width:70%;margin:3% 8%;\">\n        <thead>\n        <tr>\n\t\t\t<th>NO.</th>\n\t\t\t <th>日期</th>\n            <th>分享奖励</th>\n        </tr>\n        </thead>\n        <tbody>\n\t\t<tr ng-repeat=\"it in valueList track by $index\">\n\t\t\t<td>{{$index+1}}</td>\n\t\t\t<td>{{dateList[$index]}}</td>\n            <td>{{it}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"data_daily_static.html","route":"/data_daily_static","template":"<div ng-controller=\"data_daily_static\">\n    <div class=\"\" style=\"width:70%;margin:3% 8%;\">\n\t\t<canvas id=\"chart\" width=\"400\" height=\"400\"></canvas>\n\t</div>\n    <table class=\"table table-hover\" style=\"width:70%;margin:3% 8%;\">\n        <thead>\n        <tr>\n\t\t\t<th>NO.</th>\n\t\t\t <th>日期</th>\n            <th>静态奖励</th>\n        </tr>\n        </thead>\n        <tbody>\n\t\t<tr ng-repeat=\"it in valueList track by $index\">\n\t\t\t<td>{{$index+1}}</td>\n\t\t\t<td>{{dateList[$index]}}</td>\n            <td>{{it}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"data_daily_team.html","route":"/data_daily_team","template":"<div ng-controller=\"data_daily_team\">\n    <div class=\"\" style=\"width:70%;margin:3% 8%;\">\n\t\t<canvas id=\"chart\" width=\"400\" height=\"400\"></canvas>\n\t</div>\n    <table class=\"table table-hover\" style=\"width:70%;margin:3% 8%;\">\n        <thead>\n        <tr>\n\t\t\t<th>NO.</th>\n\t\t\t <th>日期</th>\n            <th>团队津贴</th>\n        </tr>\n        </thead>\n        <tbody>\n\t\t<tr ng-repeat=\"it in valueList track by $index\">\n\t\t\t<td>{{$index+1}}</td>\n\t\t\t<td>{{dateList[$index]}}</td>\n            <td>{{it}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"data_daily_withdrawals.html","route":"/data_daily_withdrawals","template":"<div ng-controller=\"data_daily_withdrawals\">\n\t<div class=\"\" style=\"width:70%;margin:3% 8%;\">\n\t\t<canvas id=\"chart\" width=\"400\" height=\"400\"></canvas>\n\t</div>\n    <table class=\"table table-hover\" style=\"width:70%;margin:3% 8%;\">\n        <thead>\n        <tr>\n\t\t\t<th>NO.</th>\n\t\t\t<th>日期</th>\n            <th>提现数量</th>\n\t\t\t<th>人民币</th>\n        </tr>\n        </thead>\n        <tbody>\n\t\t<tr ng-repeat=\"it in valueList track by $index\">\n\t\t\t<td>{{$index+1}}</td>\n\t\t\t<td>{{dateList[$index]}}</td>\n            <td>{{it}}</td>\n\t\t\t<td>{{it*7}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>+"},{"url":"feedback_list.html","route":"/feedback_list","template":"<div ng-controller=\"feedback_list\">\n    <table class=\"table table-hover\" ng-click=\"onListItemClick($event)\">\n        <thead>\n        <tr>\n            <th>反馈内容</th>\n            <th>反馈时间</th>\n            <th>操作</th>\n        </tr>\n        </thead>\n        <tbody ng-model=\"admin_username\">\n        <tr ng-repeat=\"it in feedbackList\">\n            <td>{{it.content}}</td>\n            <td>{{it.createTime}}</td>\n            <td ng-if=\"admin_username == 'admin'\">\n                <button type=\"button\" class=\"btn btn-default btn-xs\" index=\"{{$index}}\" style=\"display: {{it.display}}\">标记已处理</button>\n                <button type=\"button\" class=\"btn btn-default btn-xs\" index=\"{{$index}}\">删除</button>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"log_list.html","route":"/log_list","template":"<div ng-controller=\"log_list\">\n    <table class=\"table table-hover\" ng-click=\"onListItemClick($event)\">\n        <thead>\n        <tr>\n            <th>日志内容</th>\n            <th>日志时间</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr ng-repeat=\"it in logList\">\n            <td>{{it.content}}</td>\n            <td>{{it.createTime}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"main.html","route":"/main","template":"<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <title>ETR国际信用社区后台</title>\n\n        <link href=\"libs/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n        <link href=\"libs/font-awesome/css/font-awesome.min.css\" rel=\"stylesheet\">\n        <link href=\"libs/jquery.jorgchart/jquery.jOrgChart.css\" rel=\"stylesheet\">\n        <link href=\"style/style.css\" rel=\"stylesheet\">\n\n        <style>\n            .main-actionbar {\n                position: absolute;\n                left: 0px;\n                right: 0px;\n                top: 0px;\n                height: 60px;\n                line-height: 60px;\n                border-bottom: solid 1px #dddddd;\n                padding-left: 14px;\n            }\n\n            .main-actionbar > div {\n                display: inline-block;\n            }\n\n            .main-menu {\n                position: fixed;\n                left: 0px;\n                top: 60px;\n                bottom: 0px;\n                overflow-y: auto;\n                overflow-x: hidden;\n                width: 250px;\n                border-right: solid 1px #dddddd;\n            }\n\n            .main-menu a {\n                display: block;\n                width: 250px;\n                height: 40px;\n                line-height: 40px;\n                padding-left: 42px;\n                border-bottom: solid 1px #eeeeee;\n                position: relative;\n                color: #304E87;\n            }\n\n            .main-menu i {\n                position: absolute;\n                right: 14px;\n                line-height: 40px;\n            }\n\n            .main-menu a:hover {\n                background-color: #f1f1f1;\n            }\n\n            .main-view {\n                position: fixed;\n                left: 250px;\n                right: 0px;\n                top: 60px;\n                bottom: 0px;\n                padding: 0px;\n                overflow-y: auto;\n                /*overflow-x: hidden;*/\n                background-color: #ffffff;\n            }\n\n            ::-webkit-scrollbar {width: 5px;height:6px;}\n            ::-webkit-scrollbar-track-piece{background-color: #eeeeee;margin: -2px;}\n            ::-webkit-scrollbar-thumb{background: #aaaaaa;min-height: 150px;min-width: 150px;border-radius: 10px;}\n            ::-webkit-scrollbar-thumb:vertical:hover{background: #555555}\n            ::-webkit-scrollbar-thumb:horizontal:hover{background: #555555}\n        </style>\n\n        <script src=\"libs/angular.min.js\"></script>\n        <script src=\"libs/angular-route.js\"></script>\n        <script src=\"libs/ui-bootstrap-tpls-2.5.0.min.js\"></script>\n\n        <script src=\"libs/jquery-3.2.1.min.js\"></script>\n        <script src=\"libs/jquery-md5.js\"></script>\n        <script src=\"libs/jquery.jorgchart/jquery.jOrgChart.js\"></script>\n        <script src=\"libs/juicer-min.js\"></script>\n\t\t<!--bootstrap-->\n        <script src=\"libs/bootstrap/js/bootstrap.min.js\"></script>\n\t\t<script src=\"libs/bootstrap-paginator.min.js\"></script>\n\t\t<!--图标-->\n\t\t<script src=\"libs/date.js\"></script>\n        <script src=\"libs/Chart.js\"></script>\n\t\t<!--导出excel-->\n\t\t<script src=\"libs/excel/xlsx.core.min.js\"></script>\n        <script src=\"libs/excel/alasql.min.js\"></script>\n\t\t<!--百度编辑器ueditor-->\n\t\t<script type=\"text/javascript\" charset=\"utf-8\" src=\"libs/ueditor/ueditor.config.js\"></script>\n\t\t<script type=\"text/javascript\" charset=\"utf-8\" src=\"libs/ueditor/ueditor.all.min.js\"> </script>\n\t\t<script type=\"text/javascript\" charset=\"utf-8\" src=\"libs/ueditor/lang/zh-cn/zh-cn.js\"></script>\n    </head>\n\n    <body>\n        <!--ActionBar-->\n        <div class=\"main-actionbar\">\n            <div style=\"font-size: 24px;\">信用社区管理后台</div>\n            <div style=\"color: red;\" id=\"pointSum\">全平台信用分: </div>\n            <div class=\"dropdown\" style=\"position: absolute; right: 80px;\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                    <i class=\"fa fa-user fa-fw\"></i>\n                    <span id=\"username\">管理员: </span>\n                    <i class=\"fa fa-caret-down\"></i>\n                </a>\n                <ul class=\"dropdown-menu dropdown-user\">\n                    <!--<li>-->\n                        <!--<a href=\"#\">修改密码</a>-->\n                    <!--</li>-->\n                    <!--<li class=\"divider\"></li>-->\n                    <li>\n                        <a id=\"signout\" href=\"javascript:void(0)\">注销</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n\n        <!--Menu-->\n        <div class=\"main-menu\">\n            <div>\n                <a data-toggle=\"collapse\" href=\"#collapse1\" style=\"padding-left: 14px;\">\n                    <span>会员管理</span>\n                    <i class=\"fa fa-bars\"></i>\n                </a>\n                <div id=\"collapse1\" class=\"collapse in\">\n                    <a href=\"#/user_list\">\n                        <span>全部会员</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"#/user_list_inactive\">\n                        <span>待激活会员</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"#/user_add\">\n                        <span>添加会员</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"#/user_relation\">\n                        <span>会员关系图</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                </div>\n\n                <a data-toggle=\"collapse\" href=\"#jifenguanli\" style=\"padding-left: 14px;\">\n                    <span>积分管理</span>\n                    <i class=\"fa fa-bars\"></i>\n                </a>\n                <div id=\"jifenguanli\" class=\"collapse\">\n                    <a href=\"#/transfer_list\">\n                        <span>积分转让记录</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"#/change_list\">\n                        <span>积分操作记录</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                </div>\n\n                <a data-toggle=\"collapse\" href=\"#collapse2\" style=\"padding-left: 14px;\">\n                    <span>交易管理</span>\n                    <i class=\"fa fa-bars\"></i>\n                </a>\n                <div id=\"collapse2\" class=\"collapse\">\n                    <a href=\"#/order_sale_new\">\n                        <span>新提现交易订单</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n\t\t\t\t\t<a href=\"#/order_buy_sale\">\n                        <span>新充值交易订单</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n\t\t\t\t\t<a href=\"#/order_sale_all\">\n                        <span>全部提现订单</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n\t\t\t\t\t<a href=\"#/order_buy_all\">\n                        <span>全部充值订单</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n\t\t\t\t\t <a href=\"#/order_sale_finish\">\n                        <span>已完成提现明细</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <!--<a href=\"#/order_sale_notfinish\">\n                        <span>未完成提现交易</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"#/order_buy_notfinish\">\n                        <span>未完成买交易</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"#/order_buy_finish\">\n                        <span>已完成买入交易</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>-->\n                </div>\n\n                <a data-toggle=\"collapse\" href=\"#collapse3\" style=\"padding-left: 14px;\">\n                    <span>文章管理</span>\n                    <i class=\"fa fa-bars\"></i>\n                </a>\n                <div id=\"collapse3\" class=\"collapse\">\n                    <a href=\"#/notice_list\">\n                        <span>新闻公告</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"#/notice_add\">\n                        <span>添加公告</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                </div>\n\n                <a data-toggle=\"collapse\" href=\"#collapse4\" style=\"padding-left: 14px;\">\n                    <span>留言管理</span>\n                    <i class=\"fa fa-bars\"></i>\n                </a>\n                <div id=\"collapse4\" class=\"collapse\">\n                    <a href=\"#/feedback_list?deal=0\">\n                        <span>未处理留言</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"#/feedback_list?deal=1\">\n                        <span>已处理留言</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                </div>\n\n                <a data-toggle=\"collapse\" href=\"#collapse5\" style=\"padding-left: 14px;\">\n                    <span>平台设置</span>\n                    <i class=\"fa fa-bars\"></i>\n                </a>\n                <div id=\"collapse5\" class=\"collapse\">\n                    <a href=\"#/setting_reward?userId=0\">\n                        <span>奖励设置</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"#/setting_card?userId=0\">\n                        <span>会员卡设置</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"#/setting_fee?userId=0\">\n                        <span>手续费设置</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"#/setting_site?userId=0\">\n                        <span>网站维护设置</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                </div>\n                <a data-toggle=\"collapse\" href=\"#collapse6\" style=\"padding-left: 14px;\">\n                    <span>系统日志</span>\n                    <i class=\"fa fa-bars\"></i>\n                </a>\n                <div id=\"collapse6\" class=\"collapse\">\n                    <a href=\"#/log_list?type=adminsignin\">\n                        <span>管理员登录日志</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"#\">\n                        <span>平台设置操作日志</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"#/log_list?type=signin\">\n                        <span>会员登录日志</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"#\">\n                        <span>会员操作日志</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"#/log_list?type=transfer\">\n                        <span>会员积分转让日志</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"#/log_list?type=updatepwd\">\n                        <span>会员密码重置记录</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"#\">\n                        <span>短信记录</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"#/log_list?type=checkcode\">\n                        <span>验证码记录</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                </div>\n\t\t\t\t<a data-toggle=\"collapse\" href=\"#collapse7\" style=\"padding-left: 14px;\">\n                    <span>数据统计</span>\n                    <i class=\"fa fa-bars\"></i>\n                </a>\n                <div id=\"collapse7\" class=\"collapse\">\n\t\t\t\t\t<a href=\"#/data_daily_withdrawals\">\n                        <span>每日提现数据走势图</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"#/data_daily_static\">\n                        <span>每日静态奖励走势图</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n\t\t\t\t\t<a href=\"#/data_daily_dymanic\">\n                        <span>每日动态奖励走势图</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n\t\t\t\t\t<a href=\"#/data_daily_show\">\n                        <span>每日分享奖励走势图</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n\t\t\t\t\t<a href=\"#/data_daily_team\">\n                        <span>每日团队津贴走势图</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n\t\t\t\t\t<a href=\"#/data_daily_balance\">\n                        <span>每日平衡奖励走势图</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n\t\t\t\t\t<a href=\"#/data_daily_manage\">\n                        <span>每日管理津贴走势图</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n\t\t\t\t\t<a href=\"#/data_daily_register\">\n                        <span>每日新生会员走势图</span>\n                        <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n\n        <!--View-->\n        <div ng-app=\"app\" ng-controller=\"main\" class=\"main-view\" ng-view></div>\n    </body>\n</html>\n\n<script src=\"libs/__code__.js\"></script>"},{"url":"notice_add.html","route":"/notice_add","template":"<style>\n</style>\n\n<div ng-controller=\"notice_add\">\n    <form name=\"form\" class=\"app-form\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n        <div>\n            <label>公告标题*</label>\n            <input ng-model=\"formdata.title\" placeholder=\"请输入公告标题\" required>\n        </div>\n        <div>\n            <label>公告类型*</label>\n            <input ng-model=\"formdata.type\" placeholder=\"请输入公告类型\" required>\n        </div>\n        <div>\n            <label style=\"vertical-align: top;\">公告内容*</label>\n\t\t\t<script id=\"editor\" type=\"text/plain\" nf-model=\"formdata.content\" style=\"width:60%;height:400px;\"></script>\n            <!--<textarea ng-model=\"formdata.content\" placeholder=\"请输入公告内容\" required></textarea>-->\n\t\t\t\n        </div>\n        <div ng-model=\"admin_username\" ng-if=\"admin_username == 'admin'\">\n            <!--<label>&nbsp;</label>-->\n            <button class=\"btn btn-success\" ng-disabled=\"form.$invalid\" type=\"submit\">提交发布</button>\n            <span>*代表必填字段</span>\n        </div>\n    </form>\n</div>"},{"url":"notice_info.html","route":"/notice_info","template":"<div ng-controller=\"notice_info\" style=\"padding: 14px;text-align: center;\">\n    <div style=\"font-size: 18px;\">{{ data.title }}</div>\n    <div style=\"color: gray;\">{{data.type}} - {{data.createTime}}</div>\n    <div style=\"text-align: left;\">{{data.content}}</div>\n</div>"},{"url":"notice_list.html","route":"/notice_list","template":"<div ng-controller=\"notice_list\">\n    <table class=\"table table-hover\" ng-click=\"onListItemClick($event)\">\n        <thead>\n        <tr>\n            <th>通知标题</th>\n            <th>类型</th>\n            <th>发布时间</th>\n            <th>操作</th>\n        </tr>\n        </thead>\n        <tbody ng-model=\"admin_username\">\n        <tr ng-repeat=\"it in noticeList\">\n            <td>{{it.title}}</td>\n            <td>{{it.type}}</td>\n            <td>{{it.createTime}}</td>\n            <td ng-if=\"admin_username == 'admin'\">\n                <button type=\"button\" class=\"btn btn-default btn-xs\" index=\"{{$index}}\">查看</button>\n                <button type=\"button\" class=\"btn btn-default btn-xs\" index=\"{{$index}}\">删除</button>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"order_buy_all.html","route":"/order_buy_all","template":"<div ng-controller=\"order_buy_all\">\n\t<div style=\"position: relative;\">\n        <button class=\"btn btn-success\" ng-click=\"exportExcelForPage()\" style=\"margin: 10px;\">导出本页</button>\n\t\t<button class=\"btn btn-success\" ng-click=\"exportExcelForAll()\" style=\"margin: 0px;\">导出全部</button>\n    </div>\n    <table class=\"table table-hover\">\n        <thead>\n        <tr>\n            <th>ID</th>\n            <th>购买账号</th>\n            <th>购买信用分</th>\n            <th>手续费</th>\n            <th>出售时间</th>\n            <th>购买时间</th>\n            <th>确认时间</th>\n            <th>交易状态</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr ng-repeat=\"it in orderList\">\n            <td>{{it.orderId}}</td>\n            <td>{{it.username}}</td>\n            <td>{{it.pointAmount}}</td>\n            <td>{{it.fee}}</td>\n            <td>{{it.createTime}}</td>\n            <td>{{it.buyTime}}</td>\n            <td>{{it.confirmTime}}</td>\n            <td>{{it.status}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"order_buy_finish.html","route":"/order_buy_finish","template":"<div ng-controller=\"order_buy_finish\">\n    <table class=\"table table-hover\" ng-click=\"onListItemClick($event)\">\n        <thead>\n        <tr>\n            <th>ID</th>\n            <th>购买账号</th>\n            <th>购买信用分</th>\n            <th>手续费</th>\n            <th>出售时间</th>\n            <th>购买时间</th>\n            <th>确认时间</th>\n            <th>交易状态</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr ng-repeat=\"it in orderList\">\n            <td>{{it.orderId}}</td>\n            <td>{{it.username}}</td>\n            <td>{{it.pointAmount}}</td>\n            <td>{{it.fee}}</td>\n            <td>{{it.createTime}}</td>\n            <td>{{it.buyTime}}</td>\n            <td>{{it.confirmTime}}</td>\n            <td>{{it.status}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"order_buy_new.html","route":"/order_buy_new","template":"<div ng-controller=\"order_buy_new\">\n    <table class=\"table table-hover\">\n        <thead>\n        <tr>\n            <th>ID</th>\n            <th>购买账号</th>\n            <th>购买信用分</th>\n            <th>手续费</th>\n            <th>出售时间</th>\n            <th>购买时间</th>\n            <th>确认时间</th>\n            <th>交易状态</th>\n\t\t\t<th>操作</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr ng-repeat=\"it in orderList\">\n            <td>{{it.orderId}}</td>\n            <td>{{it.username}}</td>\n            <td>{{it.pointAmount}}</td>\n            <td>{{it.fee}}</td>\n            <td>{{it.createTime}}</td>\n            <td>{{it.buyTime}}</td>\n            <td>{{it.confirmTime}}</td>\n            <td>{{it.status}}</td>\n\t\t\t<td>\n                <button ng-click=\"onListItemClick($event, $index)\" class=\"btn btn-danger btn-xs\">充值到账</button>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"order_buy_notfinish.html","route":"/order_buy_notfinish","template":"<div ng-controller=\"order_buy_notfinish\">\n    <table class=\"table table-hover\" ng-click=\"onListItemClick($event)\">\n        <thead>\n        <tr>\n            <th>ID</th>\n            <th>购买账号</th>\n            <th>购买信用分</th>\n            <th>手续费</th>\n            <th>出售时间</th>\n            <th>购买时间</th>\n            <th>确认时间</th>\n            <th>交易状态</th>\n            <th>操作</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr ng-repeat=\"it in orderList\">\n            <td>{{it.orderId}}</td>\n            <td>{{it.username}}</td>\n            <td>{{it.pointAmount}}</td>\n            <td>{{it.fee}}</td>\n            <td>{{it.createTime}}</td>\n            <td>{{it.buyTime}}</td>\n            <td>{{it.confirmTime}}</td>\n            <td>{{it.status}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"order_buy_sale.html","route":"/order_buy_sale","template":"<div ng-controller=\"order_buy_sale\">\n\t<div style=\"position: relative;\">\n        <button class=\"btn btn-success\" ng-click=\"exportExcelForPage()\" style=\"margin: 10px;\">导出本页</button>\n\t\t<button class=\"btn btn-success\" ng-click=\"exportExcelForAll()\" style=\"margin: 0px;\">导出全部</button>\n    </div>\n    <table class=\"table table-hover\">\n        <thead>\n        <tr>\n            <th>ID</th>\n            <th>购买账号</th>\n            <th>购买信用分</th>\n\t\t\t<th>人民币</th>\n            <th>手续费</th>\n            <th>出售时间</th>\n            <th>购买时间</th>\n            <th>确认时间</th>\n            <th>交易状态</th>\n\t\t\t<th>操作</th>\n        </tr>\n        </thead>\n        <tbody ng-model=\"admin_username\">\n        <tr ng-repeat=\"it in orderList\">\n            <td>{{it.orderId}}</td>\n            <td>{{it.username}}</td>\n\t\t\t<td>{{it.pointAmount}}</td>\n            <td>{{it.pointAmount*7}}</td>\n            <td>{{it.fee}}</td>\n            <td>{{it.createTime}}</td>\n            <td>{{it.buyTime}}</td>\n            <td>{{it.confirmTime}}</td>\n            <td>{{it.status}}</td>\n\t\t\t<td ng-if=\"admin_username == 'admin'\">\n                <button ng-click=\"onListItemClick($event, $index)\" class=\"btn btn-danger btn-xs\">充值到账</button>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"order_sale_all.html","route":"/order_sale_all","template":"<div ng-controller=\"order_sale_all\">\n\t<div style=\"position: relative;\">\n        <button class=\"btn btn-success\" ng-click=\"exportExcelForPage()\" style=\"margin: 10px;\">导出本页</button>\n\t\t<button class=\"btn btn-success\" ng-click=\"exportExcelForAll()\" style=\"margin: 0px;\">导出全部</button>\n    </div>\n    <table class=\"table table-hover\">\n        <thead>\n        <tr>\n            <th>ID</th>\n            <th>出售账号</th>\n            <th>出售信用分</th>\n            <th>手续费</th>\n            <th>出售时间</th>\n            <th>撤销时间</th>\n            <th>购买时间</th>\n            <th>确认时间</th>\n            <th>交易状态</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr ng-repeat=\"it in orderList\">\n            <td>{{it.orderId}}</td>\n            <td>{{it.username}}</td>\n            <td>{{it.pointAmount}}</td>\n            <td>{{it.fee}}</td>\n            <td>{{it.createTime}}</td>\n            <td>{{it.cancelTime}}</td>\n            <td>{{it.buyTime}}</td>\n            <td>{{it.confirmTime}}</td>\n            <td>{{it.status}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"order_sale_finish.html","route":"/order_sale_finish","template":"<div ng-controller=\"order_sale_finish\">\n\t<div style=\"position: relative;\">\n        <button class=\"btn btn-success\" ng-click=\"exportExcelForPage()\" style=\"margin: 10px;\">导出本页</button>\n\t\t<button class=\"btn btn-success\" ng-click=\"exportExcelForAll()\" style=\"margin: 0px;\">导出全部</button>\n    </div>\n    <table class=\"table table-hover\" ng-click=\"onListItemClick($event)\">\n        <thead>\n        <tr>\n            <th>ID</th>\n            <th>出售账号</th>\n            <th>出售信用分</th>\n            <th>手续费</th>\n            <th>出售时间</th>\n            <th>购买时间</th>\n            <th>确认时间</th>\n            <th>交易状态</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr ng-repeat=\"it in orderList\">\n            <td>{{it.orderId}}</td>\n            <td>{{it.username}}</td>\n            <td>{{it.pointAmount}}</td>\n            <td>{{it.fee}}</td>\n            <td>{{it.createTime}}</td>\n            <td>{{it.buyTime}}</td>\n            <td>{{it.confirmTime}}</td>\n            <td>{{it.status}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"order_sale_new.html","route":"/order_sale_new","template":"<div ng-controller=\"order_sale_new\">\n\t<div style=\"position: relative;\">\n        <button class=\"btn btn-success\" ng-click=\"exportExcelForPage()\" style=\"margin: 10px;\">导出本页</button>\n\t\t<button class=\"btn btn-success\" ng-click=\"exportExcelForAll()\" style=\"margin: 0px;\">导出全部</button>\n    </div>\n    <table class=\"table table-hover\">\n        <thead>\n        <tr>\n            <th>ID</th>\n            <th>出售账号</th>\n\t\t\t<th>姓名</th>\n            <th>手机号</th>\n\t\t\t<th>银行卡</th>\n            <th>开户行</th>\n            <th>出售信用分</th>\n\t\t\t<th>人民币</th>\n            <th>手续费</th>\n            <th>出售时间</th>\n            <!--<th>撤销时间</th>\n            <th>购买时间</th>-->\n            <th>确认时间</th>\n            <!--<th>交易状态</th>-->\n\t\t\t<th>操作</th>\n        </tr>\n        </thead>\n        <tbody ng-model=\"admin_username\">\n        <tr ng-repeat=\"it in orderList\">\n            <td>{{it.orderId}}</td>\n\t\t\t<td ng-click=\"showSaler($index)\">{{it.username}}</td>\n\t\t\t<td>{{it.name}}</td>\n\t\t\t<td>{{it.mobile}}</td>\n            <td>{{it.bankcard}}</td>\n            <td>{{it.bankAddress}}</td>\n            <td>{{it.pointAmount}}</td>\n\t\t\t<td>{{it.pointAmount*7}}</td>\n            <td>{{it.fee}}</td>\n            <td>{{it.createTime}}</td>\n            <!--<td>{{it.cancelTime}}</td>\n            <td>{{it.buyTime}}</td>-->\n            <td>{{it.confirmTime}}</td>\n            <!--<td>{{it.status}}</td>-->\n\t\t\t<td ng-if=\"admin_username == 'admin'\">\n                <button ng-click=\"onListItemClick($event, $index)\" class=\"btn btn-danger btn-xs\">回收</button>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n\n\t\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"order_sale_notfinish.html","route":"/order_sale_notfinish","template":"<div ng-controller=\"order_sale_notfinish\">\n    <table class=\"table table-hover\" ng-click=\"onListItemClick($event)\">\n        <thead>\n        <tr>\n            <th>ID</th>\n            <th>出售账号</th>\n            <th>出售信用分</th>\n            <th>手续费</th>\n            <th>出售时间</th>\n            <th>购买时间</th>\n            <th>撤销时间</th>\n            <th>交易状态</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr ng-repeat=\"it in orderList\">\n            <td>{{it.orderId}}</td>\n            <td>{{it.username}}</td>\n            <td>{{it.pointAmount}}</td>\n            <td>{{it.fee}}</td>\n            <td>{{it.createTime}}</td>\n            <td>{{it.buyTime}}</td>\n            <td>{{it.cancelTime}}</td>\n            <td>{{it.status}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"order_sale_sale.html","route":"/order_sale_sale","template":"<div ng-controller=\"order_sale_sale\">\n    <table class=\"table table-hover\">\n        <thead>\n        <tr>\n            <th>ID</th>\n            <th>出售账号</th>\n            <th>出售信用分</th>\n            <th>手续费</th>\n            <th>出售时间</th>\n            <th>撤销时间</th>\n            <th>购买时间</th>\n            <th>确认时间</th>\n            <th>交易状态</th>\n\t\t\t<th>操作</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr ng-repeat=\"it in orderList\">\n            <td>{{it.orderId}}</td>\n            <td>{{it.username}}</td>\n            <td>{{it.pointAmount}}</td>\n            <td>{{it.fee}}</td>\n            <td>{{it.createTime}}</td>\n            <td>{{it.cancelTime}}</td>\n            <td>{{it.buyTime}}</td>\n            <td>{{it.confirmTime}}</td>\n            <td>{{it.status}}</td>\n\t\t\t<td>\n                <button ng-click=\"onListItemClick($event, $index)\" class=\"btn btn-danger btn-xs\">回收</button>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"setting_card.html","route":"/setting_card","template":"<style>\n    .app-form input {\n        width: 100px;\n        height: 24px;\n    }\n\n    .app-form label {\n        width: 50px;\n    }\n</style>\n\n<div ng-controller=\"setting\">\n    <form name=\"form\" class=\"app-form\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n        <div>\n            <div>会员卡设置</div>\n            <div style=\"margin-top: 14px;\" class=\"clearfix\">\n                <div class=\"col-xs-4\">\n                    <label>普卡: </label>\n                    <input type=\"number\" ng-model=\"setting.HuiYuan.PuKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>金卡: </label>\n                    <input type=\"number\" ng-model=\"setting.HuiYuan.JinKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>白金卡: </label>\n                    <input type=\"number\" ng-model=\"setting.HuiYuan.BaiJinKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>钻石卡: </label>\n                    <input type=\"number\" ng-model=\"setting.HuiYuan.ZuanShiKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>黑钻卡: </label>\n                    <input type=\"number\" ng-model=\"setting.HuiYuan.HeiZuanKa\" required>\n                </div>\n            </div>\n        </div>\n\n        <div ng-model=\"admin_username\" ng-if=\"admin_username == 'admin'\">\n            <button class=\"btn btn-default\" ng-disabled=\"form.$invalid\" type=\"submit\">保存设置</button>\n        </div>\n    </form>\n</div>"},{"url":"setting_fee.html","route":"/setting_fee","template":"<style>\n    .app-form input {\n        width: 100px;\n        height: 24px;\n    }\n\n    .app-form label {\n        width: 50px;\n    }\n</style>\n\n<div ng-controller=\"setting\">\n    <form name=\"form\" class=\"app-form\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n        <div>\n            <div>手续费设置</div>\n            <div style=\"margin-top: 14px;\" class=\"clearfix\">\n                <div class=\"col-xs-4\">\n                    <label>转让: </label>\n                    <input type=\"number\" ng-model=\"setting.ShouXuFei.ZhuanRang\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>挂单: </label>\n                    <input type=\"number\" ng-model=\"setting.ShouXuFei.GuaDan\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>信用分转绩点: </label>\n                    <input type=\"number\" ng-model=\"setting.ShouXuFei.PointToJidian\" required>\n                </div>\n            </div>\n        </div>\n\n        <div ng-model=\"admin_username\" ng-if=\"admin_username == 'admin'\">\n            <button class=\"btn btn-default\" ng-disabled=\"form.$invalid\" type=\"submit\">保存设置</button>\n        </div>\n    </form>\n</div>"},{"url":"setting_reward.html","route":"/setting_reward","template":"<style>\n    .app-form input {\n        width: 100px;\n        height: 24px;\n    }\n\n    .app-form label {\n        width: 50px;\n    }\n</style>\n\n<div ng-controller=\"setting\">\n    <form name=\"form\" class=\"app-form\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n        <div>\n            <div>拆分率</div>\n            <div style=\"margin-top: 14px;\" class=\"clearfix\">\n                <div class=\"col-xs-4\">\n                    <label>普卡: </label>\n                    <input type=\"number\" ng-model=\"setting.ChaiFenLv.PuKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>金卡: </label>\n                    <input type=\"number\" ng-model=\"setting.ChaiFenLv.JinKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>白金卡: </label>\n                    <input type=\"number\" ng-model=\"setting.ChaiFenLv.BaiJinKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>钻石卡: </label>\n                    <input type=\"number\" ng-model=\"setting.ChaiFenLv.ZuanShiKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>黑钻卡: </label>\n                    <input type=\"number\" ng-model=\"setting.ChaiFenLv.HeiZuanKa\" required>\n                </div>\n            </div>\n        </div>\n\n        <div style=\"margin-top: 28px;\">\n            <div>分享奖励</div>\n            <div style=\"margin-top: 14px;\" class=\"clearfix\">\n                <div class=\"col-xs-4\">\n                    <label>普卡: </label>\n                    <input type=\"number\" ng-model=\"setting.JiangLi.ZhiTui.PuKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>金卡: </label>\n                    <input type=\"number\" ng-model=\"setting.JiangLi.ZhiTui.JinKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>白金卡: </label>\n                    <input type=\"number\" ng-model=\"setting.JiangLi.ZhiTui.BaiJinKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>钻石卡: </label>\n                    <input type=\"number\" ng-model=\"setting.JiangLi.ZhiTui.ZuanShiKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>黑钻卡: </label>\n                    <input type=\"number\" ng-model=\"setting.JiangLi.ZhiTui.HeiZuanKa\" required>\n                </div>\n            </div>\n        </div>\n\n        <div style=\"margin-top: 28px;\">\n            <div>平衡奖励</div>\n            <div style=\"margin-top: 14px;\" class=\"clearfix\">\n                <div class=\"col-xs-4\">\n                    <label>普卡: </label>\n                    <input type=\"number\" ng-model=\"setting.JiangLi.DuiPeng.PuKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>金卡: </label>\n                    <input type=\"number\" ng-model=\"setting.JiangLi.DuiPeng.JinKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>白金卡: </label>\n                    <input type=\"number\" ng-model=\"setting.JiangLi.DuiPeng.BaiJinKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>钻石卡: </label>\n                    <input type=\"number\" ng-model=\"setting.JiangLi.DuiPeng.ZuanShiKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>黑钻卡: </label>\n                    <input type=\"number\" ng-model=\"setting.JiangLi.DuiPeng.HeiZuanKa\" required>\n                </div>\n            </div>\n            <div style=\"margin-top: 14px;\" class=\"clearfix\">\n                <div class=\"col-xs-6\">\n                    <label style=\"width: 140px;\">超过20代后奖励减半: </label>\n                    <input type=\"checkbox\" ng-model=\"setting.JiangLi.DuiPeng.TreeLevel20JianBan\" style=\"width: 20px; height: 20px; border: none;position: relative;bottom: -5px;\">\n                </div>\n            </div>\n        </div>\n\n        <div style=\"margin-top: 28px;\">\n            <div>管理津贴</div>\n            <div style=\"margin-top: 14px;\" class=\"clearfix\">\n                <div class=\"col-xs-4\">\n                    <label>普卡: </label>\n                    <input type=\"number\" ng-model=\"setting.JiangLi.GuanLi.PuKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>金卡: </label>\n                    <input type=\"number\" ng-model=\"setting.JiangLi.GuanLi.JinKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>白金卡: </label>\n                    <input type=\"number\" ng-model=\"setting.JiangLi.GuanLi.BaiJinKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>钻石卡: </label>\n                    <input type=\"number\" ng-model=\"setting.JiangLi.GuanLi.ZuanShiKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>黑钻卡: </label>\n                    <input type=\"number\" ng-model=\"setting.JiangLi.GuanLi.HeiZuanKa\" required>\n                </div>\n            </div>\n        </div>\n\n        <div style=\"margin-top: 28px;\">\n            <div>团队津贴</div>\n            <div style=\"margin-top: 14px;\" class=\"clearfix\">\n                <div class=\"col-xs-4\">\n                    <label>普卡: </label>\n                    <input ng-model=\"setting.JiangLi.JianDian.PuKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>金卡: </label>\n                    <input ng-model=\"setting.JiangLi.JianDian.JinKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>白金卡: </label>\n                    <input ng-model=\"setting.JiangLi.JianDian.BaiJinKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>钻石卡: </label>\n                    <input ng-model=\"setting.JiangLi.JianDian.ZuanShiKa\" required>\n                </div>\n                <div class=\"col-xs-4\">\n                    <label>黑钻卡: </label>\n                    <input ng-model=\"setting.JiangLi.JianDian.HeiZuanKa\" required>\n                </div>\n            </div>\n        </div>\n\n        <div ng-model=\"admin_username\" ng-if=\"admin_username == 'admin'\">\n            <button class=\"btn btn-default\" ng-disabled=\"form.$invalid\" type=\"submit\">保存设置</button>\n        </div>\n    </form>\n</div>"},{"url":"setting_site.html","route":"/setting_site","template":"<style>\n    .app-form input {\n        width: 200px;\n        height: 24px;\n    }\n\n    .app-form label {\n        width: 100px;\n    }\n</style>\n\n<div ng-controller=\"setting\">\n    <form name=\"form\" class=\"app-form\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n        <div>\n            <div>网站维护</div>\n            <div style=\"margin-top: 14px;\">\n                <div>\n                    <label>是否维护: </label>\n                    <input type=\"checkbox\" ng-model=\"setting.WangZhanWeiHu.ShiFouWeiHu\" style=\"width: 14px;height: 14px;\">\n                </div>\n                <div>\n                    <label>维护时间: </label>\n                    <input ng-model=\"setting.WangZhanWeiHu.GuanBiShiJian\" required>\n                </div>\n                <div>\n                    <label style=\"vertical-align: top\">维护提示: </label>\n                    <textarea ng-model=\"setting.WangZhanWeiHu.GuanBiTiShi\" required></textarea>\n                </div>\n            </div>\n        </div>\n\n        <div ng-model=\"admin_username\" ng-if=\"admin_username == 'admin'\">\n            <button class=\"btn btn-default\" ng-disabled=\"form.$invalid\" type=\"submit\">保存设置</button>\n        </div>\n    </form>\n</div>"},{"url":"signin.html","route":"/signin","template":"<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <title>登录</title>\n        <link href=\"libs/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n        <script src=\"libs/angular.min.js\"></script>\n        <script src=\"libs/jquery-3.2.1.min.js\"></script>\n        <script src=\"libs/jquery-md5.js\"></script>\n        <script src=\"libs/juicer-min.js\"></script>\n    </head>\n\n    <body ng-app=\"signinApp\" ng-controller=\"signin\">\n        <div style=\"width: 250px; margin: auto;padding-top: 100px;\">\n            <div class=\"login-panel panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">管理员登录</h3>\n                </div>\n                <div class=\"panel-body\">\n                    <form name=\"form\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n                        <div class=\"form-group\">\n                            <input ng-model=\"formdata.username\" class=\"form-control\" placeholder=\"用户名\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <input ng-model=\"formdata.passwd\" class=\"form-control\" placeholder=\"密码\" type=\"password\" required>\n                        </div>\n                        <button type=\"submit\" ng-disabled=\"form.$invalid\" class=\"btn btn-success btn-block\">登录</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </body>\n</html>\n\n<script src=\"libs/__code__.js\"></script>"},{"url":"transfer_list.html","route":"/transfer_list","template":"<div ng-controller=\"transfer_list\">\n    <table class=\"table table-hover\" ng-click=\"onListItemClick($event)\">\n        <thead>\n        <tr>\n            <th>ID</th>\n            <th>转出账号</th>\n            <th>转入账号</th>\n            <th>信用分</th>\n            <th>转让时间</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr ng-repeat=\"it in transferList\">\n            <td>{{it.transferId}}</td>\n            <td>{{it.userAccount}}</td>\n            <td>{{it.receiverAccount}}</td>\n            <td>{{it.amount}}</td>\n            <td>{{it.createTime}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"user_add.html","route":"/user_add","template":"<style>\n</style>\n\n<div ng-controller=\"user_add\">\n    <form name=\"form\" class=\"app-form\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n        <div>\n            <label>用户名*</label>\n            <input ng-model=\"formdata.username\" placeholder=\"请输入用户名\" required>\n        </div>\n        <div>\n            <label>信用分*</label>\n            <input ng-model=\"formdata.points\" placeholder=\"请输入信用分\" ng-pattern=\"/^\\d*$/\" required>\n        </div>\n        <div>\n            <label>会员等级*</label>\n            <select ng-model=\"formdata.level\" ng-init=\"formdata.level='1'\">\n                <option value=\"1\">普卡</option>\n                <option value=\"2\">金卡</option>\n                <option value=\"3\">白金卡</option>\n                <option value=\"4\">钻石卡</option>\n                <option value=\"5\">黑钻卡</option>\n            </select>\n        </div>\n        <div>\n            <label>放置位置*</label>\n            <input ng-model=\"formdata.place\" placeholder=\"请输入放置位置\" required>\n        </div>\n        <div>\n            <label>放置节点*</label>\n            <select ng-model=\"formdata.isLeft\" ng-init=\"formdata.isLeft='1'\">\n                <option value=\"1\">左边</option>\n                <option value=\"0\">右边</option>\n            </select>\n        </div>\n        <div>\n            <label>手机*</label>\n            <input ng-model=\"formdata.mobile\" placeholder=\"请输入手机\" required>\n        </div>\n        <div>\n            <label>姓名*</label>\n            <input ng-model=\"formdata.name\" placeholder=\"请输入姓名\" required>\n        </div>\n        <div>\n            <label>身份证*</label>\n            <input ng-model=\"formdata.idcard\" placeholder=\"请输入身份证\" required>\n        </div>\n        <div>\n            <label>银行卡*</label>\n            <input ng-model=\"formdata.bankcard\" placeholder=\"请输入银行卡\" required>\n        </div>\n        <div>\n            <label>开户行</label>\n            <input ng-model=\"formdata.bankAddress\" placeholder=\"请输入开户行\">\n        </div>\n        <div>\n            <label>城市*</label>\n            <input ng-model=\"formdata.city\" placeholder=\"请输入城市\" required>\n        </div>\n        <div>\n            <label>微信</label>\n            <input ng-model=\"formdata.wechat\" placeholder=\"请输入微信\">\n        </div>\n        <div>\n            <label>支付宝</label>\n            <input ng-model=\"formdata.alipay\" placeholder=\"请输入支付宝\">\n        </div>\n        <div ng-model=\"admin_username\" ng-if=\"admin_username == 'admin'\">\n            <label>&nbsp;</label>\n            <button class=\"btn btn-default\" ng-disabled=\"form.$invalid\" type=\"submit\">提交发布</button>\n            <span>*代表必填字段</span>\n        </div>\n    </form>\n</div>"},{"url":"user_list_inactive.html","route":"/user_list_inactive","template":"<div ng-controller=\"user_list_inactive\">\n    <table class=\"table table-hover\" ng-click=\"onListItemClick($event)\">\n        <thead>\n        <tr>\n            <th>账号</th>\n            <th>手机</th>\n            <th>注册时间</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr ng-repeat=\"it in userList\">\n            <td>{{it.username}}</td>\n            <td>{{it.mobile}}</td>\n            <td>{{it.createTime}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"user_list.html","route":"/user_list","template":"<div ng-controller=\"user_list\">\n    <table class=\"table table-hover\">\n        <thead>\n        <tr>\n            <th>账号</th>\n\t\t\t<th>推荐人ID</th>\n            <th>手机</th>\n            <th>信用分</th>\n            <!--<th>绩点</th>-->\n            <th>复投币</th>\n            <th>购物积分</th>\n            <th>注册时间</th>\n            <th>操作</th>\n        </tr>\n        </thead>\n        <tbody ng-model=\"admin_username\">\n        <tr ng-repeat=\"it in listdata.userList\">\n            <td>{{it.username}}</td>\n\t\t\t<td ng-click=\"showInviter(it.inviter)\">{{it.inviter}}</td>\n            <td>{{it.mobile}}</td>\n            <td>{{it.points}}</td>\n            <!--<td>{{it.jidian}}</td>-->\n            <td>{{it.reinvestPoints}}</td>\n            <td>{{it.shopPoints}}</td>\n            <td>{{it.createTime}}</td>\n            <td ng-if=\"admin_username == 'admin'\">\n                <button ng-click=\"onListItemClick($event, $index)\" class=\"btn btn-success btn-xs\">奖励设置</button>\n                <button ng-click=\"onListItemClick($event, $index)\" class=\"btn btn-default btn-xs\">直推人数</button>\n                <button ng-click=\"onListItemClick($event, $index)\" class=\"btn btn-danger btn-xs\">删除</button>\n                <button ng-click=\"onListItemClick($event, $index)\" class=\"btn btn-danger btn-xs\">修改</button>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div style=\"position: relative;\">\n        <ul class=\"pagination\" style=\"margin: 0px; position: absolute; right: 40px;top: 0px;\"></ul>\n    </div>\n\n</div>"},{"url":"user_relation.html","route":"/user_relation","template":"<style>\n    .app-org {\n        padding: 14px;\n        overflow: auto;\n        position: absolute;\n        left: 0px;\n        right: 0px;\n        top: 0px;\n        bottom: 0px;\n    }\n\n    .app-org-search {\n        background-color: #ffffff;\n        width: 290px;\n        padding: 8px;\n        box-shadow: 0px 0px 5px #aaaaaa;\n    }\n\n    .app-org-search > div {\n        height: 30px;\n    }\n\n    .app-org-search input {\n        width: 170px;\n        height: 28px;\n        background-color: #eeeeee;\n        padding: 0px 8px 0px 8px;\n        border: none;\n    }\n\n    .app-org-search button {\n        height: 28px;\n    }\n\n    .jOrgChart {\n        margin: 10px;\n        padding: 0px;\n    }\n\n    .jOrgChart .node {\n        font-size: 14px;\n        background-color: #ffffff;\n        border-radius: 5px;\n        border: 1px solid #23C36B;\n        color: #F38630;\n        box-shadow: 0px 0px 5px #23C36B;\n    }\n\n    .member {\n    }\n\n    .member > div:nth-child(1) {\n        background-color: #23C36B;\n        color: #ffffff;\n        line-height: 30px;\n        font-size: 14px;\n    }\n\n    .member > div:nth-child(2) {\n        margin-top: 6px;\n        color: #000000;\n        font-size: 12px;\n    }\n\n    .member > div:nth-child(3) {\n        margin-top: 4px;\n        color: #000000;\n        font-size: 12px;\n    }\n\n    .member > div:nth-child(4) {\n        margin-top: 4px;\n        color: #000000;\n        font-size: 12px;\n    }\n    .member > div:nth-child(5) {\n        margin-top: 4px;\n        color: #000000;\n        font-size: 12px;\n    }\n</style>\n\n<div ng-controller=\"user_relation\" class=\"app-org\">\n\n    <form class=\"app-org-search\" name=\"form\" class=\"form-horizontal\" ng-submit=\"search(form.$valid)\" novalidate>\n        <div>团队组织结构</div>\n        <div>\n            <input ng-model=\"account\" placeholder=\"输入搜索账号\" required=\"\"/>\n            <button type=\"submit\" ng-disabled=\"form.$invalid\" class=\"btn btn-primary btn-sm\">搜索</button>\n        </div>\n    </form>\n\n    <ul id=\"org\" style=\"display:none\"></ul>\n    <div id=\"chart\" class=\"orgChart\"></div>\n</div>"},{"url":"user_update.html","route":"/user_update","template":"<style>\n    .app-form {\n        width: 400px;\n    }\n\n    .app-form > div {\n        margin-top: 20px;\n    }\n\n    .app-form > div > div:nth-child(1) {\n        width: 80px;\n        display: inline-block;\n        text-align: right;\n        margin-right: 20px;\n    }\n\n    .app-form > div > div:nth-child(3) {\n        width: 10px;\n        text-align: right;\n        display: inline-block;\n    }\n\n    .app-form > div > input {\n        width: 250px;\n        height: 32px;\n        padding: 0px 8px 0px 8px;\n    }\n</style>\n\n<div ng-controller=\"user_update\">\n    <form class=\"app-form\" name=\"form\" ng-submit=\"submitForm(form.$valid)\" novalidate>\n        <div>\n            <div>用户名</div>\n            <input ng-model=\"formdata.username\" disabled=\"true\"/>\n            <div>*</div>\n        </div>\n        <div>\n            <div>手机号码</div>\n            <input ng-model=\"formdata.mobile\" placeholder=\"请输入手机号码\" required/>\n            <div>*</div>\n        </div>\n        <div>\n            <div>姓名</div>\n            <input id=\"focus1\" ng-model=\"formdata.name\" placeholder=\"请输入真实姓名\" required/>\n            <div>*</div>\n        </div>\n        <div>\n            <div>身份证</div>\n            <input ng-model=\"formdata.idcard\" placeholder=\"请输入有效身份证\" required/>\n            <div>*</div>\n        </div>\n        <div>\n            <div>银行卡</div>\n            <input ng-model=\"formdata.bankcard\" placeholder=\"请输入有效银行卡\" required/>\n            <div>*</div>\n        </div>\n        <div>\n            <div>要转入的信用分</div>\n            <input ng-model=\"formdata.points\" placeholder=\"请输入此次要转入的信用分\" required/>\n            <div>*</div>\n        </div>\n        <div>\n            <div>所在城市</div>\n            <input ng-model=\"formdata.city\" placeholder=\"请输入所在城市\" required/>\n            <div>*</div>\n        </div>\n        <div>\n            <div>开户行</div>\n            <input ng-model=\"formdata.bankAddress\" placeholder=\"请输入开户行\" required/>\n            <div>*</div>\n        </div>\n        <div>\n            <div>微信</div>\n            <input ng-model=\"formdata.wechat\" placeholder=\"请输入微信\"/>\n            <div>&nbsp;</div>\n        </div>\n        <div>\n            <div>支付宝</div>\n            <input ng-model=\"formdata.alipay\" placeholder=\"请输入支付宝\"/>\n            <div>&nbsp;</div>\n        </div>\n        <div>\n            <div>密码</div>\n            <input type=\"password\" ng-model=\"formdata.pwd1\" placeholder=\"请输入登录密码\"/>\n            <div>&nbsp;</div>\n        </div>\n        <div>\n            <div>二次密码</div>\n            <input type=\"password\" ng-model=\"formdata.pwd2\" placeholder=\"请输入二次密码\"/>\n            <div>&nbsp;</div>\n        </div>\n        <!--<div>-->\n        <!--<div style=\"vertical-align: top; padding-top: 6px;\">上传身份证</div>-->\n        <!--<div style=\"display: inline-block; width: 250px;\">-->\n        <!--<input ng-model=\"formdata.idcardUrl\" style=\"display: none;\" required>-->\n        <!--<input id=\"uploadFile\" type=\"file\" style=\"display: none;\" accept=\".png,.jpg\">-->\n        <!--<button ng-click=\"upload()\" type=\"button\" class=\"btn btn-primary\" style=\"width: 250px;\">请上传手持身份证照片</button>-->\n        <!--<div style=\"color: red; padding-top: 4px;\">图片大小不能超过3M, 仅限png,jpg格式</div>-->\n        <!--</div>-->\n        <!--<div style=\"vertical-align: top; padding-top: 6px;\">*</div>-->\n        <!--</div>-->\n        <div>\n            <div>&nbsp;</div>\n            <button type=\"submit\" ng-disabled=\"form.$invalid\" class=\"btn btn-success\">保存修改</button>\n        </div>\n    </form>\n</div>"}]);
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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	app.controller("change_list", function($scope, $rootScope, $location, $uibModal)
	{
	    var pageNo = 1;
	    var pageSize = 20;

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: pageNo,
	            pageSize: pageSize,
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.admin_changeList_v1, param, cfg, function(data, code, msg)
	        {
	            $scope.changeList = data.changeList;
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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	app.controller("data_daily_balance", function($scope, $rootScope, $location, $uibModal)
	{

	    $scope.getData = function()
	    {
	        var param = {
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.count_balanceCount_v1, param, cfg, function(data, code, msg)
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
							label: '每日平衡奖励数据(默认显示最近30天)',
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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	app.controller("data_daily_dymanic", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.getData = function()
	    {
	        var param = {
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.count_dynamicCount_v1, param, cfg, function(data, code, msg)
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
							label: '每日动态奖励数据(默认显示最近30天)',
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

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	app.controller("data_daily_manage", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.getData = function()
	    {
	        var param = {
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.count_manageCount_v1, param, cfg, function(data, code, msg)
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
							label: '每日管理津贴数据(默认显示最近30天)',
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

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	app.controller("data_daily_register", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.getData = function()
	    {
	        var param = {
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.count_registerCount_v1, param, cfg, function(data, code, msg)
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
							label: '每日新注册会员数据(默认显示最近30天)',
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

/***/ }),
/* 7 */
/***/ (function(module, exports) {

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

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	app.controller("data_daily_static", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.getData = function()
	    {
	        var param = {
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.count_staticCount_v1, param, cfg, function(data, code, msg)
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
							label: '每日静态奖励数据(默认显示最近30天)',
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

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	app.controller("data_daily_team", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.getData = function()
	    {
	        var param = {
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.count_teamCount_v1, param, cfg, function(data, code, msg)
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
							label: '每日团队津贴数据(默认显示最近30天)',
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

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	app.controller("data_daily_withdrawals", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.getData = function()
	    {
	        var param = {
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.count_withdrawalsCount_v1, param, cfg, function(data, code, msg)
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
							label: '每日提现数据(默认显示最近30天)',
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

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	app.controller("feedback_list", function($scope, $rootScope, $location, $uibModal)
	{
	    var pageNo = 1;
	    var pageSize = 20;
		$scope.admin_username=localStorage.getItem(T.common.cfg.key + ".username");
	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: pageNo,
	            pageSize: pageSize,
	            isDealed: T.common.util.getParameter("deal")
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.admin_feedbackList_v1, param, cfg, function(data, code, msg)
	        {
	            for(var i = 0; i < data.feedbackList.length; i++)
	            {
	                data.feedbackList[i].display = param.isDealed === 0 ? "block-inline" : "none";
	            }
	            $scope.feedbackList = data.feedbackList;
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
	                case "标记已处理":
	                {
	                    if(confirm("确定要标记已处理吗?"))
	                    {
	                        var param = {
	                            id: $scope.feedbackList[index].feedbackId
	                        };
	                        var cfg = {
	                            mask: true
	                        };
	                        T.common.ajax.request(Api.admin_feedbackDeal_v1, param, cfg, function()
	                        {
	                            T.common.ui.toast("处理成功");
	                            $scope.getData();
	                        });
	                    }
	                    break;
	                }
	                case "删除":
	                {
	                    if(confirm("确定要删除吗?"))
	                    {
	                        var param = {
	                            id: $scope.feedbackList[index].feedbackId
	                        };
	                        var cfg = {
	                            mask: true
	                        };
	                        T.common.ajax.request(Api.admin_feedbackDelete_v1, param, cfg, function()
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

/***/ }),
/* 12 */
/***/ (function(module, exports) {

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

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	app.controller("main", function($scope, $rootScope, $location, $uibModal)
	{
	    $('#username').html("管理员: " + localStorage.getItem(T.common.cfg.key + ".username"));
	    $('#signout').bind("click", function()
	    {
	        T.common.user.signout();
	        location.href = "signin.html";
	    });

	    // 读取平台信用分
	    T.common.ajax.request(Api.admin_pointSum_v1, null, null, function(data, code, msg)
	    {
	        $("#pointSum").html("全平台信用分: " + data.points);
	    });
	});

/***/ }),
/* 14 */
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
	                var loadingDom = '<div id="'+ maskId +'">' +
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
/* 15 */
/***/ (function(module, exports) {

	app.controller("notice_add", function($scope, $rootScope, $location, $uibModal)
	{
		$scope.ue = UE.getEditor('editor');
		$scope.admin_username=localStorage.getItem(T.common.cfg.key + ".username");
	    $scope.submitForm = function(isValid)
	    {
	        if(isValid)
	        {
				$scope.formdata.content=UE.getEditor('editor').getContent();
	            var cfg = {
	                mask: true
	            };
	            T.common.ajax.request(Api.admin_noticeCreate_v1, $scope.formdata, cfg, function(data, code, msg)
	            {
	                T.common.ui.toast("发布成功");
	                $scope.formdata = {};
	                $scope.$apply();
	            });
	        }
	    };
	});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	app.controller("notice_info", function($scope, $rootScope, $location)
	{
	    var param = {
	        id: T.common.util.getParameter("id")
	    };
	    var cfg = {
	        mask: true
	    };
	    T.common.ajax.request(Api.admin_noticeInfo_v1, param, cfg, function(data, code, msg)
	    {
	        $scope.data = data.notice;
	        $scope.$apply();
	    });
	});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

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

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	app.controller("order_buy_all", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 20,
	        totalPages: 1,
	    };

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize,
	            orderStatus: "all"
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.admin_orderBuyList_v1, param, cfg, function(data, code, msg)
	        {
	            $scope.orderList = data.orderBuyList;
	            $scope.listdata.totalPages = data.totalPages;
				$scope.$apply();
	            $scope.showPages();
	        });
	    };

		$scope.onListItemClick = function($event, index)
	    {
	        var btn = $event.target.innerHTML;
	        switch(btn)
	        {
	            case "充值到账":
	            {
	                if(confirm("确定要充值到账吗?"))
	                {
	                    var param = {
	                        orderId: $scope.orderList[index].orderId
	                    };
	                    var cfg = {
	                        mask: true,
	                        care: true
	                    };
	                    T.common.ajax.request(Api.admin_orderBuyFinish_v1, param, cfg, function(data, code, msg)
	                    {
	                        switch(code)
	                        {
	                            case 200:
	                            {
	                                T.common.ui.toast("到账成功");
	                                $scope.getData();
	                                break;
	                            }
	                            default:
	                            {
	                                T.common.ui.toast(msg);
	                            }
	                        }
	                    });
	                }
	                break;
	            }
	        }
	    };
		
		$scope.exportOut = function(fileName,data)
		{
			if(!angular.isArray(data)){
				console.log("文件出错!");
				return;
			}
			return alasql('SELECT * INTO XLSX("'+fileName+'.xlsx",{header:true}) FROM ?',[data]);
		}
		
		//导出excel:当前页
		$scope.exportExcelForPage = function()
		{
			var orderData=[];
			if($scope.orderList&&$scope.orderList.length>0){
				for(var i=0;i<$scope.orderList.length;i++){
					var order=$scope.orderList[i];
					orderData.push({
						'账号':order.username,
							'姓名':order.name,
							'手机号':order.mobile,
							'银行卡':order.bankcard,
							'开户行':order.bankAddress,
							'信用分':order.pointAmount,
							'人民币':order.pointAmount*7,
							'手续费':order.fee,
							'出售时间':order.createTime,
							'购买时间':order.buyTime,
					});
				}
			}
			$scope.exportOut('全部充值记录-第'+$scope.listdata.pageNo+"页",orderData);
		}
		//导出excel:全部
		$scope.exportExcelForAll = function()
		{
			var param = {
	            pageNo: 1,
	            pageSize: 9999,
	            orderStatus: "all"
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.admin_orderBuyList_v1, param, cfg, function(data, code, msg)
	        {
	            var orderData=[];
				if(data.orderBuyList&&data.orderBuyList.length>0){
					for(var i=0;i<data.orderBuyList.length;i++){
						var order=data.orderBuyList[i];
						orderData.push({
							'账号':order.username,
							'姓名':order.name,
							'手机号':order.mobile,
							'银行卡':order.bankcard,
							'开户行':order.bankAddress,
							'信用分':order.pointAmount,
							'人民币':order.pointAmount*7,
							'手续费':order.fee,
							'出售时间':order.createTime,
							'购买时间':order.buyTime,
						});
					}
				}
				$scope.exportOut('全部充值记录',orderData);
	        });
		}
		
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
		
	    /*$scope.onListItemClick = function($event)
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
	    };*/

	    $scope.getData();
	});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	app.controller("order_buy_finish", function($scope, $rootScope, $location, $uibModal)
	{
	    var pageNo = 1;
	    var pageSize = 20;

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: pageNo,
	            pageSize: pageSize,
	            orderStatus: "finish"
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.admin_orderBuyList_v1, param, cfg, function(data, code, msg)
	        {
	            $scope.orderList = data.orderBuyList;
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

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	app.controller("order_buy_notfinish", function($scope, $rootScope, $location, $uibModal)
	{
	    var pageNo = 1;
	    var pageSize = 20;

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: pageNo,
	            pageSize: pageSize,
	            orderStatus: "notfinish"
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.admin_orderBuyList_v1, param, cfg, function(data, code, msg)
	        {
	            $scope.orderList = data.orderBuyList;
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

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	app.controller("order_buy_sale", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 20,
	        totalPages: 1,
	    };
		$scope.admin_username=localStorage.getItem(T.common.cfg.key + ".username");
	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize,
	            orderStatus: "notfinish"
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.admin_orderBuyList_v1, param, cfg, function(data, code, msg)
	        {
	            $scope.orderList = data.orderBuyList;
	            $scope.listdata.totalPages = data.totalPages;
				$scope.$apply();
	            $scope.showPages();
	        });
	    };
		
		$scope.showSaler = function(index, callback)
	    {
	        var item = $scope.orderList[index];
	        var param = {
	            userId: item.buyer
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

		$scope.onListItemClick = function($event, index)
	    {
	        var btn = $event.target.innerHTML;
	        switch(btn)
	        {
	            case "充值到账":
	            {
	                if(confirm("确定要充值到账吗?"))
	                {
	                    var param = {
	                        orderId: $scope.orderList[index].orderId
	                    };
	                    var cfg = {
	                        mask: true,
	                        care: true
	                    };
	                    T.common.ajax.request(Api.admin_orderBuyFinish_v1, param, cfg, function(data, code, msg)
	                    {
	                        switch(code)
	                        {
	                            case 200:
	                            {
	                                T.common.ui.toast("到账成功");
	                                $scope.getData();
	                                break;
	                            }
	                            default:
	                            {
	                                T.common.ui.toast(msg);
	                            }
	                        }
	                    });
	                }
	                break;
	            }
	        }
	    };
		
		$scope.exportOut = function(fileName,data)
		{
			if(!angular.isArray(data)){
				console.log("文件出错!");
				return;
			}
			return alasql('SELECT * INTO XLSX("'+fileName+'.xlsx",{header:true}) FROM ?',[data]);
		}
		
		//导出excel:当前页
		$scope.exportExcelForPage = function()
		{
			var orderData=[];
			if($scope.orderList&&$scope.orderList.length>0){
				for(var i=0;i<$scope.orderList.length;i++){
					var order=$scope.orderList[i];
					orderData.push({
						'账号':order.username,
							'姓名':order.name,
							'手机号':order.mobile,
							'银行卡':order.bankcard,
							'开户行':order.bankAddress,
							'信用分':order.pointAmount,
							'人民币':order.pointAmount*7,
							'手续费':order.fee,
							'出售时间':order.createTime,
							'购买时间':order.buyTime,
					});
				}
			}
			$scope.exportOut('新充值记录-第'+$scope.listdata.pageNo+"页",orderData);
		}
		//导出excel:全部
		$scope.exportExcelForAll = function()
		{
			var param = {
	            pageNo: 1,
	            pageSize: 9999,
	            orderStatus: "notfinish"
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.admin_orderBuyList_v1, param, cfg, function(data, code, msg)
	        {
	            var orderData=[];
				if(data.orderBuyList&&data.orderBuyList.length>0){
					for(var i=0;i<data.orderBuyList.length;i++){
						var order=data.orderBuyList[i];
						orderData.push({
							'账号':order.username,
							'姓名':order.name,
							'手机号':order.mobile,
							'银行卡':order.bankcard,
							'开户行':order.bankAddress,
							'信用分':order.pointAmount,
							'人民币':order.pointAmount*7,
							'手续费':order.fee,
							'出售时间':order.createTime,
							'购买时间':order.buyTime,
						});
					}
				}
				$scope.exportOut('新充值记录',orderData);
	        });
		}
		
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
		
	    /*$scope.onListItemClick = function($event)
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
	    };*/

	    $scope.getData();
	});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	app.controller("order_sale_all", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 20,
	        totalPages: 1,
	    };

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize,
	            orderStatus: "all"
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.admin_orderSaleList_v1, param, cfg, function(data, code, msg)
	        {
	            $scope.orderList = data.orderSaleList;
				$scope.listdata.totalPages = data.totalPages;
				$scope.$apply();
	            $scope.showPages();
	        });
	    };

	    $scope.onListItemClick = function($event, index)
	    {
	        var btn = $event.target.innerHTML;
	        switch(btn)
	        {
	            case "回收":
	            {
	                if(confirm("确定要回收该订单吗?"))
	                {
	                    var param = {
	                        orderId: $scope.orderList[index].orderId
	                    };
	                    var cfg = {
	                        mask: true,
	                        care: true
	                    };
	                    T.common.ajax.request(Api.admin_orderSaleFinish_v1, param, cfg, function(data, code, msg)
	                    {
	                        switch(code)
	                        {
	                            case 200:
	                            {
	                                T.common.ui.toast("回收成功");
	                                $scope.getData();
	                                break;
	                            }
	                            default:
	                            {
	                                T.common.ui.toast(msg);
	                            }
	                        }
	                    });
	                }
	                break;
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
		
		$scope.exportOut = function(fileName,data)
		{
			if(!angular.isArray(data)){
				console.log("文件出错!");
				return;
			}
			return alasql('SELECT * INTO XLSX("'+fileName+'.xlsx",{header:true}) FROM ?',[data]);
		}
		
		//导出excel:当前页
		$scope.exportExcelForPage = function()
		{
			var orderData=[];
			if($scope.orderList&&$scope.orderList.length>0){
				for(var i=0;i<$scope.orderList.length;i++){
					var order=$scope.orderList[i];
					orderData.push({
						'账号':order.username,
							'姓名':order.name,
							'手机号':order.mobile,
							'银行卡':order.bankcard,
							'开户行':order.bankAddress,
							'信用分':order.pointAmount,
							'人民币':order.pointAmount*7,
							'手续费':order.fee,
							'出售时间':order.createTime,
					});
				}
			}
			$scope.exportOut('全部提现记录-第'+$scope.listdata.pageNo+"页",orderData);
		}
		//导出excel:全部
		$scope.exportExcelForAll = function()
		{
			var param = {
	            pageNo: 1,
	            pageSize: 9999,
	            orderStatus: "all"
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.admin_orderSaleList_v1, param, cfg, function(data, code, msg)
	        {
	            var orderData=[];
				if(data.orderSaleList&&data.orderSaleList.length>0){
					for(var i=0;i<data.orderSaleList.length;i++){
						var order=data.orderSaleList[i];
						orderData.push({
							'账号':order.username,
							'姓名':order.name,
							'手机号':order.mobile,
							'银行卡':order.bankcard,
							'开户行':order.bankAddress,
							'信用分':order.pointAmount,
							'人民币':order.pointAmount*7,
							'手续费':order.fee,
							'出售时间':order.createTime,
						});
					}
				}
				$scope.exportOut('全部提现记录',orderData);
	        });
		}

	    $scope.getData();
	});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	app.controller("order_sale_finish", function($scope, $rootScope, $location, $uibModal)
	{
	     $scope.listdata = {
	        pageNo: 1,
	        pageSize: 20,
	        totalPages: 1,
	    };

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize,
	            orderStatus: "finish"
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.admin_orderSaleList_v1, param, cfg, function(data, code, msg)
	        {
	            $scope.orderList = data.orderSaleList;
	            $scope.listdata.totalPages = data.totalPages;
				$scope.$apply();
	            $scope.showPages();
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
		
		$scope.exportOut = function(fileName,data)
		{
			if(!angular.isArray(data)){
				console.log("文件出错!");
				return;
			}
			return alasql('SELECT * INTO XLSX("'+fileName+'.xlsx",{header:true}) FROM ?',[data]);
		}
		
		//导出excel:当前页
		$scope.exportExcelForPage = function()
		{
			var orderData=[];
			if($scope.orderList&&$scope.orderList.length>0){
				for(var i=0;i<$scope.orderList.length;i++){
					var order=$scope.orderList[i];
					orderData.push({
						'账号':order.username,
							'姓名':order.name,
							'手机号':order.mobile,
							'银行卡':order.bankcard,
							'开户行':order.bankAddress,
							'信用分':order.pointAmount,
							'人民币':order.pointAmount*7,
							'手续费':order.fee,
							'出售时间':order.createTime,
							'确认时间':order.confirmTime,
					});
				}
			}
			$scope.exportOut('已完成提现记录-第'+$scope.listdata.pageNo+"页",orderData);
		}
		//导出excel:全部
		$scope.exportExcelForAll = function()
		{
			var param = {
	            pageNo: 1,
	            pageSize: 9999,
	            orderStatus: "finish"
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.admin_orderSaleList_v1, param, cfg, function(data, code, msg)
	        {
	            var orderData=[];
				if(data.orderSaleList&&data.orderSaleList.length>0){
					for(var i=0;i<data.orderSaleList.length;i++){
						var order=data.orderSaleList[i];
						orderData.push({
							'账号':order.username,
							'姓名':order.name,
							'手机号':order.mobile,
							'银行卡':order.bankcard,
							'开户行':order.bankAddress,
							'信用分':order.pointAmount,
							'人民币':order.pointAmount*7,
							'手续费':order.fee,
							'出售时间':order.createTime,
							'确认时间':order.confirmTime,
						});
					}
				}
				$scope.exportOut('已完成提现记录',orderData);
	        });
		}

	    $scope.getData();
	});

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	app.controller("order_sale_new", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 20,
	        totalPages: 1,
	    };
		$scope.admin_username=localStorage.getItem(T.common.cfg.key + ".username");
	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize,
	            orderStatus: "new"
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.admin_orderSaleList_v1, param, cfg, function(data, code, msg)
	        {
	            $scope.orderList = data.orderSaleList;
	            $scope.listdata.totalPages = data.totalPages;
				$scope.$apply();
	            $scope.showPages();
	        });
	    };
		
		$scope.showSaler = function(index, callback)
	    {
	        var item = $scope.orderList[index];
	        var param = {
	            userId: item.userId
	        };
	        var cfg = {
	            mask: false,
	        };
	        T.common.ajax.request(Api.admin_userInfo_v1, param, cfg, function(data, code, msg)
	        {
	            var info = "";
	            info += "姓名: " + data.userinfo.name + "\n";
	            info += "手机号: " + data.userinfo.mobile + "\n";
	            info += "银行卡: " + data.userinfo.bankcard + "\n";
	            info += "开户行: " + data.userinfo.bankAddress + "\n";
	            info += "支付宝: " + data.userinfo.alipay + "\n";
	            info += "微信: " + data.userinfo.wechat + "\n";
	            alert(info);

	            if(callback)
	            {
	                callback();
	            }
	        });
	    };

	    $scope.onListItemClick = function($event, index)
	    {
	        var btn = $event.target.innerHTML;
	        switch(btn)
	        {
	            case "回收":
	            {
	                if(confirm("确定要回收该订单吗?"))
	                {
	                    var param = {
	                        orderId: $scope.orderList[index].orderId
	                    };
	                    var cfg = {
	                        mask: true,
	                        care: true
	                    };
	                    T.common.ajax.request(Api.admin_orderSaleFinish_v1, param, cfg, function(data, code, msg)
	                    {
	                        switch(code)
	                        {
	                            case 200:
	                            {
	                                T.common.ui.toast("回收成功");
	                                $scope.getData();
	                                break;
	                            }
	                            default:
	                            {
	                                T.common.ui.toast(msg);
	                            }
	                        }
	                    });
	                }
	                break;
	            }
	        }
	    };
		
		$scope.exportOut = function(fileName,data)
		{
			if(!angular.isArray(data)){
				console.log("文件出错!");
				return;
			}
			return alasql('SELECT * INTO XLSX("'+fileName+'.xlsx",{header:true}) FROM ?',[data]);
		}
		
		//导出excel:当前页
		$scope.exportExcelForPage = function()
		{
			var orderData=[];
			if($scope.orderList&&$scope.orderList.length>0){
				for(var i=0;i<$scope.orderList.length;i++){
					var order=$scope.orderList[i];
					orderData.push({
						'账号':order.username,
						'姓名':order.name,
						'人民币':order.pointAmount*7,
						'银行卡':order.bankcard,
						'开户行':order.bankAddress,
					});
				}
			}
			$scope.exportOut('新提现记录-第'+$scope.listdata.pageNo+"页",orderData);
		}
		//导出excel:全部
		$scope.exportExcelForAll = function()
		{
			var param = {
	            pageNo: 1,
	            pageSize: 9999,
	            orderStatus: "new"
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.admin_orderSaleList_v1, param, cfg, function(data, code, msg)
	        {
	            var orderData=[];
				if(data.orderSaleList&&data.orderSaleList.length>0){
					for(var i=0;i<data.orderSaleList.length;i++){
						var order=data.orderSaleList[i];
						orderData.push({
							'账号':order.username,
							'姓名':order.name,
							'人民币':order.pointAmount*7,
							'银行卡':order.bankcard,
							'开户行':order.bankAddress,
						});
					}
				}
				$scope.exportOut('新提现记录',orderData);
	        });
		}
		
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

	app.controller("order_sale_notfinish", function($scope, $rootScope, $location, $uibModal)
	{
	    var pageNo = 1;
	    var pageSize = 20;

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: pageNo,
	            pageSize: pageSize,
	            orderStatus: "new"
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.admin_orderSaleList_v1, param, cfg, function(data, code, msg)
	        {
	            $scope.orderList = data.orderSaleList;
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

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	app.controller("setting", function($scope, $rootScope, $location)
	{
	    var param = {
	        userId: T.common.util.getParameter("userId")
	    };
	    var cfg = {
	        mask: true
	    };
	    T.common.ajax.request(Api.admin_settingInfo_v1, param, cfg, function(data, code, msg)
	    {
	        $scope.setting = data.setting;
	        $scope.$apply();
	    });
		$scope.admin_username=localStorage.getItem(T.common.cfg.key + ".username");
	    $scope.submitForm = function(isValid)
	    {
	        if(isValid)
	        {
	            var param = {
	                userId: T.common.util.getParameter("userId"),
	                content: JSON.stringify($scope.setting)
	            };
	            var cfg = {
	                mask: true
	            };
	            T.common.ajax.request(Api.admin_updateSetting_v1, param, cfg, function(data, code, msg)
	            {
	                T.common.ui.toast("保存成功");
	            });
	        }
	    };
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
	            T.common.ajax.request(Api.admin_signin_v1, $scope.formdata, cfg, function(data, code, msg)
	            {
	                switch(code)
	                {
	                    case 200:
	                    {
	                        localStorage.setItem(T.common.cfg.key + ".sid", data.sid);
	                        localStorage.setItem(T.common.cfg.key + ".username", $scope.formdata.username);
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

	app.controller("transfer_list", function($scope, $rootScope, $location, $uibModal)
	{
	    var pageNo = 1;
	    var pageSize = 20;

	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: pageNo,
	            pageSize: pageSize
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.admin_transferList_v1, param, cfg, function(data, code, msg)
	        {
	            $scope.transferList = data.transferList;
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

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	app.controller("updatepwd", function($scope, $rootScope, $location, $uibModalInstance, items)
	{
	    console.log("获取参数: " + items);

	    $scope.ok = function()
	    {
	        $uibModalInstance.close("返回结果q23");
	    };

	    $scope.cancel = function()
	    {
	        $uibModalInstance.dismiss();
	    };
	});

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	app.controller("user_add", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.formdata = {
	        place: T.common.util.getParameter("parent")
	    };
		$scope.admin_username=localStorage.getItem(T.common.cfg.key + ".username");

	    $scope.submitForm = function(isValid)
	    {
	        if(isValid)
	        {
	            var cfg = {
	                mask: true,
	                care: true
	            };
	            T.common.ajax.request(Api.admin_userAdd_v1, $scope.formdata, cfg, function(data, code, msg)
	            {
	                switch(code)
	                {
	                    case 200 :
	                    {
	                        T.common.ui.toast("添加成功");
	                        $scope.formdata = {};
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
	    };
	});

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	app.controller("user_list_inactive", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 20,
	        totalPages: 1,
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
	        T.common.ajax.request(Api.admin_userListInactive_v1, param, cfg, function(data, code, msg)
	        {
	            $scope.userList = data.userList;
	            $scope.listdata.totalPages = data.totalPages;
				$scope.$apply();
	            $scope.showPages();
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
/* 32 */
/***/ (function(module, exports) {

	app.controller("user_list", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.listdata = {
	        pageNo: 1,
	        pageSize: 20,
	        totalPages: 1,
	        orderList: [],
	    };
		$scope.admin_username=localStorage.getItem(T.common.cfg.key + ".username");
	    $scope.getData = function()
	    {
	        var param = {
	            pageNo: $scope.listdata.pageNo,
	            pageSize: $scope.listdata.pageSize
	        };
	        var cfg = {
	            mask: true
	        };
	        T.common.ajax.request(Api.admin_userList_v1, param, cfg, function(data, code, msg)
	        {
	            $scope.listdata.totalPages = data.totalPages;
	            $scope.listdata.userList = data.userList;
	            $scope.$apply();
	            $scope.showPages();
	        });
	    };

		$scope.showInviter = function(inviter)
	    {
			if(inviter==0){alert("系统账号，没有推荐人");}
	        var param = {
	            userId: inviter
	        };
	        var cfg = {
	            mask: false,
	        };
	        T.common.ajax.request(Api.admin_userInfo_v1, param, cfg, function(data, code, msg)
	        {
	            var info = "";
				info += "账号: " + data.userinfo.username + "\n";
	            info += "姓名: " + data.userinfo.name + "\n";
	            info += "手机号: " + data.userinfo.mobile + "\n";
	            info += "银行卡: " + data.userinfo.bankcard + "\n";
	            info += "开户行: " + data.userinfo.bankAddress + "\n";
	            info += "支付宝: " + data.userinfo.alipay + "\n";
	            info += "微信: " + data.userinfo.wechat + "\n";
	            alert(info);
	        });
	    };
		
	    $scope.onListItemClick = function($event, index)
	    {
	        var btn = $event.target.innerHTML;
	        switch(btn)
	        {
	            case "直推人数":
	            {
	                var param = {
	                    userId: $scope.listdata.userList[index].userId
	                };
	                var cfg = {
	                    mask: true
	                };
	                T.common.ajax.request(Api.admin_inviterCount_v1, param, cfg, function(data, code, msg)
	                {
	                    var msg = "各星级直推人数:\n";
	                    msg += "一星级: " + data.json["1"] + "\n";
	                    msg += "二星级: " + data.json["2"] + "\n";
	                    msg += "三星级: " + data.json["3"] + "\n";
	                    msg += "四星级: " + data.json["4"] + "\n";
	                    msg += "五星级: " + data.json["5"] + "\n";
	                    alert(msg);
	                });
	                break;
	            }
	            case "删除":
	            {
	                if(confirm("确定要删除该用户吗?"))
	                {
	                    var param = {
	                        userId: $scope.listdata.userList[index].userId
	                    };
	                    var cfg = {
	                        mask: true,
	                        care: true
	                    };
	                    T.common.ajax.request(Api.admin_userDelete_v1, param, cfg, function(data, code, msg)
	                    {
	                        switch(code)
	                        {
	                            case 200:
	                            {
	                                T.common.ui.toast("删除成功");
	                                $scope.getData();
	                                break;
	                            }
	                            default:
	                            {
	                                T.common.ui.toast(msg);
	                            }
	                        }
	                    });
	                }
	                break;
	            }
	            case "奖励设置":
	            {
	                $rootScope.cacheUserList = $scope.listdata;

	                var userId = $scope.listdata.userList[index].userId;
	                $location.url("/setting_reward?userId=" + userId);
	                break;
	            }
	            case "修改":
	            {
	                $rootScope.cacheUserList = $scope.listdata;

	                var userId = $scope.listdata.userList[index].userId;
	                $location.url("/user_update?userId=" + userId);
	                break;
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

	    if($rootScope.cacheUserList)
	    {
	        $scope.listdata = $rootScope.cacheUserList;
	        $scope.showPages();
	        $rootScope.cacheUserList = null;
	    }
	    else
	    {
	        $scope.getData();
	    }
	});

/***/ }),
/* 33 */
/***/ (function(module, exports) {

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

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	app.controller("user_update", function($scope, $rootScope, $location, $uibModal)
	{
	    $scope.getUserInfo = function()
	    {
	        var cfg = {
	            mask: true,
	        };
	        var param = {
	            userId: T.common.util.getParameter("userId")
	        };
	        T.common.ajax.request(Api.admin_userInfo_v1, param, cfg, function(data, code, msg)
	        {
	            $scope.formdata = data.userinfo;
	            $scope.$apply();
	        });
	    };

	    $scope.submitForm = function(isValid)
	    {
	        if(isValid)
	        {
	            $scope.formdata.userId = T.common.util.getParameter("userId");
	            if($scope.formdata.pwd1)
	            {
	                $scope.formdata.passwd = T.common.util.md5($scope.formdata.pwd1);
	            }
	            if($scope.formdata.pwd2)
	            {
	                $scope.formdata.operatePasswd = T.common.util.md5($scope.formdata.pwd2);
	            }

	            var cfg = {
	                mask: true,
	                care: true,
	            };
	            T.common.ajax.request(Api.admin_updateUser_v1, $scope.formdata, cfg, function(data, code, msg)
	            {
	                switch(code)
	                {
	                    case 200:
	                    {
	                        T.common.ui.toast("修改成功");
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

/***/ })
/******/ ]);