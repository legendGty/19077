let phe = 0
let nam = 0
let qq = 0
let time = 0
function check(obj,spanobj){
    $(obj.cname).blur(function () {
        let mima = /^[\u2E80-\u9FFF]+$/
        if (mima.test($(obj.cname).val()) == false) {
            $(spanobj.sname).html("用户名为中文格式");
        } else {
            $(spanobj.sname).html("");
            nam = 1
        }
    })
    $(obj.cph).blur(function () {
        let mima = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/
        if (mima.test($(obj.cph).val()) == false) {
            $(spanobj.sph).html("请输入正确的手机号");
        } else {
            $(spanobj.sph).html("");
            phe = 1
        }
    })
    $(obj.cqq).blur(function () {
        let mima = /^[1-9][0-9]{4,9}$/g;
        if (mima.test($(obj.cqq).val()) == false) {
            $(spanobj.sqq).html("请输入正确的QQ");
        } else {
            $(spanobj.sqq).html("");
            qq = 1
        }
    })
    $(obj.ctime).blur(function () {
        let mima =  /^[0-9][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/;
        if (mima.test($(obj.ctime).val()) == false) {
            $(spanobj.stime).html("请按照规定的日期格式填写");
        } else {
            $(spanobj.stime).html("");
            time = 1
        }
    })
}