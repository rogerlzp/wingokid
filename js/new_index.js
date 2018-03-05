!function (e) {
    function o(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(i.exports, i, i.exports, o), i.l = !0, i.exports
    }

    var t = {};
    return o.m = e, o.c = t, o.d = function (e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: n})
    }, o.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function (e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, o.p = "", o(o.s = 235)
}({
    112: function (e, o, t) {
        "use strict";

        function n(e) {
            return /^1[3-9][0-9]{9}$/.test(e)
        }

        function i(e) {
            return /^[\d|\w]{4}$/.test(e)
        }

        function a(e) {
            return /^[\w|\d]{4}$/.test(e)
        }

        function s(e) {
            return /^[^\s]{6,20}$/.test(e)
        }

        function r(e) {
            return /^[\u4e00-\u9fa5]{2,8}$/.test(e)
        }

        function c(e) {
            return /^([A-Za-z]+\s?)*[A-Za-z]{0,16}$/.test(e)
        }

        function l(e) {
            return /^\d{4}(-)\d{1,2}(-)\d{1,2}$/.test(e)
        }

        function d() {
            return navigator.userAgent.indexOf("MSIE") > 0 && (navigator.userAgent.indexOf("MSIE 8.0") > 0 || !window.innerWidth) ? !0 : void 0
        }

        Object.defineProperty(o, "__esModule", {value: !0}), o.isMobile = n, o.isSMSCode = i, o.isImageCode = a, o.isPassword = s, o.isChineseName = r, o.isEnglishName = c, o.isBirthday = l, o.isIE_8 = d
    }, 113: function (e, o) {
        function t() {
            $("body").delegate("[data-video]", "click", function () {
                function e() {
                    return !!document.createElement("video").canPlayType
                }

                function o(o) {
                    if (!d.hasClass("hide")) {
                        var t = $(window).width(), n = $(window).height();
                        d.css({width: t, height: n, display: "block"}), e() ? d.children("video").css({
                            width: t,
                            height: n
                        }) : (d.children("object").attr("style", "width:" + t + "px;height:" + n + "px;"), d.find("embed").attr("style", "width:" + t + "px;height:" + n + "px;"))
                    }
                }

                $("body").css("overflow", "hidden");
                var t = $(window).width(), s = $(window).height(), r = $(this).attr("data-video"),
                    c = $(this).attr("data-video-flv"), l = $(this).attr("data-videoid"),
                    d = $("<div id='videoPop'></div>"),
                    p = $("<div id='videoCloseBtn'><img style='width:100%' src='//fe-static.vipkid.com.cn/img/video/closeBtn-fe53dc1a8c.png'></div>"),
                    u = {
                        width: "100%",
                        position: "fixed",
                        left: 0,
                        top: 0,
                        "z-index": 1010,
                        display: "none",
                        background: "rgb(0, 0, 0)",
                        height: s
                    }, f = {
                        width: 32,
                        "border-radius": "50%",
                        position: "absolute",
                        top: 40,
                        right: 40,
                        opacity: .7,
                        cursor: "pointer",
                        transition: "all 0.2s"
                    }, h = {opacity: 1}, w = {
                        color: "#fff",
                        "text-align": "center",
                        position: "relative",
                        "margin-top": "-10px",
                        top: "50%"
                    }, m = {opacity: .7};
                if (d.addClass("hide"), d.css(u), p.css(f), p.hover(function () {
                        p.css(h)
                    }, function () {
                        p.css(m)
                    }), $("body").append(d), d.removeClass("hide").fadeIn(), e()) {
                    var g = '<video src="' + r + '" type="video/mp4" width="' + t + '" height="' + s + '" autoplay="autoplay" controls="true" style="background:#000 url(\'//fe-static.vipkid.com.cn/img/video/videoload-4fd0194ed4.gif\') no-repeat center"></video>';
                    d.append(g), a = Date.now(), n(l, Date.now(), "start"), i = setInterval(function () {
                        n(l, Date.now(), "watching")
                    }, 5e3), d.children("video").bind("ended", function () {
                        $("body").css("overflow", "auto"), d.removeClass("show").fadeOut(200), $(this).parent().addClass("hide").hide(), $(this).remove(), n(l, Date.now(), "end"), clearInterval(i)
                    })
                } else {
                    var v = "";
                    c ? (v += '<object codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0"  id="videoObject" width="' + t + '" height="' + s + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">', v += '<param name="quality" value="high" />', v += '<param name="allowFullScreen" value="true" />', v += '<param name="wmode" value="transparent" />', v += '<param name="wmode" value="opaque" />', v += '<param name="movie" value="//resource.vipkid.com.cn/parent_portal/images/flvplayer.swf" />', v += '<param name="FlashVars"  value="vcastr_file=' + c + '&amp;IsAutoPlay=1&amp;IsShowBar=0" />', v += '<embed src="//resource.vipkid.com.cn/parent_portal/images/flvplayer.swf" flashvars="vcastr_file=' + c + '&amp;IsAutoPlay=1&amp;IsShowBar=0" width="' + t + '" height="' + s + '" pluginspage=" http://www.macromedia.com/go/getflashplayer" quality="high" allowfullscreen="true" type="application/x-shockwave-flash"  wmode="transparent" /></object>', a = Date.now(), n(l, Date.now(), "start"), i = setInterval(function () {
                        n(l, Date.now(), "watching")
                    }, 5e3)) : (v = $('<div>鏆備笉鏀寔褰撳墠鏍煎紡鐨勮棰戞挱鏀撅紝璇风敤鏈€鏂扮増鐨�<a href="/download" style="color:#fff;margin: 5px">Chrome娴忚鍣�</a>鎵撳紑鏈珯</div>'), v.css(w)), d.append(v)
                }
                d.append(p), $(window).on("resize", o), p.click(function () {
                    $("body").css("overflow", "auto"), $(this).siblings().remove(), $(this).parent().addClass("hide").hide(), $(window).unbind("resize", o), n(l, Date.now(), "end"), clearInterval(i)
                })
            })
        }

        function n(e, o, t) {
            if (!e) return !1;
            var n = o - a, i = "video_watch_" + t;
            sa.track("pc_trigger", {trigger_id: i, video_id: e, duration: n}), $("#videoPop").trigger("videoTrack", e)
        }

        var i = null, a = null;
        e.exports = t
    }, 167: function (e, o) {
        function t() {
            function e(e, t) {
                $(window).scrollTop() > e.offset().top - $(window).height() && (e[0].play(), 0 != e[0].readyState && (e.siblings(".video-place-holder-img").hide(), o.splice(t, 1)))
            }

            var o = $(".j-video-autoplay");
            $(window).scroll(function () {
                for (var t = 0; t < o.length; t++) {
                    var n = $(o[t]);
                    e(n, t)
                }
            })
        }

        e.exports = t
    }, 235: function (e, o, t) {
        function n() {
            u.isIE_8() && ($(".slide1bgimg").hide(), $(".j-ie8-banner1").show(), $(".text_unit1_container").css({
                bottom: "210px",
                zoom: "0.8"
            }), $(".mouse-gif-container").hide(), $(".ie-banner-5").show(), alert("寤鸿鏇存柊娴忚鍣�"))
        }

        function i() {
            var e = $(".j-list-box-item"), o = 0;
            this.nextItem = function () {
                o++, o = o < e.length ? o : 0, e.hide(), e.eq(o).fadeIn("fast")
            }, this.lastItem = function () {
                o--, o = o >= 0 ? o : e.length - 1, e.hide(), e.eq(o).fadeIn("fast")
            }
        }

        function a() {
            $(".home-left-nav-bar").removeClass("font-color-orange").addClass("font-color-orange"), $(".js-signup-title").removeClass("font-color-orange").addClass("font-color-orange"), $(".btn-receive-btn").removeClass("font-color-orange").addClass("font-color-orange"), $(".register-login-box").removeClass("on-white-bgcolor").addClass("on-white-bgcolor")
        }

        function s() {
            $(".home-left-nav-bar").removeClass("font-color-orange"), $(".js-signup-title").removeClass("font-color-orange"), $(".register-login-box").removeClass("on-white-bgcolor"), $(".btn-receive-btn").removeClass("font-color-orange")
        }

        function r() {
            var e = $(".location-top");
            e.each(function () {
                $(this).data("top", parseFloat($(this).css("top")))
            })
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
                n.removeClass("active"), $(this).addClass("active"), o || $(this).index() != d[1] || (e(d[1] + 1), $.each(i, function (e, o) {
                    $(o).stop().fadeOut("fast")
                }), s(), l()), o || $(this).index() != d[0] || (e(d[0] + 1), $.each(i, function (e, o) {
                    $(o).hide()
                }), $(".slide4").stop().fadeIn("normal"), a()), o || $(this).index() != d[2] || (e(d[2] + 1), $.each(i, function (e, o) {
                    $(o).hide()
                }), $(".slide0").stop().fadeIn("normal"), s()), o || $(this).index() != d[3] || (e(d[3] + 1), $.each(i, function (e, o) {
                    $(o).hide()
                }), $(".slide5").stop().fadeIn("normal"), s()), o || $(this).index() != d[4] || (e(d[4] + 1), $.each(i, function (e, o) {
                    $(o).hide()
                }), $(".slide3").stop().fadeIn("normal"), a()), $(this).index() != d[0] && $(".js-mouse-gif-container").show()
            }), t = setInterval(o, 6e3), $(window).scroll(function () {
                $(window).scrollTop() < $(window).height() && c ? (t = setInterval(o, 6e3), c = !1) : $(window).scrollTop() > $(window).height() && (clearInterval(t), c = !0)
            }), $(".js-hover-btn").mousemove(function () {
                $(".js-qrcode-conten").show(), clearInterval(t)
            }), $(".js-hover-btn").mouseout(function () {
                $(".js-qrcode-conten").hide(), clearInterval(t), t = setInterval(o, 6e3)
            })
        }

        function l() {
            $(".slide6").css("opacity", "0").show(), $(".slide6_text_wrapper img").css("opacity", "0"), $(".liutao_single_pic").css("opacity", "0"), $(".slide6").stop(!0, !1).animate({opacity: "1"}, 300, "linear"), setTimeout(function () {
                d($(".text1"), 500), d($(".liutao_single_pic"), 500)
            }, 300)
        }

        function d(e, o, t) {
            e.each(function () {
                $(this).css({opacity: "0"}), $(this).stop(!0, !1).delay(t ? t : 0).animate({opacity: "1"}, o, "linear")
            })
        }

        function p() {
            function e(e) {
                $(".message").show(), $("#js-mobile").addClass("input-error"), $("#js-mobile .message").text(e), r.focus()
            }

            function o() {
                var o = r.val();
                return o || "" !== o ? u.isMobile(o) ? (s.attr("href", "/signup?" + location.search.replace("?", "") + "&mobile=" + r.val()), !0) : (e("鎵嬫満鍙疯緭鍏ユ湁璇�"), !1) : (e("鎵嬫満鍙锋湭濉啓"), !1)
            }

            function t(e) {
                $(".message").show(), $("#js-mobile-bottom").addClass("input-error"), $("#js-mobile-bottom .message").text(e), l.focus()
            }

            function n() {
                var e = l.val();
                return e || "" !== e ? u.isMobile(e) ? (c.attr("href", "/signup?" + location.search.replace("?", "") + "&mobile=" + l.val()), !0) : (t("鎵嬫満鍙疯緭鍏ユ湁璇�"), !1) : (t("鎵嬫満鍙锋湭濉啓"), !1)
            }

            function i(e) {
                $(".message").show(), $("#js-mobile-class").addClass("input-error"), $("#js-mobile-class .message").text(e), p.focus()
            }

            function a() {
                var e = p.val();
                return e || "" !== e ? u.isMobile(e) ? (d.attr("href", "/signup?" + location.search.replace("?", "") + "&mobile=" + p.val()), !0) : (i("鎵嬫満鍙疯緭鍏ユ湁璇�"), !1) : (i("鎵嬫満鍙锋湭濉啓"), !1)
            }

            var s = $("#js-mobile a"), r = $("#js-mobile input"), c = $("#js-mobile-bottom a"),
                l = $("#js-mobile-bottom input"), d = $("#js-mobile-class a"), p = $("#js-mobile-class input");
            s.click(o), c.click(n), d.click(a), r.keypress(function (e) {
                if (13 == event.which && o()) {
                    var t = function () {
                        location.href = "/signup?" + location.search.replace("?", "") + "&mobile=" + r.val()
                    };
                    sa.track("pc_click", {click_id: "parent_pc_signup_click_box"}, t), setTimeout(t, 200)
                }
            }), l.keypress(function (e) {
                if (13 == event.which && n()) {
                    var o = function () {
                        location.href = "/signup?" + location.search.replace("?", "") + "&mobile=" + l.val()
                    };
                    sa.track("pc_click", {click_id: "parent_pc_signup_click_box"}, o), setTimeout(o, 200)
                }
            }), p.keypress(function (e) {
                if (13 == event.which && a()) {
                    var o = function () {
                        location.href = "/signup?" + location.search.replace("?", "") + "&mobile=" + p.val()
                    };
                    sa.track("pc_click", {click_id: "parent_pc_signup_click_box"}, o), setTimeout(o, 200)
                }
            })
        }

        var u = t(112);
        t(236)(), t(113)(), t(167)(), $(document).ready(function () {
            $("#js-banner").height($(window).height() < 600 ? 600 : $(window).height())
        }), $(window).on("resize", function () {
            $("#js-banner").height($(window).height() < 600 ? 600 : $(window).height())
        }), n(), $(".j-nav-layer").click(function () {
            $(".nav-layer").fadeToggle("fast")
        }), $(".pic-item-holder").hover(function () {
            $(this).children(".pc-item-info").stop().fadeIn("fast")
        }, function () {
            $(this).children(".pc-item-info").stop().fadeOut("fast")
        }), $(".video-box").hover(function () {
            $(this).removeClass("hover").addClass("hover")
        }, function () {
            $(this).removeClass("hover")
        }), $(".teachers-wrapper").find("#bar1").click(function () {
            $(this).siblings().css("background-position", "0 0"), $(this).css("background-position", "-35px 0"), $("#information").animate({"margin-left": "0"}, 200)
        }), $(".teachers-wrapper").find("#bar2").click(function () {
            $(this).siblings().css("background-position", "0 0"), $(this).css("background-position", "-35px 0"), $("#information").animate({"margin-left": "-988px"}, 201)
        }), $(".teachers-wrapper").find("#bar3").click(function () {
            $(this).siblings().css("background-position", "0 0"), $(this).css("background-position", "-35px 0"), $("#information").animate({"margin-left": "-1976px"}, 210)
        });
        var f = new i;
        $(".next").click(function () {
            f.nextItem()
        }), $(".last").click(function () {
            f.lastItem()
        }), r(), c(), l(), $(".play-icon").hover(function () {
            $(this).css("color", "#f60"), $(this).find("img").attr("src", "//fe-static.vipkid.com.cn/img/vkindex/usersevaluation/icon-play2-4658ce3064.png")
        }, function () {
            $(this).css("color", "#4a90e2"), $(this).find("img").attr("src", "//fe-static.vipkid.com.cn/img/vkindex/usersevaluation/icon-play-34182845a5.png")
        }), $("#js-gulou-video").hover(function () {
            $(this).find("img").attr("src", "//fe-static.vipkid.com.cn/img/vkindex/usersevaluation/play-icon2-b0faae0d1c.png")
        }, function () {
            $(this).find("img").attr("src", "//fe-static.vipkid.com.cn/img/vkindex/usersevaluation/play-icon-1d9db98521.png")
        }), p();
        var h = h || [];
        window._vds = h, function () {
            h.push(["setAccountId", "acdb1d1fdb9dc51c"]), function () {
                var e = document.createElement("script");
                e.type = "text/javascript", e.async = !0, e.src = ("https:" == document.location.protocol ? "https://" : "http://") + "dn-growing.qbox.me/vds.js";
                var o = document.getElementsByTagName("script")[0];
                o.parentNode.insertBefore(e, o)
            }()
        }()
    }, 236: function (e, o, t) {
        function n() {
            $(".js-download-client").hide(), $(".js-index-wrapper").css("margin-top", "0px"), $(".js-home-header-wrapper").css("top", "0px"), $(".home-left-nav-wrapper").css("top", "0px"), $(".register-login-box").css("top", "15px")
        }

        function i() {
            $(".home-left-nav-bar").removeClass("font-color-orange").addClass("font-color-orange"), $(".js-signup-title").removeClass("font-color-orange").addClass("font-color-orange"), $(".register-login-box").removeClass("on-white-bgcolor").addClass("on-white-bgcolor")
        }

        function a() {
            1 != $(".j-current-page").data("currentpage") && 3 != $(".j-current-page").data("currentpage") && 4 != $(".j-current-page").data("currentpage") || ($(".home-left-nav-bar").removeClass("font-color-orange"), $(".js-signup-title").removeClass("font-color-orange"), $(".register-login-box").removeClass("on-white-bgcolor"))
        }

        function s() {
            $(window).scrollTop() > $(window).height() - $(".home-left-nav-bar").height() ? i() : a()
        }

        function r() {
            var e, o = $(window).height(), t = $(".part1_img_teacher").offset().top - o,
                n = ($(".part2-picbox").offset().top - o, 3753 - o);
            this.parallaxMove = function () {
                var i, a;
                if (e = $(window).scrollTop(), $(".j-parallax-1").css("top", 0 - .135 * e), $(".j-parallax-2").css("top", 0 - .04 * e), $(".part3-intro-container").css("top", 0 - .13 * (e - 1600)), $(".part3-row-holder img").css("top", .01 * e), e > $(".part2-picbox").offset().top - o) {
                    var s = .06, r = .002;
                    $.each(h, function (o, t) {
                        i = 16 - (e - 1140) * s, a = (e - 1140) * r, s -= .0055, r -= 5e-5, $(t).css({
                            left: (i > 0 ? i : 0) + "%",
                            opacity: 1 > a ? a : 1
                        })
                    })
                }
                var c;
                e > t && (c = .005 * (e - 600), $(".part1_img_teacher").css({opacity: 1 > c ? c : 1}), $(".part1_img_teacher_shadow").css({
                    opacity: 1 > c ? c : 1,
                    left: .01 * (e - 600)
                }));
                var l, d = $(".commitment-item");
                e > n && (l = .003 * (e - n), $(d[0]).css({opacity: 1 > l ? l : 1})), e > n && (l = .003 * (e - n - 100), $(d[1]).css({opacity: 1 > l ? l : 1})), e > n && (l = .005 * (e - n - 200), $(d[2]).css({opacity: 1 > l ? l : 1})), e > 3369 && $(".j-parallax-4").css({top: .36 * (e - 3380)});
                var p = $(window).width();
                $(window).height();
                1024 >= p && (320 > e ? $("#js-mobile").show() : $("#js-mobile").hide())
            }
        }

        function c() {
            function e(e) {
                $(window).scrollTop() > _ + 50 ? e.addClass("show") : e.removeClass("show")
            }

            function o(e) {
                var o;
                e.offset().top - _;
                $(window).scrollTop() > e.offset().top - _ && (o = .003 * ($(window).scrollTop() - 30), e.css({opacity: 1 > o ? o : 1}))
            }

            function t(e) {
                var o;
                $(window).scrollTop() > e.offset().top - _ && (o = .005 * ($(window).scrollTop() - 610), e.css({
                    top: .015 * $(window).scrollTop(),
                    left: .02 * $(window).scrollTop(),
                    opacity: 1 > o ? o : 1
                }))
            }

            function n(e) {
                var o;
                e.offset().top - _;
                $(window).scrollTop() > e.offset().top - _ && (o = .004 * ($(window).scrollTop() - 557), e.css({
                    top: 0 - .015 * $(window).scrollTop(),
                    opacity: 1 > o ? o : 1
                }))
            }

            function i(e) {
                var o = e.offset().top - _;
                if ($(window).scrollTop() > o) {
                    var t = .42 * ($(window).scrollTop() - parseInt(e.data("scrollfix")));
                    $("body").hasClass("ipad") ? e.css({width: (98 > t ? t : 98) + "%"}) : e.css({width: (100 > t ? t : 100) + "%"})
                }
            }

            function a(e) {
                var o = e.offset().top - _;
                if ($(window).scrollTop() > o) {
                    var t = .15 * ($(window).scrollTop() - o);
                    e.css({width: (50 > t ? t : 50) + "%"})
                }
            }

            function c(e) {
                var o = $(window).scrollTop() / _;
                o > .5 ? e.addClass("switch-back-top") : e.removeClass("switch-back-top")
            }

            function d(e, o) {
                $(window).scrollTop() + _ - e.offset().top > 180 && (e.addClass("zoom-in"), y.splice(o, 1))
            }

            function p(e) {
                var o = 1 - $(window).scrollTop() / (3.5 * _);
                .83333 > o ? ($("#j-logo-252").hide(), $("#j-logo-210").show(), e.css("transform", "scale(0.833333)")) : ($("#j-logo-252").show(), $("#j-logo-210").hide(), e.css("transform", "scale(" + o + ")"))
            }

            function u(e, o) {
                $(window).scrollTop() + _ - e.offset().top > 180 && (e.addClass("fade-in-up"), y.splice(o, 1))
            }

            function h(e) {
                if ("index" == C) {
                    var o = $(window).scrollTop() / (1.15 * _) * 60;
                    e.css("transform", "translateY(-" + (o > 30 ? 30 : o) + "px)")
                }
            }

            function w(e) {
                var o;
                o = "index" == C ? 388 : 257, $(window).scrollTop() > 80 && $(window).scrollTop() < $(document).height() - o - _ ? e.addClass("show") : e.removeClass("show")
            }

            function m(e) {
                $(window).scrollTop() > 60 ? e.removeClass("hide").addClass("hide") : e.removeClass("hide")
            }

            function g(e) {
                var o = $(window).scrollTop() / (.75 * _) * 30;
                e.css("transform", "translateY(" + (o > 30 ? 30 : o) + "px)");
                var t = .3 * (o > 30 ? 30 : o) + 34;
                $("#js-header-logo").css("padding-top", t + "px")
            }

            function v(e) {
                var o = $(window).scrollTop() - .6 * _;
                e.css("transform", "translateX(" + (o >= e.width() ? 0 : (e.width() - o) / 2) + "px)")
            }

            function b() {
                for (var e = 0; e < y.length; e++) {
                    var o = $(y[e]);
                    k[o.attr("data-scroll")] && k[o.attr("data-scroll")](o, e)
                }
                if ($(document).height() * f < $(window).scrollTop() + _) {
                    var t = Math.floor(($(window).scrollTop() + _) / (.3 * $(document).height()));
                    sa.track("pc_trigger", {trigger_id: "pc_browse_behaviour_" + (.3 * t * 100).toFixed(0) + "%"}), f = .3 * (t + 1)
                }
            }

            function x() {
                function e() {
                    var e = document.getElementById("zhichiBtn");
                    e.click()
                }

                function o() {
                    n.removeClass("new-message")
                }

                function t() {
                    n.addClass("new-message")
                }

                $(".js-back-top").click(function () {
                    return $("html,body").animate({scrollTop: 0}, 1e3), !1
                });
                var n = $("#js-online-service, #js-online-service-fixed, .js-online-service");
                n.click(function () {
                    e(), o(), l.set("online_service", !0)
                }), l.get("online_service") ? o() : t()
            }

            var y = $("[data-scroll]"), _ = $(window).height(), C = $("#j-pageType").val(), k = {
                scrollup: h,
                scrolldown: g,
                slipleft: v,
                fadeinUp: u,
                zoomIn: d,
                switchBackTop: c,
                scaleDown: p,
                stripleft: i,
                shadowmove: t,
                infoBoxMove: n,
                fadeIn: o,
                titlestrip: a,
                bottomBarControl: w,
                backTopButton: e,
                hideConsultButton: m
            };
            if ("index" == $("#indexItemActiveIndicator").val()) {
                var j = new r;
                $(window).scroll(b).scroll(s).scroll(j.parallaxMove)
            } else $(window).scroll(b);
            b(), x()
        }

        var l = t(4), d = navigator.userAgent.toLowerCase(), p = "ipad" == d.match(/ipad/i),
            u = "micromessenger" == d.match(/MicroMessenger/i), f = .3, h = $(".pic-item-holder");
        p && ($(".js-download-client").show(), $(".js-index-wrapper").css("margin-top", "60px"), $(".js-home-header-wrapper").css("top", "60px"), $(".home-left-nav-wrapper").css("top", "60px"), $(".register-login-box").css("top", "75px")), $(window).width() <= 1080 && $("body").addClass("ipad"), u && p && n(), $(".js-icon-close").click(function () {
            n()
        }), e.exports = c
    }, 4: function (e, o, t) {
        var n, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        !function (a, s) {
            "use strict";
            var r = function (e) {
                if ("object" !== i(e.document)) throw new Error("Cookies.js requires a `window` with a `document` object");
                var o = function t(e, o, n) {
                    return 1 === arguments.length ? t.get(e) : t.set(e, o, n)
                };
                return o._document = e.document, o._cacheKeyPrefix = "cookey.", o._maxExpireDate = new Date("Fri, 31 Dec 9999 23:59:59 UTC"), o.defaults = {
                    path: "/",
                    secure: !1
                }, o.get = function (e) {
                    o._cachedDocumentCookie !== o._document.cookie && o._renewCache();
                    var t = o._cache[o._cacheKeyPrefix + e];
                    return t === s ? s : decodeURIComponent(t)
                }, o.set = function (e, t, n) {
                    return n = o._getExtendedOptions(n), n.expires = o._getExpiresDate(t === s ? -1 : n.expires), o._document.cookie = o._generateCookieString(e, t, n), o
                }, o.expire = function (e, t) {
                    return o.set(e, s, t)
                }, o._getExtendedOptions = function (e) {
                    return {
                        path: e && e.path || o.defaults.path,
                        domain: e && e.domain || o.defaults.domain,
                        expires: e && e.expires || o.defaults.expires,
                        secure: e && e.secure !== s ? e.secure : o.defaults.secure
                    }
                }, o._isValidDate = function (e) {
                    return "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e.getTime())
                }, o._getExpiresDate = function (e, t) {
                    if (t = t || new Date, "number" == typeof e ? e = e === 1 / 0 ? o._maxExpireDate : new Date(t.getTime() + 1e3 * e) : "string" == typeof e && (e = new Date(e)), e && !o._isValidDate(e)) throw new Error("`expires` parameter cannot be converted to a valid Date instance");
                    return e
                }, o._generateCookieString = function (e, o, t) {
                    e = e.replace(/[^#$&+\^`|]/g, encodeURIComponent), e = e.replace(/\(/g, "%28").replace(/\)/g, "%29"), o = (o + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent), t = t || {};
                    var n = e + "=" + o;
                    return n += t.path ? ";path=" + t.path : "", n += t.domain ? ";domain=" + t.domain : "", n += t.expires ? ";expires=" + t.expires.toUTCString() : "", n += t.secure ? ";secure" : ""
                }, o._getCacheFromString = function (e) {
                    for (var t = {}, n = e ? e.split("; ") : [], i = 0; i < n.length; i++) {
                        var a = o._getKeyValuePairFromCookieString(n[i]);
                        t[o._cacheKeyPrefix + a.key] === s && (t[o._cacheKeyPrefix + a.key] = a.value)
                    }
                    return t
                }, o._getKeyValuePairFromCookieString = function (e) {
                    var o = e.indexOf("=");
                    o = 0 > o ? e.length : o;
                    var t, n = e.substr(0, o);
                    try {
                        t = decodeURIComponent(n)
                    } catch (i) {
                        console && "function" == typeof console.error && console.error('Could not decode cookie with key "' + n + '"', i)
                    }
                    return {key: t, value: e.substr(o + 1)}
                }, o._renewCache = function () {
                    o._cache = o._getCacheFromString(o._document.cookie), o._cachedDocumentCookie = o._document.cookie
                }, o._areEnabled = function () {
                    var e = "cookies.js", t = "1" === o.set(e, 1).get(e);
                    return o.expire(e), t
                }, o.enabled = o._areEnabled(), o
            }, c = "object" === i(a.document) ? r(a) : r;
            n = function () {
                return c
            }.call(o, t, o, e), !(n !== s && (e.exports = n))
        }("undefined" == typeof window ? this : window)
    }
});