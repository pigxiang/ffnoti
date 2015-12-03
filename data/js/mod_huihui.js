/**
 * Created by TianXX on 2015/12/3.
 */
unsafeWindow.myCustomAPI = function () {
};

$('body').css({
    border: '5px solid red'
});

//alert(document.cookie);
//
$.ajax({
    type: 'get',
    url: 'http://www.huihui.cn/global_order/5485044992784#wuliu',
    header: {
        Cookie: document.cookie
    },
    success: function (html) {
        alert(html);
    }
});
