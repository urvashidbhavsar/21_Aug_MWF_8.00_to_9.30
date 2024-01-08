// click on button(id) => togglebtn
// target => .nav class
$(document).ready(function () {
    $("#togglebtn").click(function () {
        $(".nav").addClass("new-nav")
    })
    $("#closemenu").click(function () {
        $(".nav").removeClass("new-nav")
    })
})