
function i() {
    var e = $(".j-list-box-item"), o = 0;
    this.nextItem = function () {
        o++, o = o < e.length ? o : 0, e.hide(), e.eq(o).fadeIn("fast")
    }, this.lastItem = function () {
        o--, o = o >= 0 ? o : e.length - 1, e.hide(), e.eq(o).fadeIn("fast")
    }
}

function c() {
    function e(e) {
        $(".j-current-page").data("currentpage", e), r = e - 1
    }

    function o() {
        n.eq(r).click(), r >= n.length - 1 ? r = 0 : r++
    }

    var t, n = $(".pagination span"), i = $(".slide"), r = 1, c = !1, d = [1, 0, 2, 3, 4];
    n.click(function () {
        var o = $(this).hasClass("active");
        n.removeClass("active"), $(this).addClass("active"), o || $(this).index() != d[1] || (e(d[1] + 1),
            $.each(i, function (e, o) {
                $(o).stop().fadeOut("fast")
            }), s(), l()), o || $(this).index() != d[0] || (e(d[0] + 1),
            $.each(i, function (e, o) {
                $(o).hide()
            }),
            $(".slide4").stop().fadeIn("normal"), a()), o || $(this).index() != d[2] || (e(d[2] + 1),
            $.each(i, function (e, o) {
                $(o).hide()
            }),
            $(".slide0").stop().fadeIn("normal"), s()), o || $(this).index() != d[3] || (e(d[3] + 1),
            $.each(i, function (e, o) {
                $(o).hide()
            }),
            $(".slide5").stop().fadeIn("normal"), s()), o || $(this).index() != d[4] || (e(d[4] + 1),
            $.each(i, function (e, o) {
                $(o).hide()
            }),
            $(".slide3").stop().fadeIn("normal"), a()), $(this).index() != d[0] && $(".js-mouse-gif-container").show()
    }),
        t = setInterval(o, 6e3),
        $(window).scroll(function () {
            $(window).scrollTop() < $(window).height() && c ? (t = setInterval(o, 6e3), c = !1) :
                $(window).scrollTop() > $(window).height() && (clearInterval(t), c = !0)
        }),
        $(".js-hover-btn").mousemove(function () {
            $(".js-qrcode-conten").show(), clearInterval(t)
        }),
        $(".js-hover-btn").mouseout(function () {
            $(".js-qrcode-conten").hide(), clearInterval(t), t = setInterval(o, 6e3)
        })
}

function l() {
    $(".slide6").css("opacity", "0").show(),
        $(".slide6_text_wrapper img").css("opacity", "0"),
        $(".liutao_single_pic").css("opacity", "0"),
        $(".slide6").stop(!0, !1).animate({opacity: "1"}, 300, "linear"), setTimeout(function () {
        d($(".text1"), 500), d($(".liutao_single_pic"), 500)
    }, 300)
}

function d(e, o, t) {
    e.each(function () {
        $(this).css({opacity: "0"}), $(this).stop(!0, !1).delay(t ? t : 0).animate({opacity: "1"}, o, "linear")
    })
}