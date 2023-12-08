// click on button(id) => togglebtn
// target => .nav class
function toggleMenubar() {
    let navbar = document.querySelector(".nav");
    let i = document.getElementById("icon");
    navbar.classList.toggle("new-nav");

    if (navbar.classList.contains("new-nav") == true) {
        i.classList.remove("fa-bars")
        i.classList.add("fa-xmark")
    } else {
        i.classList.remove("fa-xmark")
        i.classList.add("fa-bars")
    }
}