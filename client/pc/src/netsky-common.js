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