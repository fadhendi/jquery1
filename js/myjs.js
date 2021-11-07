$(function () {
    $("#btn-left").click(function () {
        $("img").animate({
            left: "-=90px"
        });
    });
    $("#btn-right").click(function () {
        $("img").animate({
            left: "+=90px"
        });
    });
    $("#btn-top").click(function () {
        $("img").animate({
            top: "-=90px"
        });
    });
    $("#btn-bottom").click(function () {
        $("img").animate({
            top: "+=90px"
        });
    });
});
