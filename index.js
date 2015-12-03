var self = require("sdk/self");
var tabs = require("sdk/tabs");

require("sdk/ui/button/action").ActionButton({
    id: "load-several",
    label: "load several scripts",
    icon: "./images/icon-16.png",
    onClick: function () {
        tabs.activeTab.attach({
            contentScriptFile: [
                self.data.url('./js/jquery.1.7.2.min.js'),
                self.data.url('./js/mod_huihui.js')]
        });
    }
});

//var get_baidu = function () {
//    var ret = '';
//    var Request = require("sdk/request").Request;
//    Request({
//        url: "http://www.latin1files.org/quijote.txt",
//        overrideMimeType: "text/plain; charset=latin1",
//        onComplete: function (response) {
//            console.log(response.text);
//            ret = response.text;
//        }
//    }).get();
//    return ret;
//}
//
//self.port.on('get_baidu',get_baidu);