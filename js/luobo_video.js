;(function ($) {
    $.fn.extend({
        "ppting": function (t) {
            var num = 3; //共多少张要轮播的
            var $this = $(this), i = 0, $pics = $('.video_play'), autoChange = function () {

                // var $currentDiv = $pics.find('div:eq(' + (i + 1 === num ? 0 : i + 1) + ')');

                var $preDiv = $pics.find('div:eq(0)');

                var $preImg = $preDiv.find("img:eq(0)");

                var $postDiv = $pics.find('div:eq(4)');
                var $postImg = $postDiv.find("img:eq(0)");


                var $currentDiv = $pics.find('div:eq(1)');
                var $subCurrentDiv = $currentDiv.find("div").eq(0);
                var $currentImg = $subCurrentDiv.find("img").eq(0);

                $currentDiv.addClass('active')
                    .siblings('div').removeClass('active');


                $subCurrentDiv.empty();
                $subCurrentDiv.append($postImg);

                $postDiv.empty();
                $postDiv.append($preImg);
                $preDiv.empty();
                $preDiv.append($currentImg);


                // var $currentPic = $pics.find('a:eq(' + (i + 1 === num ? 0 : i + 1) + ')');
                //
                // $currentPic.css({
                //     display: 'block'
                // }).siblings('a').css({
                //     display: 'none'
                // });

                // $pics.find('.pptNum>span:contains(' + (i + 2 > num ? num - i : i + 2) + ')').attr('class', 'cur').siblings('span').attr('class', 'normal');
                i = i + 1 === num ? 0 : i + 1;
            }, st = setInterval(autoChange, t || 2000);
            $this.hover(function () {
                clearInterval(st);
            }, function () {
                st = setInterval(autoChange, t || 2000)
            });
            // $pics.find('.pptNum>span').click(function () {
            //     i = parseInt($(this).text(), 10) - 2;
            //     autoChange();
            // });
        }
    });
}(jQuery));
$('.video_play').ppting(1000);