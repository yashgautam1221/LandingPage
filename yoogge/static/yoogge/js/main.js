function countChar(val) {
    var len = val.value.length;
    if (len >= 51) {
        val.value = val.value.substring(0, 50);
    } else {
        $("#charNum").text(50 - len);
    }
}

$("textarea").change(function () {
    if ($("textarea").val() !== 0) {
        $(this).css("opacity", "0.8");
    }
});


AOS.init();

$('#RefreshPage').click(function () {
    window.location.reload();
});


$(document).ready(function () {
    $(window).resize(function () {
        if ($(window).width() >= 980) {

            // when you hover a toggle show its dropdown menu
            $(".navbar .dropdown-toggle").hover(function () {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show");
            });


            $(".navbar .dropdown-menu").mouseleave(function () {
                $(this).removeClass("show");
            });

        }
    });
});