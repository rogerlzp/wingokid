function resizeElementHeight(element) {
    var height = 0;
    var body = window.document.body;
    if (window.innerHeight) {
        height = window.innerHeight;
    } else if (body.parentElement.clientHeight) {
        height = body.parentElement.clientHeight;
    } else if (body && body.clientHeight) {
        height = body.clientHeight;
    }
    element.style.height = ((height - element.offsetTop) + "px");
}


function addCustomer(type) {

    if ($.trim($("#age").val()) == '' || isNaN($("#age").val()) || $("#age").val() == ' ' || $("#age").val() == 0 || $("#age").val() < 0) {
        alert("请输入正确年龄！");
        return;
    }


    var lat = $("#lat").val();
    var lng = $("#lng").val();

    var name = $.trim($("#name").val());
    if (name == '') {
        alert("请输入姓名！");
        return;
    }

    var telphone = $.trim($("#telphone").val());
    if (telphone == '') {
        alert("请输入联系电话！");
        return;
    }

    var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
    if (!reg.test(telphone) || telphone.length != 11) {
        alert("请输入正确联系电话！");
        return;
    }
    var url = "http://wechat.wingokid.com/WinGoKids/customer/addCustomerForJS";


    var data = {};
    data.source = "官网";
//data.callback=;
    data.lat = $("#lat").val();
    data.lng = $("#lng").val();
    data.childrenName = $("#name").val();
    data.parentPhone = telphone;
    data.childrenAge = $("#age").val();
    data.city = $("#city").val();
    data.address = $("#address").val();
    data.remark = "remark";
    $.ajax({
        url: url,
        data: data,
        type: 'GET',
        dataType: "jsonp",
        success: function (res) {
            if (res != "") {
                if (type != "" && type == "homepage") {
                    if (res.resultCode == 1) {
                        alert("恭喜，您已预约成功！");
                    } else if (res.resultCode == -1) {
                        alert(res.resultMessage);
                    }
                } else {
                    $(".preset").show();
                }
            } else {
                alert("预约失败，请重试");
            }
        }
    });
}


function addCustomer_Callback() {
}

function clear() {
    $("#name").val('');
    $("#telphone").val('');
    $("#age").val('');
    $("#city").val('');
    $("#address").val('');
}


function i() {
    $(".home-left-nav-bar").addClass("font-color-orange");
    // .addClass("font-color-orange");
}

function a() {
    // 1 != $(".j-current-page").data("currentpage") && 3 != $(".j-current-page").data("currentpage") &&
    // 4 != $(".j-current-page").data("currentpage") ||
    $(".home-left-nav-bar").removeClass("font-color-orange");
}

function s() {
    var itemHeight = $(".home-left-nav-bar a:first-child").height();
    if ($(window).scrollTop() > $(window).height() - $(".home-left-nav-bar").height()) {

        for (var t1 = 0; t1 < ($(window).scrollTop() - $(window).height() + $(".home-left-nav-bar").height() +120) / itemHeight; t1++) {
            // var  = 5 - i;
            $(".home-left-nav-bar a:nth-last-child(2)").removeClass("font-color-orange");
        }
    }

    /**/$(window).scrollTop() > $(window).height() - $(".home-left-nav-bar").height() +120 ? i() : a()
}

