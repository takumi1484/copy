function jump(){
        $(".body1").toggleClass("body2");
    var huga = 0;
    var hoge = setInterval(function() {
        huga++;
        //終了条件
        if (huga == 10) {
            clearInterval(hoge);
            $(".body3").toggleClass("body4");
        }
    }, 20);
    var uga = 0;
    var oge = setInterval(function() {
        uga++;
        //終了条件
        if (uga == 10) {
            clearInterval(oge);
            location.reload();
        }
    }, 100);
}

window.onload = function(){
    $(".to3").toggleClass("to4");
    var ga = 0;
    var ge = setInterval(function() {
        ga++;
        //終了条件
        if (ga == 10) {
            clearInterval(ge);
            $(".to1").toggleClass("to2");
        }
    }, 20);
}

$(window).on('touchmove.noScroll', function(e) {
    e.preventDefault();
});