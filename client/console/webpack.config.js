var webpack = require("webpack");
var fs = require("fs");
var glob = require("glob");
var path = require("path");

var profile = "product";
console.log("profile = " + profile);

// 自动发现entiries
var entries = [];
entries.push("./src/config.js");
var files = glob.sync("./src/*.js");
for(var i = 0; i < files.length; i++)
{
    if(path.basename(files[i]) !== "config.js")
    {
        entries.push(files[i]);
    }
}

// 自动生成route
var routeList = [];
files = glob.sync("./res/*.html");
for(var i = 0; i < files.length; i++)
{
    var entry = files[i];
    var filename = path.basename(entry, ".html");
    var route = {
        url: filename + ".html",
        route: "/" + filename,
        template: fs.readFileSync(entry, "utf-8")
    };
    routeList.push(route);
}

// 插件配置
var plugins = [new webpack.DefinePlugin({
    __profile__: "\"" + profile + "\"",
    __ROUTELIST__: JSON.stringify(routeList)
})];

module.exports = {
    entry: entries,
    output: {
        filename: "./res/libs/__code__.js"
    },
    plugins: plugins,
    watch: "product" !== profile
};
