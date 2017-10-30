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