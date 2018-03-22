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

        for (var t1 = 0; t1 < ($(window).scrollTop() - $(window).height() + $(".home-left-nav-bar").height() ) / itemHeight; t1++) {
            // var  = 5 - i;
            $(".home-left-nav-bar a:nth-last-child(2)").removeClass("font-color-orange");
        }
    }

    /**/
    $(window).scrollTop() > $(window).height() - $(".home-left-nav-bar").height()  ? i() : a()
}

function setValue() {
    $(".j-current-page").data("currentpage")
}


function c() {
    function e(e) {
        $(".j-current-page").data("currentpage", e), r = e - 1
    }

    function o() {
        n.eq(r).click(), r >= n.length - 1 ? r = 0 : r++
    }

    var t, n = $(".pagination span"), i = $(".slide"), r = 1, c = !1, d = [1, 0, 2];
    n.click(function () {
        var o = $(this).hasClass("active");
        n.removeClass("active"), $(this).addClass("active"),
        o || $(this).index() != d[1] ||
        (e(d[1] + 1),
            $.each(i, function (e, o) {
                $(o).stop().fadeOut("fast")
            }), s(), l()),
        o || $(this).index() != d[0] ||
        (e(d[0] + 1), $.each(i, function (e, o) {
            $(o).hide()
        }),
            $(".slide7").stop().fadeIn("normal"), s()),
        // o || $(this).index() != d[2] ||
        // (e(d[2] + 1), $.each(i, function (e, o) {
        //     $(o).hide()
        // }),
        //     $(".slide0").stop().fadeIn("normal"), s()),
        // o || $(this).index() != d[3] ||
        // (e(d[3] + 1), $.each(i, function (e, o) {
        //     $(o).hide()
        // }),
        //     $(".slide5").stop().fadeIn("normal"), s()),
        o || $(this).index() != d[2] ||
        (e(d[2] + 1), $.each(i, function (e, o) {
            $(o).hide()
        }),
            $(".slide3").stop().fadeIn("normal"),
            a()),
        $(this).index() != d[0] && $(".js-mouse-gif-container").show()
    }), t = setInterval(o, 6e3), $(window).scroll(function () {
        $(window).scrollTop() < $(window).height() && c ? (t = setInterval(o, 6e3), c = !1) : $(window).scrollTop() > $(window).height() && (clearInterval(t), c = !0)
    }), $(".js-hover-btn").mousemove(function () {
        $(".js-qrcode-conten").show(), clearInterval(t)
    }), $(".js-hover-btn").mouseout(function () {
        $(".js-qrcode-conten").hide(), clearInterval(t), t = setInterval(o, 6e3)
    })
}
function l() {
    $(".slide6").css("opacity", "1").show()
    // $(".slide6").css("opacity", "0").show(),
    //     $(".slide6_text_wrapper img").css("opacity", "0"),
    //     $(".liutao_single_pic").css("opacity", "0"),
    //     $(".slide6").stop(!0, !1).animate({opacity: "1"}, 300, "linear"), setTimeout(function () {
    //     d($(".text1"), 500), d($(".liutao_single_pic"), 500)
    // }, 300)
}

function d(e, o, t) {
    e.each(function () {
        $(this).css({opacity: "0"}), $(this).stop(!0, !1).delay(t ? t : 0).animate({opacity: "1"}, o, "linear")
    })
}