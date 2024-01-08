// target class = header
// perform = window 
$(function () {
    $(window).scroll(function () {
        $current = $(this).scrollTop();
        if ($current > 0) {
            $("header").addClass("new-header")
        } else {
            $("header").removeClass("new-header")
        }
    })
})