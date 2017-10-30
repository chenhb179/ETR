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